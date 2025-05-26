"use client";

import { Button } from "@/components/Button";

import { Divider } from "@/components/Divider";

import { RiAddLine, RiDeleteBinLine } from "@remixicon/react";
import { useEffect, useState } from "react";
import { formatInTimeZone } from "date-fns-tz";
import { TicketDrawer } from "@/components/ui/EventsDrawer";
import Cookies from "js-cookie";

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

export default function EventDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  //pagination and limit fetch
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true); // to disable next if no more events

  const fetchEvents = async (pageNum: number) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://mana-event.onrender.com/api/event?page=${pageNum}&limit=12`
      );
      const data = await res.json();

      if (data.events && data.events.length > 0) {
        // Always replace the events array with the current page's results
        setEvents(data.events);
        setHasMore(data.events.length === 12); // If less than 12, no more pages
      } else {
        setEvents([]);
        setHasMore(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setEvents([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  // Fetch events when page changes
  useEffect(() => {
    fetchEvents(page);
  }, [page]);

  const handleDelete = async (eventId: string, onSuccess: () => void) => {
    const token = Cookies.get("token"); // Assuming you're storing token this way
    if (!token) {
      alert("No token found. Please log in.");
      return;
    }

    const confirmed = confirm("Are you sure you want to delete this event?");
    if (!confirmed) return;

    try {
      const res = await fetch(
        `https://mana-event.onrender.com/api/delete-event/${eventId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to delete blog.");
      }

      alert("Blog deleted successfully!");
      onSuccess(); // Refresh blog list
    } catch (error: any) {
      alert("Error: " + error.message);
    }
  };

  return (
    <main>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Event</h1>
          <p className="text-gray-500 sm:text-sm/6">Create and Delete Events</p>
        </div>
        <Button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 text-base sm:text-sm"
        >
          Create Event
          <RiAddLine className="-mr-0.5 size-5 shrink-0" aria-hidden="true" />
        </Button>
        <TicketDrawer open={isOpen} onOpenChange={setIsOpen} />
      </div>
      <Divider />
      {/* events grid */}
      {loading ? (
        <div className="mt-12 text-center text-gray-500">Loading events...</div>
      ) : (
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className="flex flex-col rounded-xl hover:shadow-md hover:shadow-black/15 ring-2 ring-gray-200/80"
            >
              <div className="mt-2 flex flex-col gap-2 p-3">
                <div className="flex justify-between">
                  <div className="w-fit bg-[#edeafb] font-semibold px-3 py-1 rounded-lg text-xs text-[#585163] leading-4 tracking-tighter">
                    {event.event_location}
                  </div>
                  <div
                    className="text-red-500 cursor-pointer"
                    onClick={() =>
                      handleDelete(event.event_id, () => {
                        // optional: filter the blog out of state
                        setEvents((prev) =>
                          prev.filter((b) => b.event_id !== event.event_id)
                        );
                      })
                    }
                  >
                    <RiDeleteBinLine size={20} />
                  </div>
                </div>
                <span className="line-clamp-2 font-semibold text-gray-900">
                  {event.event_name}
                </span>

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
                <span className="text-xs">TechWorld Inc</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="pagination-controls flex items-center justify-center mt-12">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1 || loading}
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1"
        >
          &lt; {/* left chevron */}
        </button>

        <span className="px-6">Page {page}</span>

        <button
          onClick={() => {
            if (hasMore) setPage((p) => p + 1);
          }}
          disabled={!hasMore || loading}
          className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed px-3 py-1"
        >
          &gt; {/* right chevron */}
        </button>
      </div>
    </main>
  );
}
