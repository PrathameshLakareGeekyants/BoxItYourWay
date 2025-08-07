"use client";
import { getCartItems } from "@/lib/service/cart";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import WrapComponent, { Wrap } from "./WrapComponent";
import {
  getOrderTagsData,
  getPreferenceData,
  getWrapData,
} from "@/lib/service/orderOptions";
import OrderTagsComponent from "./OrderTagsComponent";
import { ShoppingBag, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

type OrderTag = {
  id: string;
  name: string;
};

export default function OrderOptions() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedWrap, setSelectedWrap] = useState<string | null>(null);
  const [selectedPreference, setSelectedPreference] = useState<string | null>(
    null
  );
  const { data, isLoading: cartLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCartItems,
  });
  const cart = data?.cart || { cartItem: [] };

  const { data: tags, isLoading: tagLoading } = useQuery({
    queryKey: ["order-tags"],
    queryFn: getOrderTagsData,
  });
  const { data: wrapData, isLoading: wrapLoading } = useQuery({
    queryKey: ["wrap"],
    queryFn: getWrapData,
  });
  const { data: preferenceData, isLoading: preferenceLoading } = useQuery({
    queryKey: ["preference"],
    queryFn: getPreferenceData,
  });

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      toast("You need to sign in to see order options page.");
      router.push("/signin");
    }
  }, [status, router]);

  if (status === "unauthenticated") {
    return null;
  }

  if (
    cartLoading ||
    tagLoading ||
    wrapLoading ||
    preferenceLoading ||
    status === "loading"
  ) {
    return (
      <div className="max-w-3xl mx-auto mt-16 text-center">Loading...</div>
    );
  }

  if (cart.cartItem.length === 0) {
    return (
      <div className="max-w-3xl mx-auto mt-16 text-center">
        There is nothing in cart add some items into cart.
      </div>
    );
  }

  const handleWrapSelect = (wrapId: string) => {
    setSelectedWrap(wrapId);
  };

  const wraps = wrapData.wraps || [];
  const myOrdersTags = tags.myOrderTags || [];
  const publicTags = tags.publicTags || [];
  const orderTags = [...myOrdersTags, ...publicTags];
  const preferences = preferenceData?.preferences || [];

  const PreferenceIcon = ({ type }: { type: string }) => {
    if (type === "BAG")
      return (
        <div className="relative w-full h-32 sm:h-36 md:h-40">
          <Image
            src="https://images.pexels.com/photos/7763936/pexels-photo-7763936.jpeg"
            alt="Bag"
            fill
            className="rounded-md object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
      );
    if (type === "BOX")
      return (
        <div className="relative w-full h-32 sm:h-36 md:h-40">
          <Image
            src="https://images.pexels.com/photos/360624/pexels-photo-360624.jpeg"
            alt="Box"
            fill
            className="rounded-md object-cover"
            sizes="(max-width: 640px) 100vw, 33vw"
          />
        </div>
      );
    return null;
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1>Select order options</h1>
          <div className="my-3">
            <h5>Select Order Tag</h5>
            <OrderTagsComponent
              tags={orderTags}
              onSelect={(tag: OrderTag) => {
                setSelectedTag(tag.id);
              }}
            />
          </div>

          <div className="my-3">
            <h5 className="mb-3">Select Wraper for order</h5>
            <WrapComponent wraps={wraps} onSelect={handleWrapSelect} />
          </div>

          <div className="my-3">
            <h5 className="mb-3">Select Preference for order</h5>
            <div className="flex gap-4">
              {preferences.map(
                ({
                  id,
                  preference,
                  price,
                }: {
                  id: string;
                  preference: string;
                  price: number;
                }) => (
                  <button
                    key={id}
                    onClick={() => setSelectedPreference(id)}
                    className={`flex flex-col items-center border rounded-lg px-3 py-4 cursor-pointer w-50
    ${
      selectedPreference === id
        ? "border-blue-600 bg-blue-100 shadow-sm"
        : "border-gray-300 bg-white hover:shadow-md hover:bg-gray-50"
    }
    focus:outline-none focus:ring-2 focus:ring-blue-500 transition`}
                    aria-label={`Select ${preference.toLowerCase()} preference`}
                  >
                    <PreferenceIcon type={preference} />
                    <span className="mt-2 font-medium text-base capitalize">
                      {preference.toLowerCase()}
                    </span>
                    <span className="text-gray-500 text-sm">₹{price}</span>
                  </button>
                )
              )}
            </div>
          </div>

          {selectedTag && selectedWrap && selectedPreference && (
            <Button
              onClick={() => {
                router.push(
                  `/address?orderTagId=${selectedTag}&wrapId=${selectedWrap}&preferenceId=${selectedPreference}`
                );
              }}
            >
              Proceed to address page
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
