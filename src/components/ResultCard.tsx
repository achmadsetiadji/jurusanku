import { CFResult, getConfidenceLevel } from '@/lib/certaintyFactor';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, TrendingUp, Sparkles } from 'lucide-react';

interface ResultCardProps {
  result: CFResult;
  rank: number;
}

const ResultCard = ({ result, rank }: ResultCardProps) => {
  const confidenceLevel = getConfidenceLevel(result.cfValue);
  
  const getBadgeVariant = () => {
    if (result.percentage >= 70) return 'default';
    if (result.percentage >= 50) return 'secondary';
    return 'outline';
  };

  return (
    <Card 
      className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-fade-in-up cursor-pointer ${
        rank === 1 ? 'border-primary border-2 shadow-lg' : 'hover:border-primary/40'
      }`}
      style={{ animationDelay: `${(rank - 1) * 0.1}s` }}
    >
      {/* Animated Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 transition-all duration-500 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-accent/5" />
      
      {/* Rank 1 Glow Effect */}
      {rank === 1 && (
        <div className="absolute inset-0 animate-pulse-glow rounded-lg" />
      )}
      
      {/* Sparkle for Top 3 */}
      {rank <= 3 && (
        <div className="absolute top-3 right-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Sparkles className="w-4 h-4 text-primary animate-float" />
        </div>
      )}
      
      <CardHeader className="pb-4 relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">{result.major.icon}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                {rank <= 3 && (
                  <Badge 
                    variant={rank === 1 ? 'default' : 'secondary'} 
                    className="text-xs transition-all duration-300 group-hover:scale-110 group-hover:shadow-md"
                  >
                    #{rank}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">{result.major.name}</CardTitle>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-primary">{result.percentage}%</div>
            <Badge variant={getBadgeVariant()} className="mt-1 transition-all duration-300 group-hover:scale-105">
              {confidenceLevel}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4 relative z-10">
        {/* CF Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
              Certainty Factor
            </span>
            <span className="font-medium transition-colors duration-300 group-hover:text-primary">{result.cfValue.toFixed(3)}</span>
          </div>
          <Progress value={result.percentage} className="h-2 transition-all duration-500" />
        </div>

        {/* Description */}
        <CardDescription className="text-sm leading-relaxed">
          {result.major.description}
        </CardDescription>

        {/* Career prospects */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Briefcase className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />
            <span className="transition-colors duration-300 group-hover:text-primary">Prospek Karir</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {result.major.careers.map((career, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:border-primary/30 group-hover:border-primary/20"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {career}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResultCard;
