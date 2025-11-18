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

  // ✅ Use an absolute base URL
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = Cookies.get("token");

        const res = await fetch(`${baseUrl}/api/get-AllUser`, {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

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
      const res = await fetch(`${baseUrl}/api/make-admin/${userId}`, {
        method: "PUT",
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      if (res.ok) {
        alert(`User promoted to admin: ${result.message || "Success"}`);
        // Update users state
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

  const deleteUser = async (userId: string, userName: string) => {
    // Confirmation dialog
    const isConfirmed = window.confirm(
      `Are you sure you want to delete user "${userName}"? This action cannot be undone.`
    );

    if (!isConfirmed) return;

    const token = Cookies.get("token");
    try {
      const res = await fetch(`${baseUrl}/api/delete-admin/${userId}`, {
        method: "DELETE",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();
      if (res.ok) {
        alert(`User "${userName}" has been deleted successfully.`);
        // Remove user from state
        setUsers((prev) => prev.filter((user) => user._id !== userId));
      } else {
        alert(result.message || result.error || "Failed to delete user.");
      }
    } catch (error) {
      alert("Error deleting user");
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
            <th className="px-4 py-2 border">Actions</th>
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
                <div className="flex gap-2">
                  {user.role !== "admin" && user.role !== "superAdmin" ? (
                    <button
                      onClick={() => makeAdmin(user._id)}
                      className="bg-blue-600 text-white text-xs px-3 py-1 rounded hover:bg-blue-700 transition"
                    >
                      Make Admin
                    </button>
                  ) : (
                    <span className="text-gray-400 text-xs px-3 py-1">
                      {user.role}
                    </span>
                  )}

                  {/* Delete button - available for all users except superAdmin */}
                  {user.role !== "superAdmin" && (
                    <button
                      onClick={() => deleteUser(user._id, user.username)}
                      className="bg-red-600 text-white text-xs px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Delete
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
