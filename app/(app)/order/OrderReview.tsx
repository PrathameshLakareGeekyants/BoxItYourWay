import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
}

interface ComboItem {
  id: string;
  product?: Product;
}

interface Combo {
  id: string;
  name: string;
  comboItem: ComboItem[];
  totalPrice: number;
}

interface CartItem {
  id: string;
  quantity: number;
  product?: Product;
  combo?: Combo;
}

interface Cart {
  cartItem: CartItem[];
}

interface Address {
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  contact: string;
}

interface OrderTag {
  id: string;
  name: string;
  price: number;
}

interface Wrap {
  id: string;
  name: string;
  price: number;
}

interface Preference {
  id: string;
  preference: string;
  price: number;
}

interface OrderReviewProps {
  cart: Cart;
  address: Address;
  isPlacingOrder: boolean;
  orderOptionsPrice: number;
  onPlaceOrder: () => void;
  orderTagData: OrderTag;
  wrapData: Wrap;
  preferenceData: Preference;
}

export default function OrderReview({
  cart,
  address,
  isPlacingOrder,
  onPlaceOrder,
  orderOptionsPrice,
  orderTagData,
  wrapData,
  preferenceData,
}: OrderReviewProps) {
  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-6">
      <h2 className="text-2xl font-bold mb-2">Review and Place Order</h2>

      <Card>
        <CardTitle className="p-4">Delivery Address</CardTitle>
        <CardContent>
          <div>{address.addressLine}</div>
          <div>
            {address.city}, {address.state} {address.postalCode},{" "}
            {address.country}
          </div>
          <div className="text-sm text-muted-foreground">
            Contact: {address.contact}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardTitle className="p-4">Cart Items</CardTitle>
        <CardContent>
          <ul className="space-y-2">
            {cart.cartItem.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <span>
                  {item.product
                    ? `${item.quantity} × ${item.product.name}`
                    : item.combo
                    ? `${item.quantity} × ${item.combo.name}`
                    : "(unknown item)"}
                </span>
                <span>
                  ₹
                  {item.product
                    ? item.product.price * item.quantity
                    : item.combo
                    ? item.combo.totalPrice
                    : 0}
                </span>
              </li>
            ))}
            <li className="flex items-center justify-between">
              <span>Order Tag</span>
              <span>₹{orderTagData.price}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Wrap</span>
              <span>₹{wrapData.price}</span>
            </li>
            <li className="flex items-center justify-between">
              <span>Preference({preferenceData?.preference})</span>
              <span>₹{preferenceData.price}</span>
            </li>
          </ul>
          <div className="mt-4 flex justify-end font-semibold">
            Total: ₹
            {cart.cartItem.reduce(
              (sum, item) =>
                sum +
                (item.product
                  ? item.product.price * item.quantity
                  : item.combo
                  ? item.combo.totalPrice
                  : 0),
              0
            ) + orderOptionsPrice}
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button
          onClick={onPlaceOrder}
          disabled={isPlacingOrder}
          size="lg"
          className="px-8 font-bold"
        >
          {isPlacingOrder ? "Processing..." : "Proceed to Payment"}
        </Button>
      </div>
    </div>
  );
}
