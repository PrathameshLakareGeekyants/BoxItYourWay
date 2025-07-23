import prisma from "@/lib/prisma";
import ProductCard from "@/components/common/ProductCard";

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Our Products
          </h1>
          <p className="text-lg text-gray-600">
            Discover our amazing collection of products
          </p>
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span>{products?.length || 0} Products Available</span>
            <div className="h-4 w-px bg-gray-300" />
            <span>Free Shipping Available</span>
          </div>
        </div>

        {products && products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No Products Found
            </h3>
            <p className="text-gray-600">Check back later for new products!</p>
          </div>
        )}
      </div>
    </div>
  );
}
