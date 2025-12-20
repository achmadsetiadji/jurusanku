import { Question } from '@/lib/certaintyFactor';
import { answerOptions } from '@/data/questionsData';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface CategoryConfig {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  description: string;
  color: string;
  borderColor: string;
}

interface QuestionCardProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedValue: number | null;
  onAnswer: (value: number) => void;
  categoryConfig?: CategoryConfig;
}

const QuestionCard = ({
  question,
  currentIndex,
  totalQuestions,
  selectedValue,
  onAnswer,
  categoryConfig,
}: QuestionCardProps) => {
  return (
    <div className={`bg-card rounded-2xl border-2 p-6 md:p-8 shadow-lg animate-scale-in transition-all ${
      categoryConfig?.borderColor || 'border-border'
    }`}>
      {/* Question number badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
            {currentIndex + 1}
          </span>
          <span className="text-sm text-muted-foreground">
            dari {totalQuestions}
          </span>
        </div>
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
        {answerOptions.map((option, index) => {
          const isSelected = selectedValue === option.value;
          
          // Color coding for answers
          let optionStyle = '';
          if (isSelected) {
            if (option.value >= 0.75) {
              optionStyle = 'border-green-500 bg-green-500/10';
            } else if (option.value >= 0.5) {
              optionStyle = 'border-primary bg-primary/10';
            } else if (option.value >= 0.25) {
              optionStyle = 'border-orange-500 bg-orange-500/10';
            } else {
              optionStyle = 'border-red-500 bg-red-500/10';
            }
          }
          
          return (
            <div
              key={option.value}
              className={`flex items-center space-x-3 p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer animate-fade-in-up hover:scale-[1.02] active:scale-[0.98] ${
                isSelected
                  ? `${optionStyle} shadow-md`
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
              {isSelected && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-scale-in">
                  <svg className="w-4 h-4 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          );
        })}
      </RadioGroup>

      {/* Quick tip */}
      <p className="text-xs text-muted-foreground text-center mt-6">
        Pilih jawaban yang paling menggambarkan dirimu
      </p>
    </div>
  );
};

export default QuestionCard;
