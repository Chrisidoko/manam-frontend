// src/app/blog/[slug]/page.tsx

import { notFound } from "next/navigation";
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
  createdAt: string;
  updatedAt: string;
}

// Update the params type definition
type Params = Promise<{ slug: string }>;

const BlogPage = async ({ params }: { params: Params }) => {
  try {
    // Await the params object to access its properties
    const { slug } = await params;

    const res = await fetch(
      `https://mana-event.onrender.com/api/blogs?slug=${encodeURIComponent(slug)}`,
      { cache: "no-store" }
    );

    if (!res.ok) return notFound();

    const data = await res.json();
    const blog = data.blog; // ✅ Correct key

    if (!blog) return notFound();

    const currentUrl = `https://manam.com/blog/${slug}`;
    const shareLinks = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blog.title)}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blog.title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(blog.title + " " + currentUrl)}`,
    };

    return (
      <div className="max-w-3xl mx-auto py-10 mt-36 flex flex-col overflow-hidden px-3">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <div className="flex gap-2 text-sm text-gray-500 items-center">
          <p>
            {formatInTimeZone(blog.createdAt, "Africa/Lagos", "EEE, MMM d")}
          </p>{" "}
          |
          <span className="group relative bg-[#6C859514] text-[#141d22] px-3 py-1 rounded-2xl inline-flex items-center">
            {blog.category}
          </span>
        </div>
        <div className="relative w-full h-96 mt-4">
          <img
            src={blog.imageUrl || "/No-Image.png"}
            alt={blog.title}
            className="object-cover w-full h-full"
          />
        </div>
        <p className="mt-6 text-gray-700 whitespace-pre-line">{blog.content}</p>
        <div className="mt-16 md:border-y md:border-gray-200 "></div>

        <div className="mt-6 flex gap-4 items-center">
          <span className="text-gray-700 font-medium">Share:</span>

          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Facebook
          </a>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </a>
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={shareLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            WhatsApp
          </a>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return notFound();
  }
};
export default BlogPage;
