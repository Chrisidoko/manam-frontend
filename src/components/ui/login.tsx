"use client";

import { Input } from "@/components/Input";
import Link from "next/link";

export default function Loginform() {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-start px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="flex mt-4 mb-8 justify-center">
            <img src="/manam(s).png" alt="manam logo" className="w-28" />
          </div>
          <h3 className="text-center font-semibold">Welcome Back</h3>
          <p className="text-center text-gray-600 font-light text-sm">
            Enter your credentials to access your account.
          </p>
          <form action="#" method="post" className="mt-6 space-y-4">
            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="john@manamprofessional.com"
                className="mt-2"
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
              />
            </div>
            <Link href="/admin/overview" className="mt-4 w-full block">
              <button
                type="submit"
                className="mt-3 w-full whitespace-nowrap rounded-md bg-[#0095DA] py-3 text-center text-white leading font-medium text-sm shadow-sm cursor-pointer"
              >
                Sign in
              </button>
            </Link>
          </form>
          <p className="mt-6 text-sm text-gray-600 font-light">
            Forgot your password?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 hover:text-blue-600"
            >
              Reset password
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
