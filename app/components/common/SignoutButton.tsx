"use client";
import { signOut } from "next-auth/react";

const SignoutButton = () => {
  return (
    <>
      <button
        onClick={() => signOut({ callbackUrl: "/signin" })}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        SignOut
      </button>
    </>
  );
};

export default SignoutButton;
