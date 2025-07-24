"use client";
import { deleteCombo } from "@/app/actions/comboAction";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DeleteComboButton({ comboId }: { comboId: string }) {
  const router = useRouter();
  const handleDelete = async () => {
    try {
      await deleteCombo(comboId);
      toast.success("Combo deleted successfully!");
      router.refresh();
    } catch (error: any) {
      toast.error(error.message || "Failed to delete combo.");
    }
  };

  return (
    <Button
      onClick={handleDelete}
      variant={"ghost"}
      className="text-red-500 hover:bg-red-500 hover:text-white"
    >
      Delete
    </Button>
  );
}
