import { Button } from "@/components/ui/button";
import Link from "next/link";

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
  userId: string;
  createdAt: string;
  updatedAt: string;
  comboItem: ComboItem[];
  totalPrice: number;
};

type CartItem = {
  id: string;
  comboId: string | null;
  productId: string | null;
  cartId: string;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  combo: Combo | null;
  product: Product | null;
};

type Cart = {
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  cartItem: CartItem[];
};

interface CartSummaryProps {
  cart: Cart;
  deliveryCharge?: number;
  onPlaceOrder?: () => void;
}

export default function CartSummary({
  cart,
  deliveryCharge = 0,
}: CartSummaryProps) {
  const combosInCart = cart?.cartItem?.filter((item) => item.combo).length;
  const itemsInCart = cart?.cartItem?.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cart?.cartItem?.reduce((sum, item) => {
    if (item.product) {
      return sum + item.quantity * (item.product.price || 0);
    }
    if (item.combo) {
      return sum + item.combo.totalPrice;
    }
    return sum;
  }, 0);

  const grandTotal = totalPrice + (itemsInCart === 0 ? 0 : deliveryCharge);

  return (
    <div className="rounded-lg border p-6 bg-white shadow-lg w-full">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Combos in Cart:</span>
        <span>{combosInCart}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Items in Cart:</span>
        <span>{itemsInCart}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Total Price:</span>
        <span>₹{totalPrice}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Delivery Charge:</span>
        <span>₹{itemsInCart === 0 ? 0 : deliveryCharge}</span>
      </div>
      <div className="flex justify-between font-semibold text-green-700 text-lg mt-3 mb-4">
        <span>Grand Total:</span>
        <span>₹{grandTotal}</span>
      </div>

      {itemsInCart === 0 ? (
        <Button
          disabled
          className="w-full py-2 px-4 rounded bg-green-600 hover:bg-green-700 text-white font-bold text-lg transition"
        >
          Place Order
        </Button>
      ) : (
        <Link href="/order/order-options" passHref>
          <Button className="w-full py-2 px-4 rounded bg-green-600 hover:bg-green-700 text-white font-bold text-lg transition">
            Place Order
          </Button>
        </Link>
      )}
    </div>
  );
}
