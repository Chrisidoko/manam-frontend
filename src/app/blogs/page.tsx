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
  const res = await fetch(
    "https://mana-event.onrender.com/api/blogs?page=1&limit=100",
    {
      next: { revalidate: 0 },
    }
  );

  const data = await res.json();
  const blogs: Blog[] = data.blogs || [];

  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section aria-labelledby="blogs-page" className="animate-slide-up-fade">
        <Badge>Blogs</Badge>
        <h1
          id="blogs-page"
          className="mt-2 text-4xl font-bold tracking-tighter text-transparent bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text"
        >
          <Balancer>The Manams blog</Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Get all the relevant market news and financial updates in one place.
        </p>
      </section>

      <BlogList blogs={blogs} />
    </div>
  );
}
