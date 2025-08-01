import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Hero from "./Hero";
import Features from "./Feature";

const BACKGROUND_IMAGE =
  "https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src={BACKGROUND_IMAGE}
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        {/* Gradient/Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <Hero />
        <Features />
        <section className="py-12 flex justify-center opacity-80">
          <div className="bg-gradient-to-br from-indigo-50 to-pink-50 border rounded-xl p-12 flex flex-col items-center shadow-md max-w-xl">
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
      </div>
    </main>
  );
}
