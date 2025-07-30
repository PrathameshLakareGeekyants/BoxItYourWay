import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const HERO_IMAGE =
  "https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center py-16 px-4 md:px-8  mx-auto">
      <div className="flex-1 text-center md:text-left py-8 md:py-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-gray-900">
          Box It <span className="text-indigo-600">Your Way</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
          Curate the perfect gifting experience: mix and match from our
          collections, create combos for every mood, and get them delivered
          fast.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
          <Button size="lg" asChild>
            <Link href="/products">See Products</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/combos">See Ready Combos</Link>
          </Button>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0">
        <Image
          src={"/combo-hero.png"}
          alt="Gift boxes"
          width={340}
          height={340}
          className="rounded-xl shadow-lg object-cover"
          priority
        />
      </div>
    </section>
  );
}
