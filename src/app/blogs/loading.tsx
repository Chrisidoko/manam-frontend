import { Badge } from "@/components/Badge";
import Balancer from "react-wrap-balancer";

export default function Loading() {
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

      <section className="mb-10">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="flex flex-col ">
              <div className="relative w-full bg-gray-200 h-64"></div>
              <div className="mt-2 flex items-center justify-between">
                <div className="w-1/4 h-4 bg-gray-200 rounded-2xl"></div>
                <div className="w-1/4 h-4 bg-gray-200 rounded-2xl "></div>
              </div>

              <div className="w-full mt-3 h-4 bg-gray-200 rounded-xl "></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
