import { Metadata } from "next";
import OrderOptionPage from "./OrderOptionsPage";

export const metadata: Metadata = {
  title: "Order Options",
};

export default function page() {
  return <OrderOptionPage />;
}
