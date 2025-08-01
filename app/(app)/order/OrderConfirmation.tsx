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
  orderItem: OrderItem[];
  totalPrice: number;
};

interface OrderConfirmationProps {
  order: Order;
}

export default function OrderConfirmation({ order }: OrderConfirmationProps) {
  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-6">
      <Card>
        <CardTitle className="p-4 text-green-700">
          Order Placed and Paid Successfully!
        </CardTitle>
        <CardContent>
          <div className="mb-3 font-semibold">Order ID: {order.id}</div>
          <div className="mb-2">
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
              {order.orderItem.map((item) => (
                <li key={item.id}>
                  {item.product
                    ? `${item.quantity} × ${item.product.name}`
                    : item.combo
                    ? `${item.quantity} × ${item.combo.name}`
                    : "(unknown)"}{" "}
                  — ₹
                  {item.product
                    ? item.price * item.quantity
                    : item.combo
                    ? item.price * item.quantity
                    : 0}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 font-bold text-green-900">
            Grand Total: ₹{order.totalPrice}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
