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
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${
      rank === 1 ? 'border-primary border-2 shadow-md' : ''
    }`}>
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{result.major.icon}</div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                {rank <= 3 && (
                  <Badge variant={rank === 1 ? 'default' : 'secondary'} className="text-xs">
                    #{rank}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl">{result.major.name}</CardTitle>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold text-primary">{result.percentage}%</div>
            <Badge variant={getBadgeVariant()} className="mt-1">
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
              <TrendingUp className="w-4 h-4" />
              Certainty Factor
            </span>
            <span className="font-medium">{result.cfValue.toFixed(3)}</span>
          </div>
          <Progress value={result.percentage} className="h-2" />
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
              <Badge key={index} variant="outline" className="text-xs">
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
