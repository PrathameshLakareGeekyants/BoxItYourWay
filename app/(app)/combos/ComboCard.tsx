import Image from "next/image";
import DeleteComboButton from "./DeleteComboButton";
import AddToCart from "@/components/cart/AddToCart";
import ComboImagesBar from "@/components/combo/ComboImageBar";

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
  totalPrice?: number;
  discountAmount?: number;
  perUnitPrice?: number;
  perUnitDiscount?: number;
  comboItem: ComboItem[];
};

interface ComboCardProps {
  combo: Combo;
  isPublic: boolean;
}

export default function ComboCard({ combo, isPublic }: ComboCardProps) {
  return (
    <div className="flex flex-col border rounded-xl shadow-md bg-white max-w-xl mx-auto p-5 mb-8 h-full transition hover:shadow-lg relative overflow-hidden">
      {combo.comboItem.length > 0 && (
        <div className="mb-1">
          <ComboImagesBar comboItems={combo.comboItem} />
        </div>
      )}

      <span className="absolute top-4 right-4 bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
        Combo
      </span>

      <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-900">
        {combo.name}
      </h3>

      <div
        className={`flex flex-col gap-3 mb-3 ${
          combo.comboItem.length > 3 ? "max-h-[340px] overflow-y-auto pr-2" : ""
        }`}
      >
        {combo.comboItem.length > 0 ? (
          combo.comboItem.map((item) => {
            const product = item.product;
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 border p-3 rounded-lg bg-gray-50"
              >
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  width={56}
                  height={56}
                  className="rounded-lg object-cover border border-gray-200"
                />
                <div className="flex-1">
                  <div className="font-medium text-gray-800">
                    {product.name}
                  </div>
                  <div className="text-xs text-gray-500">
                    {product.description}
                  </div>
                  <div className="text-sm mt-1">
                    <span className="font-semibold text-gray-600">
                      ₹{product.price}
                    </span>
                    <span className="ml-4 text-gray-400">
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
      {combo?.totalPrice && (
        <div className="my-2 text-base font-semibold text-gray-900 flex items-center gap-3">
          {combo.discountAmount && combo.discountAmount > 0 && (
            <span className="text-sm font-normal text-gray-500 line-through">
              ₹{(combo.totalPrice + combo.discountAmount).toFixed(2)}
            </span>
          )}

          <span className="text-lg font-bold text-gray-900">
            ₹{combo.totalPrice.toFixed(2)}
          </span>

          {combo.discountAmount && combo.discountAmount > 0 && (
            <span className="text-sm font-normal text-green-600">
              Save ₹{combo.discountAmount.toFixed(2)}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-col gap-3 mt-auto">
        <AddToCart stock={22} className="" comboId={combo?.id} />

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
