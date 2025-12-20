import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuestionCard from '@/components/QuestionCard';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { questions, majors } from '@/data/questionsData';
import { Answer, calculateCF } from '@/lib/certaintyFactor';
import { 
  ArrowLeft, 
  ArrowRight, 
  RotateCcw, 
  Lightbulb, 
  BookOpen, 
  GraduationCap,
  Clock,
  CheckCircle2,
  Sparkles,
  Target,
  Trophy
} from 'lucide-react';

const categoryConfig = {
  interest: {
    icon: Lightbulb,
    label: 'Minat & Ketertarikan',
    description: 'Kami ingin mengetahui apa yang membuatmu tertarik dan bersemangat',
    color: 'from-orange-500/20 to-amber-500/20',
    borderColor: 'border-orange-500/30',
  },
  skill: {
    icon: BookOpen,
    label: 'Kemampuan & Keterampilan',
    description: 'Ceritakan tentang kemampuan dan bakat yang kamu miliki',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  academic: {
    icon: GraduationCap,
    label: 'Prestasi Akademik',
    description: 'Bagaimana performa akademikmu di berbagai mata pelajaran',
    color: 'from-green-500/20 to-emerald-500/20',
    borderColor: 'border-green-500/30',
  },
};

const motivationalMessages = [
  { threshold: 0, message: 'Ayo mulai! Jawab dengan jujur untuk hasil terbaik 🚀' },
  { threshold: 10, message: 'Bagus! Terus lanjutkan, kamu sudah di jalur yang benar 💪' },
  { threshold: 25, message: 'Seperempat jalan! Kamu melakukannya dengan baik 🌟' },
  { threshold: 50, message: 'Setengah perjalanan! Tinggal sedikit lagi 🎯' },
  { threshold: 75, message: 'Hampir selesai! Tetap semangat 🔥' },
  { threshold: 90, message: 'Sedikit lagi! Kamu akan segera melihat hasilnya ✨' },
];

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});
  const [showCategoryIntro, setShowCategoryIntro] = useState(true);

  // Group questions by category
  const questionsByCategory = useMemo(() => {
    const grouped: { [key: string]: typeof questions } = {
      interest: [],
      skill: [],
      academic: [],
    };
    questions.forEach(q => {
      grouped[q.category].push(q);
    });
    return grouped;
  }, []);

  // Calculate current category and position
  const { currentCategory, categoryQuestionIndex, totalInCategory } = useMemo(() => {
    let count = 0;
    for (const category of ['interest', 'skill', 'academic'] as const) {
      const categoryQuestions = questionsByCategory[category];
      if (currentQuestionIndex < count + categoryQuestions.length) {
        return {
          currentCategory: category,
          categoryQuestionIndex: currentQuestionIndex - count,
          totalInCategory: categoryQuestions.length,
        };
      }
      count += categoryQuestions.length;
    }
    return { currentCategory: 'interest' as const, categoryQuestionIndex: 0, totalInCategory: 0 };
  }, [currentQuestionIndex, questionsByCategory]);

  // Check if entering a new category
  const isNewCategory = useMemo(() => {
    if (currentQuestionIndex === 0) return true;
    let count = 0;
    for (const category of ['interest', 'skill', 'academic']) {
      if (currentQuestionIndex === count) return true;
      count += questionsByCategory[category].length;
    }
    return false;
  }, [currentQuestionIndex, questionsByCategory]);

  // Calculate progress percentages
  const overallProgress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const categoryProgress = ((categoryQuestionIndex + 1) / totalInCategory) * 100;
  const answeredCount = Object.keys(answers).length;
  const answeredProgress = (answeredCount / questions.length) * 100;

  // Estimated time remaining (30 seconds per question)
  const remainingQuestions = questions.length - answeredCount;
  const estimatedMinutes = Math.ceil((remainingQuestions * 30) / 60);

  // Get motivational message
  const motivationalMessage = useMemo(() => {
    const sortedMessages = [...motivationalMessages].sort((a, b) => b.threshold - a.threshold);
    return sortedMessages.find(m => answeredProgress >= m.threshold)?.message || motivationalMessages[0].message;
  }, [answeredProgress]);

  const currentQuestion = questions[currentQuestionIndex];
  const selectedValue = answers[currentQuestion.id] ?? null;
  const config = categoryConfig[currentCategory];
  const CategoryIcon = config.icon;

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    if (showCategoryIntro && isNewCategory) {
      setShowCategoryIntro(false);
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      
      // Check if next question is new category
      let count = 0;
      for (const category of ['interest', 'skill', 'academic']) {
        if (nextIndex === count) {
          setShowCategoryIntro(true);
          break;
        }
        count += questionsByCategory[category].length;
      }
    } else {
      // Calculate results and navigate
      const answerArray: Answer[] = Object.entries(answers).map(([questionId, value]) => ({
        questionId,
        value,
      }));
      const results = calculateCF(answerArray, questions, majors);
      sessionStorage.setItem('cfResults', JSON.stringify(results));
      navigate('/results');
    }
  };

  const handlePrevious = () => {
    if (showCategoryIntro && isNewCategory && currentQuestionIndex > 0) {
      setShowCategoryIntro(false);
      setCurrentQuestionIndex(prev => prev - 1);
      return;
    }
    
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setShowCategoryIntro(false);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setShowCategoryIntro(true);
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const canProceed = showCategoryIntro ? true : selectedValue !== null;

  // Category intro screen
  if (showCategoryIntro && isNewCategory) {
    const categoryIndex = ['interest', 'skill', 'academic'].indexOf(currentCategory) + 1;
    
    return (
      <>
        <Helmet>
          <title>Asesmen Jurusan - JurusanKu</title>
          <meta name="description" content="Jawab pertanyaan tentang minat, kemampuan, dan prestasi akademik Anda." />
        </Helmet>
        <div className="min-h-screen flex flex-col bg-background">
          <Navbar />
          <main className="flex-1 pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-2xl">
              {/* Overall Progress */}
              <div className="mb-8">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress Keseluruhan</span>
                  <span className="font-medium">{Math.round(answeredProgress)}%</span>
                </div>
                <Progress value={answeredProgress} className="h-2" />
              </div>

              {/* Category Intro Card */}
              <Card className={`p-8 text-center bg-gradient-to-br ${config.color} ${config.borderColor} border-2 animate-scale-in`}>
                <div className="w-20 h-20 rounded-full bg-background/80 flex items-center justify-center mx-auto mb-6 animate-float">
                  <CategoryIcon className="w-10 h-10 text-primary" />
                </div>
                
                <div className="text-sm font-medium text-primary mb-2">
                  Bagian {categoryIndex} dari 3
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  {config.label}
                </h2>
                
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  {config.description}
                </p>

                <div className="flex items-center justify-center gap-6 mb-8 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Target className="w-4 h-4 text-primary" />
                    <span>{totalInCategory} pertanyaan</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>~{Math.ceil(totalInCategory * 0.5)} menit</span>
                  </div>
                </div>

                <Button onClick={handleNext} size="lg" className="gap-2 group">
                  Mulai Bagian Ini
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>

                {currentQuestionIndex > 0 && (
                  <Button 
                    variant="ghost" 
                    onClick={handlePrevious} 
                    className="mt-4 gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Kembali ke Pertanyaan Sebelumnya
                  </Button>
                )}
              </Card>

              {/* Category Overview */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {(['interest', 'skill', 'academic'] as const).map((cat, idx) => {
                  const catConfig = categoryConfig[cat];
                  const CatIcon = catConfig.icon;
                  const catQuestions = questionsByCategory[cat];
                  const catAnswered = catQuestions.filter(q => answers[q.id] !== undefined).length;
                  const isComplete = catAnswered === catQuestions.length;
                  const isCurrent = cat === currentCategory;
                  
                  return (
                    <div 
                      key={cat}
                      className={`p-4 rounded-xl border text-center transition-all ${
                        isCurrent 
                          ? `bg-gradient-to-br ${catConfig.color} ${catConfig.borderColor} border-2`
                          : isComplete
                            ? 'bg-primary/5 border-primary/30'
                            : 'bg-card border-border'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2 ${
                        isComplete ? 'bg-primary text-primary-foreground' : 'bg-muted'
                      }`}>
                        {isComplete ? (
                          <CheckCircle2 className="w-5 h-5" />
                        ) : (
                          <CatIcon className="w-5 h-5" />
                        )}
                      </div>
                      <p className="text-xs font-medium truncate">{catConfig.label.split(' ')[0]}</p>
                      <p className="text-xs text-muted-foreground">{catAnswered}/{catQuestions.length}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Asesmen Jurusan - JurusanKu</title>
        <meta name="description" content="Jawab pertanyaan tentang minat, kemampuan, dan prestasi akademik Anda." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-2xl">
            {/* Top Stats Bar */}
            <div className="bg-card rounded-xl border border-border p-4 mb-6 animate-fade-in">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <CategoryIcon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-sm">{config.label}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>~{estimatedMinutes} mnt</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{answeredCount}/{questions.length}</span>
                  </div>
                </div>
              </div>
              
              {/* Progress bars */}
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Bagian ini</span>
                    <span>{categoryQuestionIndex + 1} / {totalInCategory}</span>
                  </div>
                  <Progress value={categoryProgress} className="h-1.5" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Keseluruhan</span>
                    <span>{Math.round(overallProgress)}%</span>
                  </div>
                  <Progress value={overallProgress} className="h-1.5" />
                </div>
              </div>
            </div>

            {/* Motivational Message */}
            <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-primary/5 border border-primary/20 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary flex-shrink-0" />
              <p className="text-sm text-foreground">{motivationalMessage}</p>
            </div>

            {/* Question Card */}
            <QuestionCard
              question={currentQuestion}
              currentIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              selectedValue={selectedValue}
              onAnswer={handleAnswer}
              categoryConfig={config}
            />

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </Button>

              <Button
                variant="ghost"
                onClick={handleReset}
                className="gap-2 text-muted-foreground transition-all hover:scale-105"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">Reset</span>
              </Button>

              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="gap-2 transition-all hover:scale-105 active:scale-95"
              >
                {isLastQuestion ? (
                  <>
                    <Trophy className="w-4 h-4" />
                    Lihat Hasil
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Selanjutnya</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>

            {/* Category Progress Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {(['interest', 'skill', 'academic'] as const).map((cat) => {
                const catQuestions = questionsByCategory[cat];
                const catAnswered = catQuestions.filter(q => answers[q.id] !== undefined).length;
                const isComplete = catAnswered === catQuestions.length;
                const isCurrent = cat === currentCategory;
                
                return (
                  <div 
                    key={cat}
                    className={`w-3 h-3 rounded-full transition-all ${
                      isComplete 
                        ? 'bg-primary' 
                        : isCurrent 
                          ? 'bg-primary/50 ring-2 ring-primary ring-offset-2 ring-offset-background'
                          : 'bg-muted'
                    }`}
                    title={categoryConfig[cat].label}
                  />
                );
              })}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Assessment;
