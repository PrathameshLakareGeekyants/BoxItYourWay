"use client";

import Image from "next/image";
import { useState } from "react";

export type Wrap = {
  id: string;
  name: string;
  isPremium: boolean;
  price: number;
  imageUrl: string;
};

type Props = {
  wraps: Wrap[];
  onSelect?: (wrapId: string) => void;
};

export default function WrapComponent({ wraps, onSelect }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleClick = (wrap: Wrap) => {
    setSelectedId(wrap.id);
    onSelect?.(wrap.id);
  };

  return (
    <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
      {wraps.map((wrap) => {
        const isSelected = wrap.id === selectedId;
        return (
          <button
            key={wrap.id}
            type="button"
            onClick={() => handleClick(wrap)}
            className={`w-32 sm:w-36 md:w-40 relative rounded-lg border-2 p-2 transition
              ${
                isSelected
                  ? "border-blue-600 ring-2 ring-blue-300"
                  : "border-gray-200"
              }
              hover:border-blue-400`}
          >
            <div className="relative w-full h-32 sm:h-36 md:h-40">
              <Image
                src={wrap.imageUrl}
                alt={wrap.name}
                fill
                className="rounded-md object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-sm">
              <span className="font-medium">{wrap.name}</span>
              {wrap.isPremium && (
                <span className="rounded bg-yellow-100 px-1.5 py-0.5 text-xs text-yellow-800">
                  +₹{wrap.price}
                </span>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
}
