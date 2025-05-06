"use client";

import { useState, useEffect } from "react";
import { Badge } from "@/components/Badge";
import Link from "next/link";
import Image from "next/image";

// import { cx } from "@/lib/utils"
import Balancer from "react-wrap-balancer";

//  Array of button data
const buttons = [
  {
    text: "All",
  },
  {
    text: "Advisory",
  },
  {
    text: "Tax & Assurance ",
  },
  {
    text: "Management",
  },
  {
    text: "Consultancy",
  },
  {
    text: "Training",
  },
];

// Amount of blogs per page
const blogsPerPage = 9;

const blogs = [
  {
    title: "NGX market resilience: A comprehensive analysis",
    date: "29 April 2025",
    category: "Advisory",
    image: "/NGX.jpg", // valid image
    href: "/blog/ngx-market-resilience",
    slug: "ngx-market-resilience",
  },
  {
    title: "An insight into Gtbank investment community",
    date: "29 April 2025",
    category: "Advisory",
    image: "/gtb.jpg", // no image
    href: "/blog/another-insight",
    slug: "gtbank-investment-community",
  },
  {
    title: "Tax reforms: Implications for businesses in 2025",
    date: "25 April 2025",
    category: "Tax & Assurance ",
    image: "", // no image
    href: "/blog/another-insight",
    slug: "tax-reforms-2025",
  },
  {
    title: "NGX market resilience: A comprehensive analysis",
    date: "29 April 2025",
    category: "Management",
    image: "/NGX.jpg", // valid image
    href: "/blog/ngx-market-resilience",
  },
  {
    title: "An insight into Gtbank investment community",
    date: "29 April 2025",
    category: "Consultancy",
    image: "/gtb.jpg", // no image
    href: "/blog/another-insight",
  },
  {
    title: "An insight into Gtbank investment community",
    date: "29 April 2025",
    category: "Tax & Assurance ",
    image: "", // no image
    href: "/blog/another-insight",
  },
  {
    title: "NGX market resilience: A comprehensive analysis",
    date: "29 April 2025",
    category: "Advisory",
    image: "/NGX.jpg", // valid image
    href: "/blog/ngx-market-resilience",
  },
  {
    title: "An insight into Gtbank investment community",
    date: "29 April 2025",
    category: "Advisory",
    image: "/gtb.jpg", // no image
    href: "/blog/another-insight",
  },
  {
    title: "An insight into Gtbank investment community",
    date: "29 April 2025",
    category: "Tax & Assurance ",
    image: "", // no image
    href: "/blog/another-insight",
  },
  {
    title: "NGX market resilience: A comprehensive analysis",
    date: "29 April 2025",
    category: "Training",
    image: "/NGX.jpg", // valid image
    href: "/blog/ngx-market-resilience",
  },
  {
    title: "An insight into Gtbank investment community",
    date: "29 April 2025",
    category: "Advisory",
    image: "/gtb.jpg", // no image
    href: "/blog/another-insight",
  },
  {
    title: "An insight into Gtbank investment community",
    date: "29 April 2025",
    category: "Tax & Assurance ",
    image: "", // no image
    href: "/blog/another-insight",
  },
  {
    title: "NGX market resilience: A comprehensive analysis",
    date: "29 April 2025",
    category: "Advisory",
    image: "/NGX.jpg", // valid image
    href: "/blog/ngx-market-resilience",
  },
  {
    title: "An insight into Gtbank investment community",
    date: "29 April 2025",
    category: "Advisory",
    image: "/gtb.jpg", // no image
    href: "/blog/another-insight",
  },
  {
    title: "An insight into Gtbank investment community",
    date: "29 April 2025",
    category: "Tax & Assurance ",
    image: "", // no image
    href: "/blog/another-insight",
  },

  {
    title: "An insight into Gtbank investment community",
    date: "20 April 2025",
    category: "Tax & Assurance ",
    image: "", // no image
    href: "/blog/another-insight",
  },
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  //tag switcher
  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  // pagination handler
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="blogs-page"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>Blogs</Badge>
        <h1
          id="blogs-page"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-5xl"
        >
          <Balancer>The Manams blog</Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Get all the relevant market news and financial updates in one place.
        </p>
      </section>
      <section>
        <div className="mt-8 flex flex-wrap gap-3 text-[#141d22]">
          {buttons.map((button, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(button.text)}
              className={`group relative px-3 py-1 rounded-2xl inline-flex cursor-pointer items-center
        ${
          selectedCategory === button.text
            ? "bg-[#0095DA] text-white"
            : "bg-[#6C859514] text-[#141d22]"
        }`}
            >
              {button.text}
            </button>
          ))}
        </div>

        {/* blogs grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentBlogs.map((blog, index) => (
            <div key={index} className="flex flex-col ">
              <div className="relative w-full h-64">
                <Image
                  src={blog.image ? blog.image : "/No-Image.png"}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span>{blog.date}</span>
                <div className="group relative bg-[#6C859514] text-[#141d22] px-3 py-1 rounded-2xl inline-flex cursor-pointer items-center">
                  {blog.category}
                </div>
              </div>
              <Link className="py-3 text-gray-900" href={`/blog/${blog.slug}`}>
                {blog.title}
              </Link>
            </div>
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center space-x-2">
          {totalPages > 1 && (
            <>
              {currentPage > 2 && (
                <>
                  <button
                    onClick={() => handlePageChange(1)}
                    className="px-3 py-1 rounded-full text-gray-800"
                  >
                    1
                  </button>
                  {currentPage > 3 && (
                    <span className="px-2 text-gray-500">...</span>
                  )}
                </>
              )}

              {currentPage > 1 && (
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  className="px-3 py-1 rounded-full text-gray-800"
                >
                  {currentPage - 1}
                </button>
              )}

              <button className="px-3 py-1 rounded-full bg-gray-200 text-gray-800">
                {currentPage}
              </button>

              {currentPage < totalPages && (
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-3 py-1 rounded-full text-gray-800"
                >
                  {currentPage + 1}
                </button>
              )}

              {currentPage < totalPages - 1 && (
                <>
                  {currentPage < totalPages - 2 && (
                    <span className="px-2 text-gray-500">...</span>
                  )}
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className="px-3 py-1 rounded-full text-gray-800"
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
