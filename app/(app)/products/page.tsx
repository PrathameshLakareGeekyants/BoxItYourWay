import prisma from "@/lib/prisma";
import ProductCard from "@/components/common/ProductCard";

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Products Listing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
