import { Question } from '@/lib/certaintyFactor';
import { answerOptions } from '@/data/questionsData';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Lightbulb, GraduationCap } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedValue: number | null;
  onAnswer: (value: number) => void;
}

const categoryIcons = {
  interest: Lightbulb,
  skill: BookOpen,
  academic: GraduationCap,
};

const categoryLabels = {
  interest: 'Minat',
  skill: 'Kemampuan',
  academic: 'Akademik',
};

const QuestionCard = ({
  question,
  currentIndex,
  totalQuestions,
  selectedValue,
  onAnswer,
}: QuestionCardProps) => {
  const CategoryIcon = categoryIcons[question.category];

  return (
    <div className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-lg animate-scale-in">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-6">
        <Badge variant="secondary" className="gap-2 transition-all duration-300 hover:scale-105">
          <CategoryIcon className="w-4 h-4" />
          {categoryLabels[question.category]}
        </Badge>
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} dari {totalQuestions}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full h-2 bg-muted rounded-full mb-8 overflow-hidden">
        <div
          className="h-2 bg-primary rounded-full transition-all duration-500 ease-out"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* Question text */}
      <h2 className="text-xl md:text-2xl font-semibold mb-8 leading-relaxed animate-fade-in">
        {question.text}
      </h2>

      {/* Answer options */}
      <RadioGroup
        value={selectedValue?.toString() ?? ''}
        onValueChange={(value) => onAnswer(parseFloat(value))}
        className="space-y-3"
      >
        {answerOptions.map((option, index) => (
          <div
            key={option.value}
            className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 cursor-pointer animate-fade-in-up hover:scale-[1.02] active:scale-[0.98] ${
              selectedValue === option.value
                ? 'border-primary bg-primary/5 shadow-md'
                : 'border-border hover:border-primary/50 hover:bg-muted/50 hover:shadow-sm'
            }`}
            style={{ animationDelay: `${index * 0.05}s` }}
            onClick={() => onAnswer(option.value)}
          >
            <RadioGroupItem
              value={option.value.toString()}
              id={`option-${option.value}`}
              className="transition-transform duration-200"
            />
            <Label
              htmlFor={`option-${option.value}`}
              className="flex-1 cursor-pointer font-medium"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default QuestionCard;
