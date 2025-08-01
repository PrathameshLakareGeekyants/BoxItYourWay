import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center py-24 px-4 md:px-8 mx-auto  rounded-xl bg-white opacity-80 overflow-hidden">
      <div className="absolute inset-0 bg- opacity-50"></div>
      <div className="relative max-w-3xl mx-auto text-center md:text-left z-10 ">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">
          Box It <span className="text-indigo-500">Your Way</span>
        </h1>
        <p className="text-2xl font-bold mb-8">
          Curate the perfect gifting experience: mix and match from our
          collections, create combos for every mood, and get them delivered
          fast.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
          <Button size="lg" asChild>
            <Link href="/products">See Products</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/combos" className="text-black">
              See Ready Combos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
