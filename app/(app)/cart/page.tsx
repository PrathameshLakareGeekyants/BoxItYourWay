import { Metadata } from "next";
import CartPageHandler from "./CartPageHandler";

export const metadata: Metadata = {
  title: "Cart",
};

export default function CartPage() {
  return <CartPageHandler />;
}
