"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

const Signin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      setError("Google sign in failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 p-6 bg-white rounded-lg shadow space-y-6"
    >
      <div className="text-center mb-2">
        <span className="text-3xl font-extrabold tracking-tight text-blue-600">
          BoxItYourWay
        </span>
      </div>
      <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}

      {/* Google Sign In Button */}
      <Button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
        variant="outline"
      >
        <FaGoogle /> Sign in with Google
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-500">Or continue with</span>
        </div>
      </div>

      <div className="space-y-4">
        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Signing In..." : "Sign In"}
      </Button>
      <div className="text-center mt-4">
        <span className="text-sm text-gray-600">Don't have an account? </span>
        <Link
          href="/signup"
          className="text-blue-600 hover:underline font-medium"
        >
          Sign up
        </Link>
      </div>
      <button
        type="button"
        onClick={() => setForm({ email: "test@example.com", password: "test" })}
        className="block w-1/2 mx-auto mt-2 bg-transparent border border-neutral-900 text-neutral-900 rounded py-1 hover:bg-neutral-100 transition"
      >
        Sign in as Guest
      </button>
    </form>
  );
};

export default Signin;
