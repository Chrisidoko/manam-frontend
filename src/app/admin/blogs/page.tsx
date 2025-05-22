"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { Divider } from "@/components/Divider";
import { RiAddLine, RiDeleteBinLine } from "@remixicon/react";
import { TicketDrawer } from "@/components/ui/BlogsDrawer";

import Cookies from "js-cookie";

export interface BlogCreator {
  _id: string;
  email: string;
}

export interface Blog {
  _id: string;
  userId: BlogCreator;
  title: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export default function BlogsDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  //pagination and limit fetch
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // to disable next if no more blogs

  const fetchBlogs = async (pageNum: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://mana-event.onrender.com/api/blogs?page=${pageNum}&limit=12`
      );
      const data = await res.json();

      if (data.blogs && data.blogs.length > 0) {
        // Always replace the blogs array with the current page's results
        setBlogs(data.blogs);
        setHasMore(data.blogs.length === 12); // If less than 12, no more pages
      } else {
        setBlogs([]);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setBlogs([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // Fetch blogs when page changes
  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  //for delete

  const handleDelete = async (blogId: string, onSuccess: () => void) => {
    const token = Cookies.get("token"); // Assuming you're storing token this way
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    const confirmed = confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;

    try {
      const res = await fetch(
        `https://mana-event.onrender.com/api/delete-blog/${blogId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to delete blog.");
      }

      alert("Blog deleted successfully!");
      onSuccess(); // Refresh blog list
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  return (
    <main>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Blog Post</h1>
          <p className="text-gray-500 sm:text-sm/6">Create and Delete Blogs</p>
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

      {loading ? (
        <div className="mt-12 text-center text-gray-500">Loading blogs...</div>
      ) : (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
          {blogs.map((blog) => (
            <div
              key={blog._id}
              className="flex flex-col rounded-xl hover:shadow-md hover:shadow-black/15 ring-2 ring-gray-200/80"
            >
              <div className="mt-2 flex flex-col gap-2 p-3">
                <div className="flex justify-between">
                  <div className="w-fit bg-[#edeafb] font-semibold px-3 py-1 rounded-lg text-xs text-[#585163] leading-4 tracking-tighter">
                    {blog.category}
                  </div>
                  <div
                    className="text-red-500 cursor-pointer"
                    onClick={() =>
                      handleDelete(blog._id, () => {
                        // optional: filter the blog out of state
                        setBlogs((prev) =>
                          prev.filter((b) => b._id !== blog._id)
                        );
                      })
                    }
                  >
                    <RiDeleteBinLine />
                  </div>
                </div>
                <span className="line-clamp-2 font-semibold text-gray-900">
                  {blog.title}
                </span>
                <span className="text-xs text-[#4b5563]">
                  {new Date(blog.createdAt).toLocaleDateString("en-NG", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <div className="text-[#141d22] text-sm font-semibold px-1 py-1 rounded-2xl inline-flex items-center">
                  {blog.author}
                </div>
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
