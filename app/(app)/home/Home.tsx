import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

import Hero from "./Hero";
import Features from "./Feature";

export default async function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />

      <section className="py-16 bg-gradient-to-br from-blue-50 to-pink-50 text-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Create Your Perfect Box?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Start customizing your combo box today and make someone's day
            special
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-gray-100 hover:bg-gray-200"
            asChild
          >
            <Link href="/create-combo">Create Custom Combo</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
