"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Signup = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Login successfully.");
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
      <Button type="submit" className="w-full">
        Sign Up
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
