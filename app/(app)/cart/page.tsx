"use client";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import CartPage from "./CartPage";

export default function () {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      toast("You need to sign in to see cart.");
      router.push("/signin");
    }
  }, [status, router]);

  if (status === "unauthenticated") {
    return null;
  }

  return <CartPage />;
}
