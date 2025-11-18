"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { RiAddLine, RiDeleteBinLine } from "@remixicon/react";
import { TicketDrawer } from "@/components/ui/GalleryDrawer";

import Cookies from "js-cookie";

export interface BlogCreator {
  _id: string;
  email: string;
}

export interface Gallery {
  _id: string;
  image_id: string;
  image_url: string;
  image_description: string;
  date_uploaded: string;
}

export interface Status {
  totalImages: number;
  maxImages: number;
  remainingSlots: number;
}

export default function BlogsDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [gallery, setGallery] = useState<Gallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<Status | null>(null);

  //pagination and limit fetch
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // to disable next if no more blogs

  // ✅ Use an absolute base URL
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  const fetchStatus = async () => {
    try {
      const token = Cookies.get("token");
      const res = await fetch(`${baseUrl}/api/gallery/status`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      //to handle both array or object (safe option)
      const data = await res.json();
      const normalized = Array.isArray(data) ? data[0] : data;
      setStatus(normalized);
    } catch (error) {
      console.error("Failed to fetch gallery status:", error);
    }
  };

  const fetchGallery = async (pageNum: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `${baseUrl}/api/gallery?page=${pageNum}&limit=12`
      );
      const data = await res.json();

      if (data.data && data.data.length > 0) {
        // Always replace the blogs array with the current page's results
        setGallery(data.data);
        setHasMore(data.data.length === 12); // If less than 12, no more pages
      } else {
        setGallery([]);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setGallery([]);
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

  const handleDelete = async (galleryId: string, onSuccess: () => void) => {
    const token = Cookies.get("token"); // Assuming you're storing token this way
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    const confirmed = confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;

    try {
      const res = await fetch(`${baseUrl}/api/gallery/${galleryId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to delete blog.");
      }

      alert("Gallery post deleted successfully!");
      onSuccess(); // Refresh Gallery list
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  return (
    <main>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Gallery Post</h1>
          <p className="text-gray-500 sm:text-sm/6">
            Create and Delete Gallery Post
          </p>
        </div>
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-base sm:text-sm"
        >
          Create Post
          <RiAddLine className="-mr-0.5 size-5 shrink-0" aria-hidden="true" />
        </Button>
        <TicketDrawer open={isOpen} onOpenChange={setIsOpen} />
      </div>

      <Divider />
      {/* <p>DEBUG RAW RESPONSE: {JSON.stringify(status)}</p> */}
      {status && (
        <div className="mt-4 p-4 bg-[#e0f2fe]/40 rounded-lg group/item border border-transparent border-blue-100">
          <p className="text-[#0395da] font-medium">
            Gallery Status: {status?.totalImages ?? 0}/{status?.maxImages ?? 0}{" "}
            images uploaded
          </p>
          <p className="text-gray-600 text-sm">
            Remaining slots: {status?.remainingSlots ?? 0}
          </p>
        </div>
      )}
      {loading ? (
        <div className="mt-12 text-center text-gray-500">
          Loading Gallery Items...
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
          {gallery.map((gallery) => (
            <div
              key={gallery._id}
              className="flex flex-col rounded-xl hover:shadow-md hover:shadow-black/15 ring-2 ring-gray-200/80"
            >
              <div className="mt-2 flex flex-col gap-2 p-3">
                <img
                  src={`${baseUrl}${gallery.image_url}`}
                  alt={gallery.image_description || "Gallery image"}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                />
                <div className="mt-2 flex justify-between">
                  <span className="line-clamp-2 font-semibold text-gray-900">
                    {gallery.image_description}
                  </span>
                  <div
                    className="text-red-500 cursor-pointer"
                    onClick={() =>
                      handleDelete(gallery.image_id, () => {
                        // optional: filter the blog out of state
                        setGallery((prev) =>
                          prev.filter((b) => b.image_id !== gallery.image_id)
                        );
                      })
                    }
                  >
                    <RiDeleteBinLine />
                  </div>
                </div>

                <span className="text-xs text-[#4b5563]">
                  {new Date(gallery.date_uploaded).toLocaleDateString("en-NG", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                {/* <div className="text-[#141d22] text-sm font-semibold px-1 py-1 rounded-2xl inline-flex items-center">
                  {blog.author}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="pagination-controls flex items-center justify-center mt-12">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1 || loading}
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1"
        >
          &lt; {/* left chevron */}
        </button>

        <span className="px-6">Page {page}</span>

        <button
          onClick={() => {
            if (hasMore) setPage((p) => p + 1);
          }}
          disabled={!hasMore || loading}
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1"
        >
          &gt; {/* right chevron */}
        </button>
      </div>
    </main>
  );
}
