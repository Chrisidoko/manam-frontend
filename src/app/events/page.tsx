// import { siteConfig } from "@/app/siteConfig";
import { Badge } from "@/components/Badge";
import Image from "next/image";
import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { formatInTimeZone } from "date-fns-tz";

export interface EventCreator {
  _id: string;
  username: string;
  email: string;
}

export interface Event {
  _id: string;
  event_creator: EventCreator;
  event_name: string;
  event_date: string; // ISO string
  event_location: string;
  event_description: string;
  event_organizer: string;
  price: number;
  event_image: string;
  event_type: string;
  space_available: number;
  event_status: string;
  slug: string;
  event_id: string;
  date_created: string; // ISO string
}

export default async function Events() {
  //only for image the link below
  const api_url = "https://mana-event.onrender.com";

  // const res = await fetch("https://mana-event.onrender.com/api/event", {
  //   next: { revalidate: 0 }, // disable caching
  // });

  // const data = await res.json();

  // if (!data?.events) {
  //   return (
  //     <div className="w-full mt-[40%] flex justify-center">
  //       Error loading events.
  //     </div>
  //   );
  // }

  // const events = data.events;

  let events: Event[] = [];
  let errorMessage: string | null = null;

  try {
    const res = await fetch("https://mana-event.onrender.com/api/event", {
      next: { revalidate: 0 }, // disable caching
    });

    // Check if the HTTP status code indicates success (200-299)
    if (!res.ok) {
      // Handles 404, 500, 502 (Bad Gateway), etc.
      console.error(
        `Event fetch failed with status: ${res.status} (${res.statusText})`
      );
      errorMessage = `Failed to load events (Server Status: ${res.status}).`;
    } else {
      // Only attempt to parse the response if the status is OK.
      // Use try/catch to handle non-JSON content (like HTML error pages).
      try {
        const data = await res.json();

        // Check for the expected data structure within the parsed JSON
        if (!data?.events) {
          errorMessage =
            "Server returned successful status but missing 'events' data.";
        } else {
          events = data.events;
        }
      } catch (jsonError) {
        console.error("Error parsing JSON response for events:", jsonError);
        errorMessage =
          "Server returned valid status but invalid data format (JSON syntax error).";
      }
    }
  } catch (networkError) {
    // Catch network issues (server completely unreachable, DNS errors, etc.)
    console.error("Network or connection error:", networkError);
    errorMessage =
      "Cannot connect to the event server. Please check your network connection or the service status.";
  }

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

      <section className="mt-10">
        {errorMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Error: </strong>
            <span className="block sm:inline">{errorMessage}</span>
            <p className="text-sm mt-2">
              The external API service may be experiencing downtime. We
              apologize for the inconvenience.
            </p>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
          {events.map((event: Event) => (
            <div
              key={event._id}
              className="flex flex-col rounded-xl hover:shadow-md hover:shadow-black/15 ring-2 ring-gray-200/80"
            >
              <div className="relative w-full h-34">
                <Image
                  src={
                    event.event_image
                      ? `${api_url}/${event.event_image.replace(/^\/+/, "")}`
                      : "/No-Image.png"
                  }
                  alt={event.event_name}
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
                  {event.event_name}
                </Link>

                <span className="text-xs text-[#4b5563]">
                  {formatInTimeZone(
                    event.event_date,
                    "Africa/Lagos",
                    "EEE, MMM d • h:mmaaa"
                  )}
                </span>

                <div className="group relative text-[#141d22] text-sm font-semibold px-1 py-1 rounded-2xl inline-flex items-center">
                  ₦{event.price}
                </div>

                <span className="text-xs">{event.event_organizer}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
