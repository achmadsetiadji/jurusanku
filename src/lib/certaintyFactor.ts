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
  const majorCFs: { [key: string]: number } = {};

  // Initialize all majors with 0
  majors.forEach((major) => {
    majorCFs[major.id] = 0;
  });

  // Process each answer
  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    if (!question) return;

    // Calculate CF for each related major
    question.relatedMajors.forEach((relation) => {
      const cfEvidence = answer.value * relation.cf; // CF = MB * CF_rule
      
      if (majorCFs[relation.majorId] === 0) {
        majorCFs[relation.majorId] = cfEvidence;
      } else {
        majorCFs[relation.majorId] = combineCF(
          majorCFs[relation.majorId],
          cfEvidence
        );
      }
    });
  });

  // Convert to results array and sort by CF value
  const results: CFResult[] = majors
    .map((major) => ({
      majorId: major.id,
      major,
      cfValue: Math.max(0, Math.min(1, majorCFs[major.id])),
      percentage: parseFloat((Math.max(0, Math.min(1, majorCFs[major.id])) * 100).toFixed(2)),
    }))
    .sort((a, b) => b.cfValue - a.cfValue);

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
