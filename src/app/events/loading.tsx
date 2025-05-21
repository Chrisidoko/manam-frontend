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
        <Badge>Events</Badge>
        <h1
          id="blogs-page"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-5xl"
        >
          <Balancer>Seminars & Workshops</Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Explore our training events, your opportunity to connect and learn
        </p>
      </section>

      <section className="mb-10">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl hover:shadow-md hover:shadow-black/15 ring-2 ring-gray-200/80 animate-pulse"
            >
              <div className="relative w-full h-36 bg-gray-200 rounded-md" />
              <div className="mt-2 flex flex-col gap-2 p-3">
                <div className="w-2/4 bg-gray-200 h-3 rounded-lg" />
                <div className="w-full bg-gray-200 h-4 rounded-lg" />
                <div className="w-1/3 bg-gray-200 h-2 rounded-lg" />
                <div className="mt-1 w-16 bg-gray-200 h-3 rounded-lg" />
                <div className="mt-2 w-8 bg-gray-200 h-3 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
