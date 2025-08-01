import Image from "next/image";

type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  stock: number;
};

type ComboItem = {
  id: string;
  comboId: string;
  productId: string;
  product: Product;
};

export default function ComboImagesBar({
  comboItems,
}: {
  comboItems: ComboItem[];
}) {
  return (
    <div className="flex items-center space-x-[-18px] mb-4">
      {comboItems.slice(0, 5).map((item, i) => (
        <div
          key={item.id}
          className={`relative z-${
            10 - i
          } border-2 border-white rounded-full shadow`}
          style={{
            width: 48,
            height: 48,
            overflow: "hidden",
            background: "#f3f3f3",
          }}
        >
          <Image
            src={item.product.imageUrl}
            alt={item.product.name}
            width={48}
            height={48}
            className="object-cover rounded-full"
            style={{ width: 48, height: 48 }}
          />
        </div>
      ))}
      {comboItems.length > 5 && (
        <span className="ml-4 text-xs text-gray-500 font-semibold">
          +{comboItems.length - 5} more
        </span>
      )}
    </div>
  );
}
