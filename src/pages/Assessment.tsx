import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuestionCard from '@/components/QuestionCard';
import { Button } from '@/components/ui/button';
import { questions, majors } from '@/data/questionsData';
import { Answer, calculateCF, CFResult } from '@/lib/certaintyFactor';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: number }>({});

  const currentQuestion = questions[currentQuestionIndex];
  const selectedValue = answers[currentQuestion.id] ?? null;

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Calculate results and navigate
      const answerArray: Answer[] = Object.entries(answers).map(([questionId, value]) => ({
        questionId,
        value,
      }));
      const results = calculateCF(answerArray, questions, majors);
      
      // Store results in sessionStorage for the results page
      sessionStorage.setItem('cfResults', JSON.stringify(results));
      navigate('/results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  const answeredCount = Object.keys(answers).length;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const canProceed = selectedValue !== null;
  const allAnswered = answeredCount === questions.length;

  return (
    <>
      <Helmet>
        <title>Asesmen Jurusan - JurusanKu</title>
        <meta name="description" content="Jawab pertanyaan tentang minat, kemampuan, dan prestasi akademik Anda untuk mendapatkan rekomendasi jurusan kuliah yang sesuai." />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Asesmen Jurusan Kuliah</h1>
              <p className="text-muted-foreground">
                Jawab setiap pertanyaan dengan jujur untuk hasil yang akurat
              </p>
            </div>

            {/* Question Card */}
            <QuestionCard
              question={currentQuestion}
              currentIndex={currentQuestionIndex}
              totalQuestions={questions.length}
              selectedValue={selectedValue}
              onAnswer={handleAnswer}
            />

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className="gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Sebelumnya
              </Button>

              <Button
                variant="ghost"
                onClick={handleReset}
                className="gap-2 text-muted-foreground"
              >
                <RotateCcw className="w-4 h-4" />
                Reset
              </Button>

              <Button
                onClick={handleNext}
                disabled={!canProceed}
                className="gap-2"
              >
                {isLastQuestion ? (
                  allAnswered ? 'Lihat Hasil' : 'Selanjutnya'
                ) : (
                  'Selanjutnya'
                )}
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Answer count */}
            <div className="text-center mt-6 text-sm text-muted-foreground">
              {answeredCount} dari {questions.length} pertanyaan dijawab
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Assessment;
