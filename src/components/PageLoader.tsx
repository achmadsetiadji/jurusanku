import { Skeleton } from '@/components/ui/skeleton';

const PageLoader = () => {
  return (
    <div className="min-h-screen pt-16 animate-pulse">
      {/* Hero skeleton */}
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
            <Skeleton className="h-14 w-48 mx-auto sm:mx-0" />
            <Skeleton className="h-14 w-40 mx-auto sm:mx-0" />
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
              <div key={i} className="p-6 rounded-2xl border border-border space-y-4">
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
