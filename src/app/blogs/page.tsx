import { Badge } from "@/components/Badge";
import Balancer from "react-wrap-balancer";
import BlogList from "./BlogList";

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

export default async function BlogPage() {
  let blogs: Blog[] = [];
  let errorMessage: string | null = null;

  try {
    const res = await fetch(
      "https://mana-event.onrender.com/api/blogs?page=1&limit=100",
      {
        next: { revalidate: 0 },
      }
    );

    // 1. Check if the HTTP status code indicates success (200-299)
    if (!res.ok) {
      // If the response is not successful (e.g., 404, 500, 502),
      // set an error message and skip JSON parsing.
      console.error(
        `Fetch failed with status: ${res.status} (${res.statusText})`
      );
      errorMessage = `Failed to load posts (Server Status: ${res.status}).`;

      // Stop processing here.
      // If the server is down, catch the 502/503/ errors.
    } else {
      // Only attempt to parse the response if the status is OK.
      // Wrap the parsing in a try/catch to handle malformed JSON (the "Unexpected token '<'" error).
      try {
        const data = await res.json();
        blogs = data.blogs || [];
      } catch (jsonError) {
        console.error("Error parsing JSON response:", jsonError);
        errorMessage =
          "Server returned valid status but invalid data format. Please check the backend service.";
      }
    }
  } catch (networkError) {
    // Catch network issues (DNS failure, server completely unreachable )
    console.error("Network or connection error:", networkError);
    errorMessage =
      "Cannot connect to the blog server. Please check your network connection or try again later.";
  }

  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section aria-labelledby="blogs-page" className="animate-slide-up-fade">
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
      {/* Display Error Message if present */}
      {/* {errorMessage && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{errorMessage}</span>
          <p className="text-sm mt-2">
            The external API service may be unavailable. We apologize for the
            inconvenience.
          </p>
        </div>
      )} */}

      <BlogList blogs={blogs} />
    </div>
  );
}
