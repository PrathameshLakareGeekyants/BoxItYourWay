import { Gift, Truck, ShieldCheck, Heart } from "lucide-react";

export default function Features() {
  const featuresIconsData = [
    {
      icon: <Gift className="w-7 h-7 text-indigo-600" />,
      title: "Custom Combos",
      desc: "Personalize your box easily",
    },
    {
      icon: <Truck className="w-7 h-7 text-indigo-600" />,
      title: "Express Delivery",
      desc: "Same/Next day in metros",
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-indigo-600" />,
      title: "Quality Gifts",
      desc: "Curated bestsellers guaranteed",
    },
    {
      icon: <Heart className="w-7 h-7 text-indigo-600" />,
      title: "Made with Joy",
      desc: "Every box packed with care",
    },
  ];

  return (
    <>
      <section className="py-10 px-8 ">
        <div className="mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuresIconsData.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition"
            >
              <div className="mb-2">{icon}</div>
              <div className="font-semibold text-base mb-1">{title}</div>
              <div className="text-xs text-gray-500 text-center">{desc}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
