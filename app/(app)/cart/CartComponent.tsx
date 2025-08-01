import QuantityButton from "@/components/common/QuantityButton";
import Image from "next/image";
import DeleteCartItemButton from "./DeleteCartItemButton";
import ComboImagesBar from "@/components/combo/ComboImageBar";

export default function CartComponent({ cart }: { cart: any }) {
  if (!cart || cart.cartItem?.length === 0) {
    return (
      <div className="text-center text-gray-500 py-16">Your cart is empty.</div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="space-y-8">
        {cart.cartItem.map((item: any) => {
          // Combo cart item
          if (item.combo) {
            const comboTotalPrice =
              item.combo.comboItem?.reduce(
                (sum: number, cItem: any) => sum + (cItem.product?.price || 0),
                0
              ) * item.quantity || 0;

            return (
              <div
                key={item.id}
                className="border rounded-lg shadow-sm p-5 bg-white flex flex-col gap-3"
              >
                {/* Top Row: Combo Name and Tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-lg">
                    <ComboImagesBar comboItems={item.combo.comboItem} />
                  </div>

                  <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-700 border border-gray-200">
                    Combo
                  </span>
                </div>

                <div className="font-bold ">{item.combo.name}</div>

                {/* Combo Items List */}
                <div
                  className={`flex gap-3 ${
                    item.combo.comboItem.length > 3
                      ? "overflow-x-auto whitespace-nowrap"
                      : "flex-wrap"
                  }`}
                >
                  {item.combo.comboItem?.map((cItem: any) => {
                    const product = cItem.product;
                    return (
                      product && (
                        <div
                          key={cItem.id}
                          className="inline-block flex-shrink-0 items-center gap-3 border rounded bg-gray-50 px-2 py-1 min-w-[240px]"
                        >
                          <Image
                            src={product.imageUrl}
                            alt={product.name}
                            width={36}
                            height={36}
                            className="rounded object-cover border"
                          />
                          <div>
                            <div className="text-sm font-semibold">
                              {product.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              ₹{product.price} • {product.stock} in stock
                            </div>
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
                <div>
                  <QuantityButton
                    cartId={cart?.id}
                    comboId={item?.combo?.id}
                    currentQuantity={item?.quantity}
                  />
                </div>

                <div className="flex items-center justify-between mt-2 text-sm gap-2">
                  {/* Left: Price */}
                  <p className="w-full sm:w-auto font-semibold text-gray-800 truncate max-w-[180px] lg:max-w-full lg:overflow-visible lg:whitespace-normal whitespace-nowrap mt-1 sm:mt-0">
                    ₹{item.combo.totalPrice.toFixed(2)}
                    {item.combo.discountApplied && (
                      <span className="ml-2 text-sm text-green-600">
                        (5% discount applied)
                      </span>
                    )}
                  </p>
                  {/* Right: Delete */}
                  <div className="flex-shrink-0">
                    <DeleteCartItemButton
                      cartId={cart?.id}
                      cartItemId={item.id}
                    />
                  </div>
                </div>
              </div>
            );
          }

          // Product cart item
          if (item.product) {
            const productTotalPrice = item.product.price * item.quantity;
            return (
              <div
                key={item.id}
                className="border rounded-lg shadow-sm p-5 bg-white flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="text-lg font-medium">{item.product.name}</div>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-600 border border-gray-200">
                    Product
                  </span>
                </div>
                <div className="flex items-center gap-4 border rounded bg-gray-50 p-2">
                  <Image
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    width={48}
                    height={48}
                    className="rounded object-cover border"
                  />
                  <div className="flex-1">
                    <div className="text-sm">{item.product.description}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      ₹{item.product.price} • {item.product.stock} in stock
                    </div>
                  </div>
                </div>
                <div>
                  <QuantityButton
                    cartId={cart?.id}
                    productId={item?.product?.id}
                    currentQuantity={item?.quantity}
                  />
                </div>
                <div className="flex items-center justify-between mt-2 text-sm w-full gap-2">
                  <p className="text-base font-medium text-gray-800 ms-2">
                    ₹{productTotalPrice}
                  </p>
                  <div className="flex-shrink-0">
                    <DeleteCartItemButton
                      cartId={cart?.id}
                      cartItemId={item.id}
                    />
                  </div>
                </div>
              </div>
            );
          }

          return null;
        })}
      </div>
    </div>
  );
}
