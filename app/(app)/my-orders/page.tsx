"use client";

import { useQuery } from "@tanstack/react-query";
import { getOrders } from "@/lib/service/order";
import { useSession, signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function MyOrdersPage() {
  const { data: session, status } = useSession();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
    enabled: status === "authenticated",
  });

  const orders = data?.orders;

  if (status === "loading") {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-lg">
        Loading session...
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="mb-4 text-lg font-semibold">
          You need to sign in to see your orders.
        </p>
        <Button onClick={() => signIn()}>Sign In</Button>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-lg">
        Loading orders...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-600 text-lg">
        Failed to load orders. Please try again later.
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>
      {!orders || orders.length === 0 ? (
        <div className="text-center text-gray-500">No orders found.</div>
      ) : (
        <div className="space-y-10">
          {orders.map((order: any) => (
            <div
              key={order.id}
              className="border rounded-lg shadow-sm bg-white p-6 flex flex-col gap-4"
            >
              {/* Order summary */}
              <div className="flex flex-col md:flex-row md:justify-between mb-2 gap-2">
                <div>
                  <span className="font-semibold">Order ID: </span>
                  <span className="text-sm">{order.id}</span>
                </div>
                <div>
                  <span className="font-semibold">Placed on: </span>
                  <span>
                    {new Date(order.createdAt).toLocaleString("en-IN", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                </div>
              </div>
              {/* Delivery info */}
              {order.delivery && (
                <div className="bg-gray-50 rounded p-3 text-sm">
                  <span className="font-semibold">Delivery To:</span>{" "}
                  {order.delivery.name} | {order.delivery.contact}
                  <br />
                  {order.delivery.addressLine}, {order.delivery.city},{" "}
                  {order.delivery.state}, {order.delivery.country} -{" "}
                  {order.delivery.postalCode}
                </div>
              )}
              {/* Info bar */}
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <span>
                  <span className="font-semibold">Amount:</span> ₹
                  {order.totalPrice}
                </span>
                <span>
                  <span className="font-semibold">Status:</span>{" "}
                  <span
                    className={
                      order.status === "PENDING"
                        ? "text-yellow-600 font-semibold"
                        : order.status === "DELIVERED"
                        ? "text-green-600 font-semibold"
                        : "text-gray-700"
                    }
                  >
                    {order.status}
                  </span>
                </span>
                <span>
                  <span className="font-semibold">Payment:</span>{" "}
                  {order.paymentStatus === "paid" ? (
                    <span className="text-green-600 font-semibold">Paid</span>
                  ) : (
                    <span className="text-red-600 font-semibold">Not Paid</span>
                  )}
                </span>
              </div>
              {/* Items section */}
              <div className="mt-4">
                <span className="font-semibold">Items:</span>
                <ul className="mt-2 space-y-2">
                  {order.orderItems.map((item: any) => {
                    if (item.comboId && item.combo) {
                      return (
                        <li
                          key={item.id}
                          className="flex flex-col gap-1 border p-3 rounded bg-gray-50"
                        >
                          <div className="flex gap-2 items-center">
                            <span className="font-medium">
                              {item.combo.name}
                            </span>
                            <span className="inline-block rounded-full bg-blue-100 text-blue-700 px-2 py-0.5 text-xs font-bold ml-2">
                              Combo
                            </span>
                            <span className="ml-auto text-xs text-gray-600">
                              Quantity: {item.quantity}
                            </span>
                          </div>
                          <div className="ml-4 flex flex-wrap gap-2 text-sm">
                            {item.combo.comboItem.map((ci: any) => (
                              <span
                                key={ci.id}
                                className="inline-block bg-gray-200 rounded px-2 py-0.5"
                              >
                                {ci.product?.name}
                              </span>
                            ))}
                          </div>
                          <span className="ml-4 text-xs text-gray-700">
                            Combo price: ₹{item.price}
                            {item.combo.discountAmount > 0 && (
                              <span className="ml-2 text-green-600">
                                (Saved: ₹{item.combo.discountAmount})
                              </span>
                            )}
                          </span>
                        </li>
                      );
                    }
                    if (item.productId && item.product) {
                      return (
                        <li
                          key={item.id}
                          className="flex gap-2 items-center border p-3 rounded bg-gray-50"
                        >
                          <span className="font-medium">
                            {item.product.name}
                          </span>
                          <span className="inline-block rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-bold ml-2">
                            Product
                          </span>
                          <span className="ml-auto text-xs text-gray-600">
                            Qty: {item.quantity}
                          </span>
                          <span className="text-xs text-gray-700 ml-4">
                            ₹{item.price}
                          </span>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
