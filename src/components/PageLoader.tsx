import { Skeleton } from '@/components/ui/skeleton';
import { Loader2 } from 'lucide-react';

interface PageLoaderProps {
  variant?: 'default' | 'assessment' | 'results' | 'faq' | 'about';
}

const PageLoader = ({ variant = 'default' }: PageLoaderProps) => {
  if (variant === 'assessment') {
    return (
      <div className="min-h-screen pt-24 pb-12 animate-fade-in">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Progress skeleton */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm mb-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-4 w-12" />
            </div>
            <Skeleton className="h-2 w-full rounded-full" />
          </div>

          {/* Category intro card skeleton */}
          <div className="p-8 rounded-2xl border border-border bg-card text-center space-y-6">
            <Skeleton className="w-20 h-20 rounded-full mx-auto" />
            <Skeleton className="h-5 w-24 mx-auto" />
            <Skeleton className="h-8 w-64 mx-auto" />
            <div className="space-y-2 max-w-md mx-auto">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4 mx-auto" />
            </div>
            <div className="flex items-center justify-center gap-6">
              <Skeleton className="h-5 w-28" />
              <Skeleton className="h-5 w-20" />
            </div>
            <Skeleton className="h-12 w-40 mx-auto rounded-lg" />
          </div>

          {/* Category overview skeleton */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-4 rounded-xl border border-border bg-card text-center space-y-2">
                <Skeleton className="w-10 h-10 rounded-full mx-auto" />
                <Skeleton className="h-3 w-16 mx-auto" />
                <Skeleton className="h-3 w-10 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'results') {
    return (
      <div className="min-h-screen pt-24 pb-12 animate-fade-in">
        <div className="container mx-auto px-4">
          {/* Header skeleton */}
          <div className="text-center mb-12 max-w-2xl mx-auto space-y-4">
            <Skeleton className="w-16 h-16 rounded-full mx-auto" />
            <Skeleton className="h-10 w-80 mx-auto" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5 mx-auto" />
            </div>
          </div>

          {/* Top result skeleton */}
          <div className="max-w-2xl mx-auto mb-12 p-6 rounded-2xl border border-border bg-card">
            <div className="text-center space-y-4">
              <Skeleton className="h-4 w-32 mx-auto" />
              <Skeleton className="w-16 h-16 rounded-full mx-auto" />
              <Skeleton className="h-8 w-48 mx-auto" />
              <div className="flex items-center justify-center gap-4">
                <Skeleton className="h-12 w-20" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>
          </div>

          {/* Results grid skeleton */}
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-6 w-40 mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-card space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Skeleton className="w-12 h-12 rounded-xl" />
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    </div>
                    <Skeleton className="h-8 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-2 w-full rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'faq') {
    return (
      <div className="min-h-screen pt-24 pb-12 animate-fade-in">
        <div className="container mx-auto px-4">
          {/* Header skeleton */}
          <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
            <Skeleton className="w-16 h-16 rounded-full mx-auto" />
            <Skeleton className="h-10 w-96 mx-auto" />
            <Skeleton className="h-5 w-80 mx-auto" />
          </div>

          {/* FAQ categories skeleton */}
          <div className="max-w-4xl mx-auto space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-border bg-card overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10 rounded-xl" />
                    <Skeleton className="h-6 w-40" />
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                      <Skeleton className="h-5 w-3/4" />
                      <Skeleton className="w-5 h-5 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'about') {
    return (
      <div className="min-h-screen pt-24 pb-12 animate-fade-in">
        <div className="container mx-auto px-4">
          {/* Header skeleton */}
          <div className="text-center mb-12 max-w-3xl mx-auto space-y-4">
            <Skeleton className="h-10 w-96 mx-auto" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5 mx-auto" />
            </div>
          </div>

          {/* Main card skeleton */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="p-6 border-b border-border bg-muted/30">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-36" />
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-16 w-full rounded-lg" />
              </div>
            </div>
          </div>

          {/* Cards grid skeleton */}
          <div className="max-w-4xl mx-auto">
            <Skeleton className="h-8 w-40 mx-auto mb-6" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="p-6 rounded-2xl border border-border bg-card space-y-4">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <Skeleton className="h-5 w-32" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-5/6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default - Hero page skeleton
  return (
    <div className="min-h-screen pt-16 animate-fade-in">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge skeleton */}
          <div className="flex justify-center">
            <Skeleton className="h-10 w-64 rounded-full" />
          </div>
          
          {/* Title skeleton */}
          <div className="space-y-4">
            <Skeleton className="h-12 md:h-16 w-3/4 mx-auto" />
            <Skeleton className="h-12 md:h-16 w-1/2 mx-auto" />
          </div>
          
          {/* Description skeleton */}
          <div className="space-y-2 max-w-2xl mx-auto">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-4/5 mx-auto" />
          </div>
          
          {/* Buttons skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Skeleton className="h-14 w-48 mx-auto sm:mx-0 rounded-lg" />
            <Skeleton className="h-14 w-40 mx-auto sm:mx-0 rounded-lg" />
          </div>
          
          {/* Stats skeleton */}
          <div className="flex flex-wrap justify-center gap-8 pt-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center space-y-2">
                <Skeleton className="h-10 w-16 mx-auto" />
                <Skeleton className="h-4 w-24" />
              </div>
            ))}
          </div>
          
          {/* Feature cards skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            {[1, 2, 3].map((i) => (
              <div key={i} className="p-6 rounded-2xl border border-border bg-card space-y-4">
                <Skeleton className="h-14 w-14 rounded-2xl mx-auto" />
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
