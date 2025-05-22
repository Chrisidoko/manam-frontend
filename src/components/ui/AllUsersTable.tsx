"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface User {
  _id: string;
  username: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  role: string;
}

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = Cookies.get("token");

        const res = await fetch(
          "https://mana-event.onrender.com/api/get-AllUser",
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const responseData = await res.json();

        if (responseData.success && Array.isArray(responseData.data)) {
          setUsers(responseData.data);
        } else {
          console.error("Invalid user data:", responseData);
        }
      } catch (err) {
        console.error("Error fetching users:", err);
      }
    };

    fetchUsers();
  }, []);

  const makeAdmin = async (userId: string) => {
    const token = Cookies.get("token");
    try {
      const res = await fetch(
        `https://mana-event.onrender.com/api/make-admin/${userId}`,
        {
          method: "PUT",
          headers: {
            accept: "*/*",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = await res.json();
      if (res.ok) {
        alert(`User promoted to admin: ${result.message || "Success"}`);
        // Optionally, re-fetch or update users state:
        setUsers((prev) =>
          prev.map((u) => (u._id === userId ? { ...u, role: "admin" } : u))
        );
      } else {
        alert(result.message || result.error || "Failed to promote user.");
      }
    } catch (error) {
      alert("Error promoting user");
      console.error(error);
    }
  };

  return (
    <div className="mt-6 overflow-x-auto">
      <table className="min-w-full text-left text-sm border">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Username</th>
            <th className="px-4 py-2 border">First Name</th>
            <th className="px-4 py-2 border">Last Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border">Phone</th>
            <th className="px-4 py-2 border">Role</th>
            <th className="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user._id} className="border-t">
              <td className="px-4 py-2 border">{user.username}</td>
              <td className="px-4 py-2 border">{user.first_name}</td>
              <td className="px-4 py-2 border">{user.last_name}</td>
              <td className="px-4 py-2 border">{user.email}</td>
              <td className="px-4 py-2 border">{user.phone}</td>
              <td className="px-4 py-2 border capitalize">{user.role}</td>
              <td className="px-4 py-2 border">
                {user.role !== "admin" && user.role !== "superAdmin" ? (
                  <button
                    onClick={() => makeAdmin(user._id)}
                    className="bg-gray-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    Make Admin
                  </button>
                ) : (
                  <span className="text-gray-400 text-xs">
                    Already {user.role}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
