"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiSearchLine } from "@remixicon/react";
import { formatInTimeZone } from "date-fns-tz";

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
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
}

interface BlogListProps {
  blogs: Blog[];
}

const buttons = [
  "All",
  "Advisory",
  "Tax & Assurance",
  "Management",
  "Consultancy",
  "Training",
];
const blogsPerPage = 9;

export default function BlogList({ blogs }: BlogListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  //only image the link below
  const api_url = "https://mana-event.onrender.com";

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory =
      selectedCategory === "All" ||
      blog.category?.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch = blog.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-3 text-[#141d22]">
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(button)}
            className={`group relative px-3 py-1 rounded-2xl inline-flex cursor-pointer items-center
              ${
                selectedCategory === button
                  ? "bg-[#0095DA] text-white"
                  : "bg-[#6C859514] text-[#141d22]"
              }`}
          >
            {button}
          </button>
        ))}
      </div>

      <div className="mr-auto inline-flex bg-white mt-8 rounded-xl border-2 border-[#0095DA] flex items-center w-fit">
        <div className="p-2 text-[#0095DA] inline-flex mx-auto rounded-xl">
          <RiSearchLine size={20} />
        </div>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pr-4 text-sm text-gray-700 outline-none bg-white w-64"
        />
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentBlogs.map((blog) => (
          <div key={blog._id} className="flex flex-col">
            <div className="relative w-full h-64">
              <Image
                src={
                  blog.imageUrl
                    ? `${api_url}/${blog.imageUrl.replace(/^\/+/, "")}`
                    : "/No-Image.png"
                }
                alt={blog.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="text-[#7c8083] text-xs leading">
                {formatInTimeZone(
                  blog.updatedAt,
                  "Africa/Lagos",
                  "EEE, MMM d • h:mmaaa"
                )}
              </span>
              <div className="bg-[#e9ecf0] text-[#141d22] px-3 py-1 text-xs rounded-2xl">
                {blog.category || "Advisory"}
              </div>
            </div>
            <Link
              className="py-3 font-semibold text-gray-800"
              href={`/blog/${blog.slug}`}
            >
              {blog.title}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center space-x-2">
        {totalPages > 1 &&
          [...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-full ${
                currentPage === i + 1
                  ? "bg-gray-200 text-gray-800"
                  : "text-gray-800"
              }`}
            >
              {i + 1}
            </button>
          ))}
      </div>
    </>
  );
}
