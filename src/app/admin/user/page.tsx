"use client";

"use client";

import { useState } from "react";
import { Button } from "@/components/Button"; // if you're using a Button component
// import { toast } from "sonner";
import { Input } from "@/components/Input";
import AllUsersTable from "@/components/ui/AllUsersTable";

interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
}

export default function UserDashboard() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    phone: "",
    sex: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Use an absolute base URL
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

    try {
      const res = await fetch(`${baseUrl}/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert("User registered successfully");
        console.log("Success:", result);
      } else {
        // Handle error returned from API like { "error": "Username already existed" }
        if (result.error) {
          alert(result.error); // use alert(result.error) if not using toast
        } else if (result.message) {
          alert(result.message); // fallback
        } else {
          alert("Registration failed");
        }
      }
    } catch (err) {
      console.error("Network or unexpected error:", err);
      alert("Something went wrong");
    }
  };

  return (
    <main>
      {/* 2/3 column */}
      <form onSubmit={handleSubmit}>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* 1/3 column */}
          <div className="flex flex-col gap-y-3 col-span-1">
            <span className="text-2xl font-semibold">Register A New User</span>
            <span className="text-sm text-gray-500">
              Input personal Information of your Admin
            </span>
          </div>

          {/* 2/3 column */}
          <div className="sm:max-w-3xl md:col-span-2">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-6">
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm font-medium">First name</label>
                <Input
                  type="text"
                  name="first_name"
                  placeholder="John"
                  className="mt-2"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm font-medium">Last name</label>
                <Input
                  type="text"
                  name="last_name"
                  placeholder="Doe"
                  className="mt-2"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  className="mt-2"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm font-medium">Username</label>
                <Input
                  type="text"
                  name="username"
                  placeholder="username"
                  className="mt-2"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm font-medium">Password</label>
                <Input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="mt-2"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm font-medium">Phone</label>
                <Input
                  type="text"
                  name="phone"
                  placeholder="080384894847"
                  className="mt-2"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label className="text-sm font-medium">Genders</label>
                <Input
                  type="text"
                  name="sex"
                  placeholder="Male"
                  className="mt-2"
                  value={formData.sex}
                  onChange={handleChange}
                />
              </div>
              <div className="col-span-full ml-auto mt-6">
                <Button type="submit">Register User</Button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="mt-16 flex flex-col gap-4">
        <span className="text-2xl font-semibold">All User</span>
        <span className="text-sm text-gray-500">
          All avialable users with privilages
        </span>

        <AllUsersTable />
      </div>
    </main>
  );
}
