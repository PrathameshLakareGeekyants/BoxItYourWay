import MyOrdersPage from "./MyOrders";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Orders",
};

export default function Page() {
  return (
    <div>
      <MyOrdersPage />
    </div>
  );
}
