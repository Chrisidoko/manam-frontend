import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Blog data
const blogs = [
  {
    title: "NGX market resilience: A comprehensive analysis",
    slug: "ngx-market-resilience",
    date: "29 April 2025",
    category: "Advisory",
    image: "/NGX.jpg",
    content: `
      The Nigerian Exchange (NGX) continues to demonstrate strong resilience amid economic headwinds...
    `,
  },
  {
    title: "An Insight into Gtbank investment community",
    slug: "gtbank-investment-community",
    date: "15 April 2025",
    category: "Advisory",
    image: "/gtb.jpg",
    content: `
      With the 2025 fiscal reforms, businesses in Nigeria will face new tax rules...
    `,
  },
  {
    title: "Tax reforms: Implications for businesses in 2025",
    slug: "tax-reforms-2025",
    date: "25 April 2025",
    category: "Tax & Assurance",
    image: "",
    content: `
      With the 2025 fiscal reforms, businesses in Nigeria will face new tax rules...
    `,
  },
];

// Mock API function to simulate fetching blog data
async function getBlogBySlug(slug: string) {
  // This simulates an API call with a Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      const blog = blogs.find((b) => b.slug === slug);
      resolve(blog || null);
    }, 10);
  });
}

// Generate static params for build time
export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for each blog page
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const blog = (await getBlogBySlug(params.slug)) as any;

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.content.substring(0, 160),
  };
}

// Page component with explicit Promise handling
export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  // Get the blog data with explicit Promise handling
  const blog = (await getBlogBySlug(params.slug)) as any;

  // If no blog found, return 404
  if (!blog) return notFound();

  // Share links
  // const currentUrl = `https://manam.com/blog/${slug}`;
  // const shareLinks = {
  //   facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
  //   twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blog.title)}`,
  //   linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(blog.title)}`,
  //   whatsapp: `https://wa.me/?text=${encodeURIComponent(blog.title + " " + currentUrl)}`,
  // };

  return (
    <div className="max-w-3xl mx-auto py-10 mt-36 flex flex-col overflow-hidden px-3">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <div className="flex gap-2 text-sm text-gray-500 items-center">
        <p>{blog.date}</p> |
        <span className="group relative bg-[#6C859514] text-[#141d22] px-3 py-1 rounded-2xl inline-flex items-center">
          {blog.category}
        </span>
      </div>
      <div className="relative w-full h-96 mt-4">
        <img
          src={blog.image || "/No-Image.png"}
          alt={blog.title}
          className="object-cover w-full h-full"
        />
      </div>
      <p className="mt-6 text-gray-700 whitespace-pre-line">{blog.content}</p>
      {/* border */}
      <div className="mt-16 md:border-y md:border-gray-200 "></div>

      {/* <div className="mt-6 flex gap-4 items-center">
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
      </div> */}
    </div>
  );
}
