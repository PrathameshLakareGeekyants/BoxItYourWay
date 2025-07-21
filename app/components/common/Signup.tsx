"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
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
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      // Sign in the user after successful signup
      const signInResult = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (signInResult?.error) {
        setError("Account created but login failed. Please try signing in.");
        return;
      }

      // Redirect to home page on successful signup and signin
      router.push("/");
      router.refresh();
    } catch (error) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      setError("Google sign up failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow space-y-6"
    >
      <div className="text-center mb-2">
        <span className="text-3xl font-extrabold tracking-tight text-blue-600">
          BoxItYourWay
        </span>
      </div>
      <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
      {error && <div className="text-red-500 text-sm text-center">{error}</div>}

      {/* Google Sign Up Button */}
      <Button
        type="button"
        onClick={handleGoogleSignUp}
        className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
        variant="outline"
      >
        <FaGoogle /> Sign up with Google
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
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />
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
        {isLoading ? "Creating Account..." : "Sign Up"}
      </Button>
      <div className="text-center mt-4">
        <span className="text-sm text-gray-600">Already have an account? </span>
        <Link
          href="/signin"
          className="text-blue-600 hover:underline font-medium"
        >
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default Signup;
