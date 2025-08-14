import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function ProductsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="h-10 bg-gray-200 rounded-lg w-64 mb-2 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-96 mb-4 animate-pulse"></div>
          <div className="flex items-center gap-4">
            <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
            <div className="h-4 w-px bg-gray-300"></div>
            <div className="h-4 bg-gray-200 rounded w-40 animate-pulse"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProductCardSkeleton() {
  return (
    <Card className="w-full max-w-sm shadow-lg rounded-xl overflow-hidden bg-background">
      <CardHeader className="p-0">
        <div className="relative w-full h-56 bg-gray-200 animate-pulse rounded-t-xl"></div>
      </CardHeader>

      <CardContent className="p-4">
        <div className="h-6 bg-gray-200 rounded mb-2 animate-pulse"></div>

        <div className="mb-4 space-y-2">
          <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-3/5 animate-pulse"></div>
        </div>

        <div className="flex items-center justify-between">
          <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-full w-24 animate-pulse"></div>
        </div>
      </CardContent>

      <div className="p-4 pt-0 mt-auto space-y-2">
        <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>

        <div className="h-10 bg-gray-200 rounded w-full animate-pulse"></div>
      </div>
    </Card>
  );
}
