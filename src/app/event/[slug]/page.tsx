"use client";

// app/event/[slug]/page.tsx
import { useEffect, useState } from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import { RiBankLine } from "@remixicon/react";
import { Checkout } from "@/components/ui/checkout";
import { formatInTimeZone } from "date-fns-tz";

interface Event {
  _id: string;
  title?: string;
  event_name?: string;
  event_date: string;
  event_location: string;
  price: string;
  slug: string;
  image?: string;
  event_image?: string;
  event_description?: string;
  event_organizer?: string;
}

export default function EventPage() {
  const { slug } = useParams();
  const [event, setEvent] = useState<Event | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch("https://mana-event.onrender.com/api/event", {
          cache: "no-store",
        });

        if (!res.ok) {
          setError(true);
          return;
        }

        const data = await res.json();
        const matched = data.events.find((e: Event) => e.slug === slug);
        if (!matched) {
          setError(true);
          return;
        }

        setEvent(matched);
      } catch (err) {
        console.error(err);
        setError(true);
      }
    };

    if (slug) fetchEvent();
  }, [slug]);

  if (error) return <div>Event not found.</div>;
  if (!event) return <div>Loading</div>;

  const eventData = {
    title: event.title || event.event_name || "Untitled Event",
    event_date: event.event_date || "Date not specified",
    event_location: event.event_location || "Location not specified",
    price: event.price || "0",
    slug: event.slug,
    image: event.image || event.event_image || "/No-Image.png",
    event_description: event.event_description || "No description available",
    organizer: event.event_organizer || "Event Organizer",
  };

  const currentUrl = `https://manam.com/event/${eventData.slug}`;
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(eventData.title)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(currentUrl)}&title=${encodeURIComponent(eventData.title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(eventData.title + " " + currentUrl)}`,
  };

  return (
    <div className="max-w-5xl mx-auto py-10 mt-22 flex flex-col overflow-hidden px-3">
      <div className="relative w-full h-96 mt-4">
        <Image
          src={eventData.image}
          alt={eventData.title}
          fill
          className="object-cover w-full h-full"
        />
      </div>

      <div className="grid sm:grid-cols-[2fr_1fr] gap-4">
        <div>
          <h1 className="text-4xl font-bold mt-10 mb-4">{eventData.title}</h1>
          <div className="flex gap-2 text-sm text-gray-500 items-center">
            <p>
              {formatInTimeZone(
                event.event_date,
                "Africa/Lagos",
                "EEE, MMM d • h:mmaaa"
              )}
            </p>
            |
            <span className="group relative bg-[#6C859514] text-[#141d22] px-3 py-1 rounded-2xl inline-flex items-center">
              Workshop
            </span>
          </div>

          <div className="mt-6 flex flex-col">
            <span className="text-lg font-semibold">Location</span>
            <span className="flex text-gray-500 text-sm">
              {eventData.event_location}
            </span>
          </div>

          <div className="mt-7 flex gap-2 items-center w-fit py-2 px-1 rounded-xl">
            <div className="flex items-center justify-center h-9 w-9 bg-[#0cabeb] rounded-full">
              <RiBankLine className="text-white h-5" />
            </div>
            <div className="flex flex-col">
              <p className="text-[#07314a] font-bold leading-6 tracking-tighter">
                {eventData.organizer}
              </p>
              <p className="text-[#065c86] text-xs">Event organizer</p>
            </div>
          </div>

          <p className="mt-6 text-gray-700 whitespace-pre-line">
            {eventData.event_description}
          </p>
        </div>

        {/* Payment box */}
        <Checkout
          price={eventData.price}
          date={eventData.event_date}
          image={eventData.image}
          title={eventData.title}
        />
      </div>

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
}
