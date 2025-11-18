"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { RiMailSendLine } from "@remixicon/react";
import { TicketDrawer } from "@/components/ui/sendnewsletter";
import SubscribersTable from "@/components/ui/SubscribersTable";

import Cookies from "js-cookie";

export interface BlogCreator {
  _id: string;
  email: string;
}

export interface Newsletter {
  _id: string;
  email: string;
  name: string;
  isSubscribed: boolean;
  subscribedAt: string;
}

export interface Status {
  activeSubscribers: number;
  unsubscribed: number;
  allTimeSubscribers: number;
}

export default function BlogsDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [subscribers, setSubscribers] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<Status | null>(null);

  //pagination and limit fetch
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // to disable next if no more blogs

  // ✅ Use an absolute base URL
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;
  const token = Cookies.get("token");
  const fetchStatus = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/newsletter/stats`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      //to handle both array or object (safe option)
      const data = await res.json();
      const normalized = Array.isArray(data.data) ? data.data[0] : data.data;
      setStatus(normalized);
    } catch (error) {
      console.error("Failed to fetch gallery status:", error);
    }
  };

  const fetchGallery = async (pageNum: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${baseUrl}/api/newsletter?page=${pageNum}&limit=100`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await res.json();

      if (data.data && data.data.length > 0) {
        // Always replace the blogs array with the current page's results
        setSubscribers(data.data);
        setHasMore(data.data.length === 12); // If less than 12, no more pages
      } else {
        setSubscribers([]);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setSubscribers([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // Fetch gallery when page changes
  useEffect(() => {
    fetchGallery(page);
    fetchStatus();
  }, [page]);

  //for delete

  const handleDelete = async (email: string, onSuccess: () => void) => {
    const token = Cookies.get("token");
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    const confirmed = confirm(
      "Are you sure you want to delete this subscriber?"
    );
    if (!confirmed) return;

    try {
      const res = await fetch(`${baseUrl}/api/newsletter/delete`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to delete subscriber.");
      }

      alert("Subscriber deleted successfully!");
      onSuccess();
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  return (
    <main>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Newsletter</h1>
          <p className="text-gray-500 sm:text-sm/6">
            Manage Subscribers and Send Emails
          </p>
        </div>
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-base sm:text-sm"
        >
          Send Email
          <RiMailSendLine
            className="-mr-0.5 size-5 shrink-0"
            aria-hidden="true"
          />
        </Button>
        <TicketDrawer open={isOpen} onOpenChange={setIsOpen} />
      </div>

      <Divider />
      {/* <p>DEBUG RAW RESPONSE: {JSON.stringify(status)}</p> */}
      {status && (
        <div className="mt-4 p-4 bg-[#e0f2fe]/40 rounded-lg group/item border border-transparent border-blue-100">
          <p className="text-[#0395da] font-medium">Newsletter statistics:</p>
          <div className="flex items-center gap-6">
            <p className="text-gray-600 text-sm">
              All Time Subscribers: {status?.allTimeSubscribers ?? 0}
            </p>
            <p className="text-gray-600 text-sm">
              Unsubscribed: {status?.unsubscribed ?? 0}
            </p>
            <p className="text-gray-600 text-sm">
              Active Subscribers: {status?.activeSubscribers ?? 0}
            </p>
          </div>
        </div>
      )}
      {loading ? (
        <div className="mt-12 text-center text-gray-500">
          fecthing Subscribers data...
        </div>
      ) : (
        <SubscribersTable
          subscribers={subscribers}
          loading={loading}
          handleDelete={handleDelete}
          setSubscribers={setSubscribers}
        />
      )}
    </main>
  );
}
