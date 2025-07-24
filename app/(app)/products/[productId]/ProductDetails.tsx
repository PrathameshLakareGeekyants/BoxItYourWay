import { getProductById } from "@/app/actions/productAction";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import AddToCombo from "@/components/common/AddToCombo";
import AddToCart from "@/components/common/AddToCart";

export default function ProductDetail({
  product,
}: {
  product: Awaited<ReturnType<typeof getProductById>>;
}) {
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-2">
              {product.category.name}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          </div>

          <p className="text-lg text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <div className="text-3xl font-semibold text-gray-900">
              Price: <span className=" text-green-600">₹{product.price}</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Stock:</span>
              <Badge variant={product.stock > 0 ? "default" : "destructive"}>
                {product.stock > 0
                  ? `${product.stock} available`
                  : "Out of stock"}
              </Badge>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
            <AddToCart stock={product.stock} className="w-full sm:w-48" />
            <AddToCombo stock={product.stock} className="w-full sm:w-48" />
          </div>

          <div className="text-sm text-gray-500 space-y-1">
            <p>Created: {new Date(product.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
