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
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@radix-ui/react-label";
import { getCombo } from "@/lib/service/combo";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

interface Combo {
  id: string;
  name: string;
}

export default function AddToCombo({
  stock,
  className,
}: {
  stock: number;
  className?: string;
}) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["combos"],
    queryFn: getCombo,
  });
  const combos = data?.usersCombos || [];
  const [selected, setSelected] = useState<string | null>(null);
  const [showNewCombo, setShowNewCombo] = useState(false);

  const { data: session } = useSession();

  if (!session) {
    return (
      <Button disabled variant="outline" className={className}>
        Sign in to add to combo
      </Button>
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
            <RadioGroup value={selected ?? ""} onValueChange={setSelected}>
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
            <Button
              variant="outline"
              className="w-full mt-4"
              onClick={() => setShowNewCombo(true)}
            >
              + Create New Combo
            </Button>
          </>
        ) : (
          <form className="space-y-4 mt-2">
            <Input placeholder="New Combo Name" />
            <Button type="submit" className="w-full">
              Create Combo
            </Button>
            <Button
              type="button"
              variant="ghost"
              className="w-full"
              onClick={() => setShowNewCombo(false)}
            >
              Back to List
            </Button>
          </form>
        )}
        <DialogFooter>
          {!showNewCombo && (
            <Button disabled={!selected} className="w-full mt-4">
              Add to Selected Combo
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
