"use client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchDeliveryInfos, createDeliveryInfo } from "@/lib/service/delivery";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddressBook() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const {
    data: addresses,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["deliveryInfos"],
    queryFn: fetchDeliveryInfos,
  });

  const [form, setForm] = useState({
    addressLine: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    contact: "",
  });

  const createAddress = useMutation({
    mutationFn: createDeliveryInfo,
    onSuccess: () => {
      toast.success("Address added!");
      setForm({
        addressLine: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        contact: "",
      });
      queryClient.invalidateQueries({ queryKey: ["deliveryInfos"] });
    },
    onError: () => {
      toast.error("Failed to add address.");
    },
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    createAddress.mutate(form);
  }

  return (
    <div className="max-w-3xl w-full px-2 sm:px-4 mx-auto mt-6 mb-10 space-y-8">
      {/* Form Card */}
      <Card>
        <CardTitle className="p-4 text-base sm:text-lg">
          Add a Delivery Address
        </CardTitle>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                name="addressLine"
                placeholder="Street Address"
                value={form.addressLine}
                onChange={handleChange}
                required
              />
              <Input
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                required
              />
              <Input
                name="state"
                placeholder="State"
                value={form.state}
                onChange={handleChange}
                required
              />
              <Input
                name="postalCode"
                placeholder="Postal Code"
                value={form.postalCode}
                onChange={handleChange}
                required
              />
              <Input
                name="country"
                placeholder="Country"
                value={form.country}
                onChange={handleChange}
                required
              />
              <Input
                name="contact"
                placeholder="Contact Number"
                value={form.contact}
                onChange={handleChange}
                required
              />
            </div>
            <Button
              className="w-full"
              type="submit"
              disabled={createAddress.isPending}
            >
              {createAddress.isPending ? "Saving..." : "Save Address"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Addresses?.deliveryInfos */}
      <div>
        <h2 className="text-xl font-bold mb-4">Saved Addresses</h2>
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div className="text-red-500">
            Failed to fetch addresses?.deliveryInfos.
          </div>
        ) : addresses?.deliveryInfos?.length === 0 ? (
          <div className="text-gray-500 italic">
            No saved addresses?.deliveryInfos.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {addresses?.deliveryInfos.map((a: any) => (
              <Card key={a.id} className="h-full">
                <CardContent className="py-4 flex flex-col h-full">
                  <div className="font-semibold mb-1 break-all">{a.name}</div>
                  <div className="flex-1">
                    <div>{a.addressLine}</div>
                    <div>
                      {a.city}, {a.state} {a.postalCode}, {a.country}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    Contact: {a.contact}
                  </div>
                  <Button
                    className="mt-4 w-full"
                    onClick={() => router.push(`/order?addressId=${a.id}`)}
                  >
                    Deliver to this address
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
