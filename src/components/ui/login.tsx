"use client";

import { Input } from "@/components/Input";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useState } from "react";

export default function Loginform() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // ✅ loading state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("https://mana-event.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.email,
          password: formData.password,
        }),
      });

      if (!res.ok) {
        setError("Invalid credentials");
        setLoading(false);
        return;
      }

      const data = await res.json();

      const { token, user } = data;
      const { email, role } = user;

      // ✅ Generate initials from role
      const initials =
        role
          .match(/[A-Z]?[a-z]+/g) // split camelCase into words
          ?.map((word: string) => word[0].toUpperCase())
          .join("") || "U";

      // ✅ Save to cookies
      Cookies.set("token", token);
      Cookies.set("email", email);
      Cookies.set("role", role);
      Cookies.set("initials", initials); // e.g. "SA"

      router.push("/admin/overview");
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-start px-4 py-10 lg:px-6">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex mt-4 mb-8 justify-center">
          <img src="/manam(s).png" alt="manam logo" className="w-28" />
        </div>
        <h3 className="text-center font-semibold">Welcome Back</h3>
        <p className="text-center text-gray-600 font-light text-sm">
          Enter your credentials to access your account.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="username" className="text-sm font-medium">
              Username
            </label>
            <Input
              type="text"
              id="email"
              name="email"
              autoComplete="email"
              placeholder="Enter username"
              className="mt-2"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              autoComplete="password"
              placeholder="Password"
              className="mt-2"
              onChange={handleChange}
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className={`mt-7 w-full whitespace-nowrap rounded-md py-3 text-center text-white font-medium text-sm shadow-sm cursor-pointer ${
              loading ? "bg-gray-400" : "bg-[#0095DA]"
            }`}
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
