// app/event/[slug]/page.tsx

import { notFound } from "next/navigation";
import { RiBankLine } from "@remixicon/react";
import { Checkout } from "@/components/ui/checkout";
import Image from "next/image";

const events = [
  {
    title: "AI in financial markets",
    event_date: "Tue, Jun 16 • 7:00PM",
    event_location: "Abuja, Nigeria",
    price: "₦5000",
    slug: "ai-in-financial-markets",
    image: "/gc-registration.png", // valid image
    content: `
      The Nigerian Exchange (NGX) continues to demonstrate strong resilience amid economic headwinds...
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
  },
  {
    title: "Business Analytics for Growth",
    event_date: "Sat, May 13 • 6:00PM",
    event_location: "Kaduna, Nigeria",
    price: "Free",
    slug: "business-analytics-for-growth",
    image: "/Conference-2025.png",
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `,
  },
  {
    title: "Implications for businesses in 2025",
    event_date: "Fri, May 20 • 12:00PM",
    event_location: "Abuja, Nigeria",
    price: "₦12000",
    slug: "implications-for-businesse-in-2025",
    image: "",
    content: `
      With the 2025 fiscal reforms, businesses in Nigeria will face new tax rules...
    `,
  },
  {
    title: "Women in business 2025",
    event_date: "Fri, May 20 • 12:00PM",
    event_location: "Abuja, Nigeria",
    price: "₦12000",
    slug: "implications-for-businesse-in-2025",
    image: "",
    content: `
      With the 2025 fiscal reforms, businesses in Nigeria will face new tax rules...
    `,
  },
];

export default async function EventPage({
  params,
}: {
  params: { slug: string };
}) {
  // ✅ Safely resolve params.slug before use
  const { slug } = await Promise.resolve(params);

  const event = events.find((b) => b.slug === slug);

  if (!event) return notFound();

  const currentUrl = `https://manam.com/blog/${slug}`;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentUrl
    )}&text=${encodeURIComponent(event.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      currentUrl
    )}&title=${encodeURIComponent(event.title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      event.title + " " + currentUrl
    )}`,
  };

  return (
    <div className="max-w-5xl mx-auto py-10 mt-22 flex flex-col overflow-hidden px-3">
      <div className="relative w-full h-96 mt-4">
        <Image
          src={event.image || "/No-Image.png"}
          alt={event.title}
          fill
          className="object-cover w-full h-full"
        />
      </div>
      <div className="grid sm:grid-cols-[2fr_1fr] gap-4">
        <div>
          <h1 className="text-4xl font-bold mt-10 mb-4">{event.title}</h1>
          <div className="flex gap-2 text-sm text-gray-500 items-center">
            <p>{event.event_date}</p> |
            <span className="group relative bg-[#6C859514] text-[#141d22] px-3 py-1 rounded-2xl inline-flex items-center">
              Workshop
              {/* {event.event_location} */}
            </span>
          </div>

          <div className="mt-6 flex flex-col">
            <span className="text-lg font-semibold">Location</span>
            <span className="flex text-gray-500 text-sm">
              {event.event_location}
            </span>
          </div>

          <div className="mt-7 flex gap-2 items-center w-fit py-2 px-1 rounded-xl">
            <div className="flex items-center justify-center h-9 w-9 bg-[#0cabeb] rounded-full">
              <RiBankLine className="text-white h-5" />
            </div>
            <div className="flex flex-col">
              <p className="text-[#07314a] font-bold leading-6 tracking-tighter">
                Dnamaz capital
              </p>
              <p className="text-[#065c86] text-xs">Event organizer</p>
            </div>
          </div>

          <p className="mt-6 text-gray-700 whitespace-pre-line">
            {event.content}
          </p>
        </div>

        {/*paybox*/}

        <Checkout
          price={event.price}
          date={event.event_date}
          image={event.image || "/No-Image.png"}
          title={event.title}
        />
      </div>
      {/* border */}
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

      {/* modal */}
      {/* {showModal && (
        <Modal
          price={event.price}
          date={event.event_date}
          image={event.image}
          title={event.title}
          onClose={() => setShowModal(false)}
        />
      )} */}
    </div>
  );
}
