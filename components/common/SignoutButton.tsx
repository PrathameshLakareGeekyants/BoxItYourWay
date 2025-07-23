"use client";
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";

const SignoutButton = () => {
  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => signOut({ callbackUrl: "/signin" })}
      >
        <LogOut className="h-4 w-4 mr-2" />
        <span className="hidden sm:inline">Sign out</span>
      </Button>
    </>
  );
};

export default SignoutButton;
