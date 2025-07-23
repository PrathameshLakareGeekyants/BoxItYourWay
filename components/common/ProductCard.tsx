import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import AddToCombo from "../AddToCombo";
import Link from "next/link";
import AddToCart from "../AddToCart";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-sm shadow-lg rounded-xl overflow-hidden bg-background">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`}>
          <div className="relative w-full h-56">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover rounded-t-xl"
              sizes="(max-width: 640px) 100vw, 400px"
              priority
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-primary">
            ₹{product.price}
          </span>
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              product.stock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
          </span>
        </div>
      </CardContent>
      <div className="p-4 pt-0">
        <AddToCart stock={product.stock} className="w-full mb-2" />
        <AddToCombo stock={product.stock} className={"w-full"} />
      </div>
    </Card>
  );
}
