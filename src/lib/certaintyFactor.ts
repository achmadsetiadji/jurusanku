// Certainty Factor calculation logic for major recommendation

export interface Question {
  id: string;
  text: string;
  category: 'interest' | 'skill' | 'academic';
  relatedMajors: { majorId: string; cf: number }[];
}

export interface Major {
  id: string;
  name: string;
  description: string;
  careers: string[];
  icon: string;
}

export interface Answer {
  questionId: string;
  value: number; // 0-1 scale (0 = sangat tidak setuju, 1 = sangat setuju)
}

export interface CFResult {
  majorId: string;
  major: Major;
  cfValue: number;
  percentage: number;
}

// Combine CF using the formula: CF_combine = CF1 + CF2 * (1 - CF1)
export const combineCF = (cf1: number, cf2: number): number => {
  if (cf1 >= 0 && cf2 >= 0) {
    return cf1 + cf2 * (1 - cf1);
  } else if (cf1 < 0 && cf2 < 0) {
    return cf1 + cf2 * (1 + cf1);
  } else {
    return (cf1 + cf2) / (1 - Math.min(Math.abs(cf1), Math.abs(cf2)));
  }
};

// Calculate CF for each major based on answers
export const calculateCF = (
  answers: Answer[],
  questions: Question[],
  majors: Major[]
): CFResult[] => {
  const majorScores: { [key: string]: { total: number; count: number; weighted: number } } = {};

  // Initialize all majors
  majors.forEach((major) => {
    majorScores[major.id] = { total: 0, count: 0, weighted: 0 };
  });

  // Process each answer - use weighted average instead of CF combination
  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    if (!question) return;

    // Calculate score for each related major
    question.relatedMajors.forEach((relation) => {
      const weight = relation.cf; // Use CF as weight
      const score = answer.value * weight;
      
      majorScores[relation.majorId].total += score;
      majorScores[relation.majorId].count += 1;
      majorScores[relation.majorId].weighted += weight;
    });
  });

  // Calculate normalized scores
  const rawScores = majors.map((major) => {
    const scores = majorScores[major.id];
    if (scores.count === 0 || scores.weighted === 0) return { majorId: major.id, score: 0 };
    
    // Weighted average normalized by total possible weight
    const avgScore = scores.total / scores.weighted;
    return { majorId: major.id, score: avgScore };
  });

  // Sort by raw score first to establish ranking
  const sortedScores = [...rawScores].sort((a, b) => b.score - a.score);
  
  // Create rank-based scoring with guaranteed unique values
  const totalMajors = sortedScores.length;
  const results: CFResult[] = sortedScores.map((item, index) => {
    const major = majors.find(m => m.id === item.majorId)!;
    
    // Base score from rank position (higher rank = higher score)
    const rankScore = (totalMajors - index) / totalMajors;
    
    // Add raw score influence for more nuance
    const maxRaw = sortedScores[0]?.score || 1;
    const minRaw = sortedScores[totalMajors - 1]?.score || 0;
    const rawRange = maxRaw - minRaw || 1;
    const normalizedRaw = (item.score - minRaw) / rawRange;
    
    // Combine rank and raw score (70% rank, 30% raw for good spread)
    const combinedScore = (rankScore * 0.7) + (normalizedRaw * 0.3);
    
    // Scale to 35% - 95% range with unique micro-offset based on index
    const baseScore = 0.35 + (combinedScore * 0.60);
    const uniqueOffset = (totalMajors - index) * 0.001; // Small unique offset per rank
    const finalScore = Math.min(0.95, baseScore + uniqueOffset);
    
    return {
      majorId: major.id,
      major,
      cfValue: parseFloat(finalScore.toFixed(4)),
      percentage: parseFloat((finalScore * 100).toFixed(2)),
    };
  });

  // Ensure all percentages are unique by adjusting duplicates
  const seenPercentages = new Set<number>();
  results.forEach((result, idx) => {
    let pct = result.percentage;
    while (seenPercentages.has(pct)) {
      pct = parseFloat((pct - 0.01).toFixed(2));
    }
    seenPercentages.add(pct);
    results[idx].percentage = pct;
    results[idx].cfValue = parseFloat((pct / 100).toFixed(4));
  });

  return results;
};

// Get confidence level text based on CF value
export const getConfidenceLevel = (cf: number): string => {
  if (cf >= 0.9) return 'Sangat Yakin';
  if (cf >= 0.7) return 'Yakin';
  if (cf >= 0.5) return 'Cukup Yakin';
  if (cf >= 0.3) return 'Kurang Yakin';
  return 'Tidak Yakin';
};
