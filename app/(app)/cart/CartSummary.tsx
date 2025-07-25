import React from "react";

type Product = {
  id: string;
  name: string;
  price: number;
};

type ComboItem = {
  id: string;
  productId: string;
  product: Product;
};

type Combo = {
  id: string;
  name: string;
  comboItem: ComboItem[];
};

type CartItem = {
  id: string;
  combo: Combo;
};

type Cart = {
  cartItem: CartItem[];
};

interface CartSummaryProps {
  cart: Cart;
  deliveryCharge?: number;
  onPlaceOrder?: () => void;
}

export default function CartSummary({
  cart,
  deliveryCharge = 50,
  onPlaceOrder,
}: CartSummaryProps) {
  const combos = cart?.cartItem || [];
  const totalComboCount = combos.length;
  const productCount = combos.reduce(
    (sum, item) => sum + (item.combo.comboItem?.length || 0),
    0
  );
  const combosTotal = combos.reduce(
    (sum, item) =>
      sum +
      item.combo.comboItem.reduce(
        (cSum, cItem) => cSum + (cItem.product?.price ?? 0),
        0
      ),
    0
  );
  const grandTotal = combosTotal + deliveryCharge;

  return (
    <div className="rounded-lg border p-6 bg-white shadow-lg max-w-md w-full">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Combos in Cart:</span>
        <span>{totalComboCount}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Items in Cart:</span>
        <span>{productCount}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Total Price:</span>
        <span>₹{combosTotal}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Delivery Charge:</span>
        <span>₹{deliveryCharge}</span>
      </div>
      <div className="flex justify-between font-semibold text-green-700 text-lg mt-3 mb-4">
        <span>Grand Total:</span>
        <span>₹{grandTotal}</span>
      </div>
      <button
        className="w-full py-2 px-4 rounded bg-green-600 hover:bg-green-700 text-white font-bold text-lg transition"
        onClick={onPlaceOrder}
      >
        Place Order
      </button>
    </div>
  );
}
