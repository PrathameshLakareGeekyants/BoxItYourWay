import { getProductById } from "@/app/actions/productAction";
import ProductDetail from "./ProductDetails";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ productId: string }>;
}): Promise<Metadata> {
  const { productId } = await params;
  const product = await getProductById(productId);
  const productDetails = product?.product;

  return {
    title: productDetails?.name + " | BoxItYourWay" || undefined,
    description:
      productDetails?.description || "Find out more about this product",
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const awaitedParams = await params;
  const productId = awaitedParams?.productId;

  const product = await getProductById(productId);

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductDetail product={product.product} />
    </div>
  );
}
