import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCombo } from "@/lib/service/combo";
import { Loader2Icon } from "lucide-react";

type NewComboForm = {
  name: string;
};

export default function CreateCombo({
  setShowNewCombo,
}: {
  setShowNewCombo: (show: boolean) => void;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewComboForm>();

  const queryClient = useQueryClient();

  const {
    mutate,
    isPending,
    error: mutationError,
  } = useMutation({
    mutationFn: async (data: NewComboForm) => createCombo(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["combos"] });
      setShowNewCombo(false);
      reset();
    },
  });

  const handleCreateCombo = (data: NewComboForm) => {
    mutate(data);
  };

  if (isPending) {
  }
  if (isPending) {
    return (
      <div className="flex justify-center items-center">
        <Loader2Icon className="animate-spin" />
      </div>
    );
  }
  if (mutationError) {
    return (
      <div className="text-red-500 text-sm">
        Failed to create combo. Please try again later.
      </div>
    );
  }

  return (
    <form className="space-y-4 mt-2" onSubmit={handleSubmit(handleCreateCombo)}>
      <Input
        placeholder="New Combo Name"
        {...register("name", { required: "Name is required" })}
      />
      {errors.name && typeof errors.name.message === "string" && (
        <span className="text-red-500 text-xs">{errors.name.message}</span>
      )}
      <Button type="submit" className="w-full">
        Create Combo
      </Button>
      <Button
        type="button"
        variant="ghost"
        className="w-full"
        onClick={() => {
          setShowNewCombo(false);
          reset();
        }}
      >
        Back to List
      </Button>
    </form>
  );
}
