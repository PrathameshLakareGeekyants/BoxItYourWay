"use client";

import Link from "next/link";

import { Gift, Truck, ShieldCheck, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "./Hero";
import Features from "./Feature";

export default function Home() {
  return (
    <main className="min-h-screen bg-white container mx-auto px-4 py-8">
      <Hero />

      <Features />

      <section className="py-12 flex justify-center">
        <div className="bg-gradient-to-br from-indigo-50 to-pink-50 border rounded-xl p-12 flex flex-col items-center shadow-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
            Make Someone’s Day
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            Create a combo, write a note, and we’ll handle the rest. All your
            gifting needs, one tidy box.
          </p>
          <Button size="lg" className="px-10" asChild>
            <Link href="/products">Get Started</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
