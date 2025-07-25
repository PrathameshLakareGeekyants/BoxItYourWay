import Image from "next/image";
import DeleteComboButton from "./DeleteComboButton";
import AddToCart from "@/components/cart/AddToCart";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
};

type ComboItem = {
  id: string;
  comboId: string;
  productId: string;
  product: Product;
};

type Combo = {
  id: string;
  name: string;
  userId: string | null;
  createdAt: string | Date;
  updatedAt: string | Date;
  comboItem: ComboItem[];
};

interface ComboCardProps {
  combo: Combo;
  isPublic: boolean;
}

export default function ComboCard({ combo, isPublic }: ComboCardProps) {
  return (
    <div className="flex flex-col border rounded-lg shadow-sm p-5 bg-white max-w-xl mx-auto mb-6 h-full">
      <h3 className="text-xl font-semibold mb-2">{combo.name}</h3>
      <div className="flex flex-col gap-3">
        {combo.comboItem.length > 0 ? (
          combo.comboItem.map((item) => {
            const product = item.product;
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 border p-3 rounded"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={72}
                  height={72}
                  className="rounded object-cover"
                />
                <div className="flex-1">
                  <div className="font-medium">{product.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {product.description}
                  </div>
                  <div className="text-sm mt-1">
                    <span className="font-semibold">₹{product.price}</span>
                    <span className="ml-4 text-gray-500">
                      {product.stock} in stock
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="italic text-gray-400">No products in this combo.</div>
        )}
      </div>
      <div className="flex flex-col gap-3 mt-auto">
        <AddToCart stock={22} className="" />

        {!isPublic && (
          <div className="pt-4 flex items-center justify-between text-xs text-gray-400">
            <span>
              Created at: {new Date(combo.createdAt).toLocaleString()}
            </span>
            <DeleteComboButton comboId={combo.id} />
          </div>
        )}
      </div>
    </div>
  );
}
