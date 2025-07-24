import { getProductById } from "@/app/actions/productAction";
import ProductDetail from "./ProductDetails";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const awaitedParams = await params;
  const productId = awaitedParams?.productId;

  const product = await getProductById(productId);
  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product} />
    </div>
  );
}
