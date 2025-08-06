import { Card, CardTitle, CardContent } from "@/components/ui/card";

type OrderItem = {
  id: string;
  quantity: number;
  price: number;
  product?: {
    name: string;
  };
  combo?: {
    name: string;
  };
};

type DeliveryInfo = {
  addressLine: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  contact: string;
};

type Order = {
  id: string;
  delivery: DeliveryInfo;
  orderItems: OrderItem[];
  totalPrice: number;
  orderTagName?: string;
  wrapName?: string;
  preferenceName?: string;
};

interface OrderConfirmationProps {
  order: Order;
}

export default function OrderConfirmation({ order }: OrderConfirmationProps) {
  console.log("order:", order);

  const orderItemsTotal = order.orderItems.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const extras = Math.max(order.totalPrice - orderItemsTotal, 0);

  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-6">
      <Card>
        <CardTitle className="p-4 text-green-700">
          Order Placed and Paid Successfully!
        </CardTitle>
        <CardContent>
          <div className="mb-3 font-semibold">Order ID: {order.id}</div>

          <div className="mb-4">
            <span className="font-semibold">Delivery Address:</span>
            <div>
              {order.delivery.addressLine}, {order.delivery.city}{" "}
              {order.delivery.state} {order.delivery.postalCode},{" "}
              {order.delivery.country}
            </div>
            <div className="text-sm text-muted-foreground">
              Contact: {order.delivery.contact}
            </div>
          </div>

          <div>
            <span className="font-semibold">Order Items:</span>
            <ul className="ml-4 list-disc">
              {order.orderItems.map((item) => (
                <li key={item.id}>
                  {item.product
                    ? `${item.quantity} × ${item.product.name}`
                    : item.combo
                    ? `${item.quantity} × ${item.combo.name}`
                    : "(unknown)"}{" "}
                  — ₹{item.price * item.quantity}
                </li>
              ))}
            </ul>
          </div>

          {/* New section showing order items total, extras, and grand total */}
          <div className="mt-6 space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Items Total:</span>
              <span>₹{orderItemsTotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Extras (e.g. tags, wrap, preference):</span>
              <span>₹{extras}</span>
            </div>
          </div>

          <div className="mt-4 font-bold text-green-900">
            Grand Total: ₹{order.totalPrice}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
