import { Badge } from "@/components/Badge";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

const events = [
  {
    title: "AI in financial markets",
    event_date: "Tue, Jun 16 • 7:00PM",
    event_location: "Abuja, Nigeria",
    price: "₦5000",
    image: "/gc-registration.png", // valid image
    href: "/event/ai-in-financial-markets",
    slug: "ai-in-financial-markets",
  },
  {
    title: "Business Analytics for Growth",
    event_date: "Sat, May 13 • 6:00PM",
    event_location: "Kaduna, Nigeria",
    price: "Free",
    image: "/Conference-2025.png", // valid image
    href: "/event/business-analytics-for-growth",
    slug: "business-analytics-for-growth",
  },
  {
    title: "Implications for businesses in 2025",
    event_date: "Fri, May 20 • 12:00PM",
    event_location: "Online",
    price: "₦12000",
    image: "", // no image
    href: "/event/implications-for-businesse-in-2025",
    slug: "implications-for-businesse-in-2025",
  },
  {
    title: "Women in business 2025",
    event_date: "Fri, May 20 • 12:00PM",
    event_location: "Abuja, Nigeria",
    price: "₦12000",
    image: "/3rd-conference.png", // valid image
    href: "/event/women-in-business-2025",
    slug: "women-in-business-2025",
  },
];

export default function Events() {
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
        {/* blogs grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl hover:shadow-md hover:shadow-black/15 ring-2 ring-gray-200/80"
            >
              <div className="relative w-full h-34">
                <Image
                  src={event.image ? event.image : "/No-Image.png"}
                  alt="image"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="mt-2 flex flex-col gap-2 p-3">
                <div className="w-fit bg-[#edeafb] font-semibold px-3 py-1 rounded-lg text-xs text-[#585163] leading-4 tracking-tighter">
                  {event.event_location}
                </div>
                <Link
                  className="line-clamp-2 font-semibold text-gray-900"
                  href={`/event/${event.slug}`}
                >
                  {event.title}
                </Link>

                <span className="text-xs text-[#4b5563]">
                  {event.event_date}
                </span>
                <div className="group relative text-[#141d22] text-sm font-semibold px-1 py-1 rounded-2xl inline-flex items-center">
                  {event.price}
                </div>
                <span className="text-xs">TechWorld Inc</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
