import Link from "next/link";
import { siteConfig } from "./siteConfig";
import { Button } from "@/components/Button";

// import { ArrowAnimated } from "@/components/ui/ArrowAnimated";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <p className="mt-6 text-4xl font-semibold text-[#0395da] sm:text-5xl">
        404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-900 ">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Button asChild className="group mt-8" variant="light">
        <Link href={siteConfig.baseLinks.home}>Go to the home page</Link>
      </Button>
    </div>
  );
}
