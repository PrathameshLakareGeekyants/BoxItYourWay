import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Box It <span className="text-blue-500">Your Way</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Create perfect gift combinations for every occasion. From birthdays to
          festivals, we help you express your feelings with curated combo boxes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/products">Shop Now</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/combos">View All Combos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
