"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

// Updated interface to match API response
interface GalleryItem {
  _id: string;
  image_id: string;
  image_url: string;
  image_description: string;
  date_uploaded: string;
  social_link: string;
}

// API Response interface
interface GalleryResponse {
  message: string;
  count: number;
  data: GalleryItem[];
}

// GALLERY MODAL COMPONENT (Expanded View)
interface GalleryModalProps {
  item: GalleryItem;
  onClose: () => void;
}

const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden transform animate-[zoomIn_300ms_ease-out_forwards]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actual Image */}
        <div className="relative h-96 w-full bg-gray-300 flex items-center justify-center overflow-hidden">
          <img
            src={`https://mana-event.onrender.com${item.image_url}`}
            alt={item.image_description || "Gallery image"}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors z-10"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Details */}
        <div className="flex items-center justify-between p-6 overflow-y-auto">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {item.image_description || "Gallery Image"}
            </h3>
            <p className="text-sm text-gray-500">
              {new Date(item.date_uploaded).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
          <Link href={item?.social_link}>
            <span className="text-blue-600 underline">Link</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

interface GalleryCardProps {
  item: GalleryItem;
  openModal: (item: GalleryItem) => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ item, openModal }) => {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={() => openModal(item)}
    >
      {/* Actual Image */}
      <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
        <img
          src={`https://mana-event.onrender.com${item.image_url}`}
          alt={item.image_description || "Gallery image"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Title and Description */}
      <div className="p-4 sm:p-6 flex flex-col gap-1">
        <h3 className="text-base md:text-xl font-semibold text-gray-800 group-hover:text-[#0095da] transition-colors duration-200">
          {item.image_description || "Gallery Image"}
        </h3>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [galleryData, setGalleryData] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch gallery data from API
  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://mana-event.onrender.com/api/gallery",
          {
            method: "GET",
            headers: {
              accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch gallery images");
        }

        const result: GalleryResponse = await response.json();
        setGalleryData(result.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching gallery:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryData();
  }, []);

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="mt-6 flex flex-col overflow-hidden px-0">
      <section
        aria-labelledby="gallery-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <section className="relative w-full mt-[8vh] sm:mt-[10vh] h-[20vh] md:h-[30vh] mx-auto overflow-hidden">
          {/* Background images */}
          <div className="absolute inset-0 w-full h-full transition-opacity duration-1000">
            <img
              src="/1390.jpg"
              alt="gallery"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 z-10" />

          {/* Foreground content */}
          <div className="relative z-20 flex items-center h-full px-6 sm:px-14">
            <div className="w-full flex flex-col items-center justify-center gap-3 md:gap-6 text-white">
              <h1 className="mx-auto text-2xl text-center sm:text-5xl font-bold leading-tight animate-[slideUpFade_700ms_ease-in-out]">
                Gallery
              </h1>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-8 sm:mt-22 max-w-6xl px-6">
          <h1
            id="about-overview"
            className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-2xl font-bold tracking-tighter text-transparent md:text-4xl"
          >
            <Balancer>Our Moments & Milestones</Balancer>
          </h1>

          {/* Loading State */}
          {loading && (
            <div className="my-[5vw] flex justify-center items-center min-h-[400px]">
              <div className="text-gray-600 text-lg">Loading gallery...</div>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="my-[5vw] flex justify-center items-center min-h-[400px]">
              <div className="text-red-600 text-lg">
                Error loading gallery: {error}
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          {!loading && !error && galleryData.length > 0 && (
            <div className="my-[5vw] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
              {galleryData.map((item) => (
                <GalleryCard key={item._id} item={item} openModal={openModal} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && galleryData.length === 0 && (
            <div className="my-[5vw] flex justify-center items-center min-h-[400px]">
              <div className="text-gray-600 text-lg">
                No images available yet.
              </div>
            </div>
          )}

          {/* Load More Button - Only show if there are items */}
          {!loading && !error && galleryData.length > 0 && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                className="rounded-full bg-[#0095da] px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-[#007acc] transition-colors"
              >
                Load More
              </button>
            </div>
          )}
        </div>

        {/* Modal Render */}
        {isModalOpen && selectedItem && (
          <GalleryModal item={selectedItem} onClose={closeModal} />
        )}
      </section>
    </div>
  );
}
