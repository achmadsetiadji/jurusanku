import { CFResult, getConfidenceLevel } from '@/lib/certaintyFactor';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, TrendingUp } from 'lucide-react';

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
      className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 animate-fade-in-up ${
        rank === 1 ? 'border-primary border-2 shadow-md animate-pulse-glow' : 'hover:border-primary/30'
      }`}
      style={{ animationDelay: `${(rank - 1) * 0.1}s` }}
    >
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl transition-transform duration-300 hover:scale-125 hover:rotate-12">{result.major.icon}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                {rank <= 3 && (
                  <Badge variant={rank === 1 ? 'default' : 'secondary'} className="text-xs transition-all duration-300 hover:scale-110">
                    #{rank}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl">{result.major.name}</CardTitle>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary transition-all duration-300 hover:scale-110">{result.percentage}%</div>
            <Badge variant={getBadgeVariant()} className="mt-1 transition-all duration-300 hover:scale-105">
              {confidenceLevel}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* CF Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-primary" />
              Certainty Factor
            </span>
            <span className="font-medium">{result.cfValue.toFixed(3)}</span>
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
            <Briefcase className="w-4 h-4 text-primary" />
            Prospek Karir
          </div>
          <div className="flex flex-wrap gap-2">
            {result.major.careers.map((career, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="text-xs transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:border-primary/30"
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
