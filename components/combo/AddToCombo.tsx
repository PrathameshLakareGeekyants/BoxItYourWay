"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { addToCombo, getCombo } from "@/lib/service/combo";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Loader2Icon } from "lucide-react";
import CreateCombo from "./CreateCombo";
import { toast } from "sonner";

interface Combo {
  id: string;
  name: string;
}

export default function AddToCombo({
  stock,
  productId,
  className,
}: {
  stock: number;
  productId: string;
  className?: string;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["combos"],
    queryFn: getCombo,
  });
  const combos = data?.usersCombos || [];
  const [selected, setSelected] = useState<string | null>(null);
  const [showNewCombo, setShowNewCombo] = useState(false);

  const { mutate } = useMutation({
    mutationFn: async (comboData: { comboId: string; productIds: string[] }) =>
      addToCombo(comboData.comboId, comboData.productIds),

    onError: (err) => {
      toast.error("Failed to add product to combo. Please try again later.");
      setSelected(null);
      setShowNewCombo(false);
    },
    onSuccess: () => {
      toast.success("Product added to combo successfully!");
      setSelected(null);
      setShowNewCombo(false);
    },
  });

  const { data: session } = useSession();

  if (!session) {
    return (
      <Button disabled variant="outline" className={className}>
        Sign in to add to combo
      </Button>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-sm">
        Failed to load combos. Please try again later.
      </div>
    );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={className} variant="outline" disabled={stock <= 0}>
          {stock < 0 ? "Not in stock" : "Add to Combo"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select a Combo</DialogTitle>
          <DialogDescription>
            Choose a combo to add this product, or create a new combo.
          </DialogDescription>
        </DialogHeader>
        {!showNewCombo ? (
          <>
            {isLoading ? (
              <div className="flex items-center justify-center h-24">
                <Loader2Icon className="animate-spin w-6 h-6" />
              </div>
            ) : combos.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-24 gap-2 text-sm text-muted-foreground">
                <span>No combos found.</span>
                <span>Click "Create New Combo" below to add one.</span>
              </div>
            ) : (
              <RadioGroup
                value={selected ?? ""}
                onValueChange={setSelected}
                className="space-y-2"
              >
                {combos.map((combo: Combo) => (
                  <div className="flex items-center space-x-2" key={combo.id}>
                    <RadioGroupItem
                      value={combo.id}
                      id={combo.id}
                      className="flex items-center"
                    />
                    <Label htmlFor={combo.id}>{combo.name}</Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => setShowNewCombo(true)}
            >
              + Create New Combo
            </Button>
          </>
        ) : (
          <CreateCombo setShowNewCombo={setShowNewCombo} />
        )}
        <DialogFooter>
          {!showNewCombo && (
            <Button
              disabled={!selected}
              className="w-full mt-4"
              onClick={() => {
                if (selected && stock > 0) {
                  mutate({ comboId: selected, productIds: [productId] });
                }
              }}
            >
              Add to Selected Combo
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
