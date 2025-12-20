import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageLoader from '@/components/PageLoader';
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
  Trophy,
  Star
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
  const [isLoading, setIsLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  if (isLoading) {
    return (
      <>
        <Navbar />
        <PageLoader variant="assessment" />
      </>
    );
  }

  // Category intro screen
  if (showCategoryIntro && isNewCategory) {
    const categoryIndex = ['interest', 'skill', 'academic'].indexOf(currentCategory) + 1;
    
    return (
      <>
        <Helmet>
          <title>Asesmen Jurusan - JurusanKu</title>
          <meta name="description" content="Jawab pertanyaan tentang minat, kemampuan, dan prestasi akademik Anda." />
        </Helmet>
        <div className="min-h-screen flex flex-col bg-background overflow-x-hidden scroll-smooth">
          <Navbar />
          <main className="flex-1 pt-24 pb-12">
            <div className="container mx-auto px-4 max-w-2xl">
              {/* Overall Progress */}
              <div className="mb-8 animate-fade-in">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Progress Keseluruhan</span>
                  <span className="font-medium">{Math.round(answeredProgress)}%</span>
                </div>
                <Progress value={answeredProgress} className="h-2" />
              </div>

              {/* Category Intro Card with Parallax */}
              <div className="relative">
                {/* Floating Orbs */}
                <div 
                  className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float"
                  style={{ transform: `translateY(${scrollY * 0.1}px)` }}
                />
                <div 
                  className="absolute -bottom-10 -right-10 w-24 h-24 bg-accent/15 rounded-full blur-2xl animate-float-delayed"
                  style={{ transform: `translateY(${scrollY * -0.08}px)` }}
                />
                
                <Card className="group relative p-8 text-center border border-border animate-scale-in transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 animate-gradient-shift" />
                  
                  {/* Decorative Stars */}
                  <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Star className="w-5 h-5 text-primary/30 animate-float" />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Sparkles className="w-4 h-4 text-primary/40 animate-float" style={{ animationDelay: '0.5s' }} />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-float transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                      <CategoryIcon className="w-10 h-10 text-primary transition-all duration-500 group-hover:text-primary-foreground group-hover:scale-110" />
                    </div>
                    
                    <div className="text-sm font-medium text-primary mb-2 flex items-center justify-center gap-2">
                      <span className="w-6 h-px bg-primary/30" />
                      Bagian {categoryIndex} dari 3
                      <span className="w-6 h-px bg-primary/30" />
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-text-shimmer">
                      {config.label}
                    </h2>
                    
                    <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                      {config.description}
                    </p>

                    <div className="flex items-center justify-center gap-6 mb-8 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground group/stat transition-all duration-300 hover:text-primary">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover/stat:bg-primary group-hover/stat:shadow-lg">
                          <Target className="w-5 h-5 text-primary transition-colors duration-300 group-hover/stat:text-primary-foreground" />
                        </div>
                        <span>{totalInCategory} pertanyaan</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground group/stat transition-all duration-300 hover:text-primary">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover/stat:bg-primary group-hover/stat:shadow-lg">
                          <Clock className="w-5 h-5 text-primary transition-colors duration-300 group-hover/stat:text-primary-foreground" />
                        </div>
                        <span>~{Math.ceil(totalInCategory * 0.5)} menit</span>
                      </div>
                    </div>

                    <Button onClick={handleNext} size="lg" className="gap-2 group/btn transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 hover:scale-105">
                      Mulai Bagian Ini
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-primary-foreground" />
                    </Button>

                    {currentQuestionIndex > 0 && (
                      <Button 
                        variant="ghost" 
                        onClick={handlePrevious} 
                        className="mt-4 gap-2 transition-all duration-300 hover:bg-primary/10"
                      >
                        <ArrowLeft className="w-4 h-4 text-muted-foreground" />
                        Kembali ke Pertanyaan Sebelumnya
                      </Button>
                    )}
                  </div>
                </Card>
              </div>

              {/* Category Overview with Hover Effects */}
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
                      className={`group p-4 rounded-xl border text-center transition-all duration-500 hover:shadow-lg hover:-translate-y-1 cursor-pointer ${
                        isCurrent 
                          ? 'bg-primary/5 border-primary/30'
                          : isComplete
                            ? 'bg-primary/5 border-primary/30'
                            : 'bg-card border-border hover:border-primary/20'
                      }`}
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 transition-all duration-500 group-hover:scale-110 ${
                        isComplete ? 'bg-primary group-hover:shadow-lg group-hover:shadow-primary/25' : 'bg-primary/10 group-hover:bg-primary/20'
                      }`}>
                        {isComplete ? (
                          <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                        ) : (
                          <CatIcon className="w-6 h-6 text-primary" />
                        )}
                      </div>
                      <p className="text-xs font-medium truncate transition-colors duration-300 group-hover:text-primary">{catConfig.label.split(' ')[0]}</p>
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
      <div className="min-h-screen flex flex-col bg-background overflow-x-hidden scroll-smooth">
        <Navbar />
        <main className="flex-1 pt-24 pb-12 relative">
          {/* Background Parallax Elements */}
          <div 
            className="absolute top-20 -left-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute bottom-40 -right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl pointer-events-none"
            style={{ transform: `translateY(${scrollY * -0.08}px)` }}
          />
          
          <div className="container mx-auto px-4 max-w-2xl relative z-10">
            {/* Top Stats Bar with Enhanced Animation */}
            <div 
              className="group bg-card rounded-xl border border-border p-4 mb-6 animate-fade-in transition-all duration-500 hover:shadow-xl hover:border-primary/20"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                    <CategoryIcon className="w-5 h-5 text-primary transition-colors duration-500 group-hover:text-primary-foreground" />
                  </div>
                  <span className="font-medium text-sm transition-colors duration-300 group-hover:text-primary">{config.label}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5 transition-all duration-300 hover:text-primary">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
                      <Clock className="w-4 h-4 text-primary" />
                    </div>
                    <span>~{estimatedMinutes} mnt</span>
                  </div>
                  <div className="flex items-center gap-1.5 transition-all duration-300 hover:text-primary">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center transition-all duration-300 hover:bg-primary/20">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
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

            {/* Motivational Message with Animation */}
            <div 
              className="group flex items-center gap-2 mb-6 p-3 rounded-xl bg-card border border-border animate-fade-in transition-all duration-500 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5"
              style={{ transform: `translateY(${scrollY * 0.015}px)` }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25">
                <Sparkles className="w-5 h-5 text-primary transition-all duration-500 group-hover:text-primary-foreground group-hover:rotate-12" />
              </div>
              <p className="text-sm text-foreground">{motivationalMessage}</p>
            </div>

            {/* Question Card with Parallax */}
            <div style={{ transform: `translateY(${scrollY * 0.01}px)` }}>
              <QuestionCard
                question={currentQuestion}
                currentIndex={currentQuestionIndex}
                totalQuestions={questions.length}
                selectedValue={selectedValue}
                onAnswer={handleAnswer}
                categoryConfig={config}
              />
            </div>

            {/* Navigation Buttons */}
            <div 
              className="flex items-center justify-between mt-6"
              style={{ transform: `translateY(${scrollY * 0.005}px)` }}
            >
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="gap-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:border-primary/30"
              >
                <ArrowLeft className="w-4 h-4 text-foreground" />
                <span className="hidden sm:inline">Sebelumnya</span>
              </Button>

              <Button
                variant="ghost"
                onClick={handleReset}
                className="gap-2 text-muted-foreground transition-all duration-300 hover:scale-105 hover:text-primary"
              >
                <RotateCcw className="w-4 h-4 text-muted-foreground" />
                <span className="hidden sm:inline">Reset</span>
              </Button>

              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="gap-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl hover:shadow-primary/25"
              >
                {isLastQuestion ? (
                  <>
                    <Trophy className="w-4 h-4 text-primary-foreground" />
                    Lihat Hasil
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">Selanjutnya</span>
                    <ArrowRight className="w-4 h-4 text-primary-foreground" />
                  </>
                )}
              </Button>
            </div>

            {/* Category Progress Dots with Animation */}
            <div className="flex justify-center gap-3 mt-8">
              {(['interest', 'skill', 'academic'] as const).map((cat, idx) => {
                const catQuestions = questionsByCategory[cat];
                const catAnswered = catQuestions.filter(q => answers[q.id] !== undefined).length;
                const isComplete = catAnswered === catQuestions.length;
                const isCurrent = cat === currentCategory;
                
                return (
                  <div 
                    key={cat}
                    className={`w-4 h-4 rounded-full transition-all duration-500 cursor-pointer hover:scale-125 ${
                      isComplete 
                        ? 'bg-primary shadow-lg shadow-primary/25' 
                        : isCurrent 
                          ? 'bg-primary/50 ring-2 ring-primary ring-offset-2 ring-offset-background animate-pulse'
                          : 'bg-muted hover:bg-primary/30'
                    }`}
                    title={categoryConfig[cat].label}
                    style={{ animationDelay: `${idx * 0.1}s` }}
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
