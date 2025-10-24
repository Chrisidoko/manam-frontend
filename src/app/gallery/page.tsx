"use client";

import React, { useState } from "react";

// import { cx } from "@/lib/utils";
import Balancer from "react-wrap-balancer";

// interface for a single gallery item
interface GalleryItem {
  id: number;
  title: string;
  description: string;
}

// Mock data for the gallery items
const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Investment Summit 2024",
    description: "Our annual meeting of partners and clients.",
  },
  {
    id: 2,
    title: "Client Success Story",
    description: "Our annual meeting of partners and clients.",
  },
  {
    id: 3,
    title: "Team Retreat 2023",
    description: "Our annual meeting of partners and clients.",
  },
  {
    id: 4,
    title: "Q3 Market Analysis Session",
    description: "Our annual meeting of partners and clients.",
  },
  {
    id: 5,
    title: "Office Launch Party",
    description: "Our annual meeting of partners and clients.",
  },
  {
    id: 6,
    title: "Financial Literacy Webinar",
    description: "Our annual meeting of partners and clients.",
  },
];

// GALLERY MODAL COMPONENT (Expanded View)
interface GalleryModalProps {
  item: GalleryItem;
  onClose: () => void;
}

// NOTE: This assumes the 'animate-zoomIn' keyframe is globally available.
// CSS for zoomIn: @keyframes zoomIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
const GalleryModal: React.FC<GalleryModalProps> = ({ item, onClose }) => {
  // Prevent scrolling when the modal is open (basic browser compatibility)
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4 transition-opacity duration-300"
      onClick={onClose} // Close when clicking the overlay
    >
      {/* Modal Content Container */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden transform animate-[zoomIn_300ms_ease-out_forwards]"
        onClick={(e) => e.stopPropagation()} // Stop propagation from closing when clicking inside
      >
        {/* Placeholder Area (Expanded Image) */}
        <div className="relative h-96 w-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-lg font-medium">
            Expanded Placeholder for: {item.title}
          </span>
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
        <div className="p-6 overflow-y-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {item.title}
          </h3>
        </div>
      </div>
    </div>
  );
};

interface GalleryCardProps {
  item: GalleryItem;
  openModal: (item: GalleryItem) => void;
}

// Component for a single gallery card
const GalleryCard: React.FC<GalleryCardProps> = ({ item, openModal }) => {
  return (
    <div
      className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
      onClick={() => openModal(item)} // ADDED onClick HANDLER
    >
      {/* Image Placeholder */}
      <div className="relative h-64 w-full bg-gray-200 overflow-hidden">
        {/* Replace with your actual <img> tag later */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm font-medium">
          Placeholder {item.id} (640x480)
        </div>
      </div>

      {/* Title and Description */}
      <div className="p-4 sm:p-6 flex flex-col gap-1">
        <h3 className="text-base md:text-xl font-semibold text-gray-800 group-hover:text-[#0095da] transition-colors duration-200">
          {item.title}
        </h3>
      </div>
    </div>
  );
};

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

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
              alt="gallert"
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

          <div className="my-[5vw] grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-8">
            {galleryData.map((item) => (
              <GalleryCard key={item.id} item={item} openModal={openModal} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              className="rounded-full bg-[#0095da] px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-[#007acc] transition-colors"
            >
              Load More
            </button>
          </div>
        </div>
        {/* 3. MODAL RENDER */}
        {isModalOpen && selectedItem && (
          <GalleryModal item={selectedItem} onClose={closeModal} />
        )}
      </section>
    </div>
  );
}
