import Image from "next/image";

export default function CartComponent({ cart }: { cart: any }) {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Your Cart</h1>
      {cart?.cartItem?.length === 0 ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <div className="space-y-8">
          {cart?.cartItem?.map((item: any) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-sm p-6 bg-white flex flex-col gap-4"
            >
              <h2 className="text-xl font-semibold">{item.combo.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.combo.comboItem.map((cItem: any) => {
                  const product = cItem.product;
                  return (
                    product && (
                      <div
                        key={cItem.id}
                        className="flex items-center gap-4 border p-3 rounded"
                      >
                        <Image
                          src={product.imageUrl}
                          alt={product.name}
                          width={72}
                          height={72}
                          className="rounded object-cover"
                        />
                        <div>
                          <div className="font-medium">{product.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {product.description}
                          </div>
                          <div className="text-sm mt-1">
                            <span className="font-semibold">
                              ₹{product.price}
                            </span>
                            <span className="ml-4 text-gray-500">
                              {product.stock} in stock
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
