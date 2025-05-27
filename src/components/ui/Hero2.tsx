"use client";

import { useEffect, useState } from "react";

// Using placeholder images for testing - replace with your actual image paths
const images = ["/1390.jpg", "/4122.jpg", "/tree.jpg"];

export default function Hero2() {
  const [index, setIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Faster for testing - change back to 6000
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (imageIndex: any) => {
    setImageErrors((prev) => ({ ...prev, [imageIndex]: true }));
    console.error(
      `Failed to load image at index ${imageIndex}: ${images[imageIndex]}`
    );
  };

  const handleImageLoad = (imageIndex: any) => {
    console.log(`Successfully loaded image at index ${imageIndex}`);
  };

  return (
    <div className="w-full">
      <div className="bg-white h-[14vh]"></div>
      <section className="relative h-[86vh] w-full overflow-hidden bg-gray-900">
        {/* Background images */}
        {images.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === i ? "opacity-100" : "opacity-0"
            }`}
            style={{ zIndex: index === i ? 1 : 0 }}
          >
            {imageErrors[i] ? (
              <div className="w-full h-full bg-red-900 flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-xl mb-2">❌</div>
                  <div>Image {i + 1} failed to load</div>
                  <div className="text-sm opacity-70 mt-1 break-all px-4">
                    {src}
                  </div>
                </div>
              </div>
            ) : (
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
                onError={() => handleImageError(i)}
                onLoad={() => handleImageLoad(i)}
                loading={i === 0 ? "eager" : "lazy"}
              />
            )}
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Foreground content */}
        <div className="relative z-20 flex items-center h-full px-6 sm:px-38">
          <div className="max-w-4xl text-white">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.4)" }}
            >
              Manam Professional services
            </h1>

            <p className="mt-6 text-lg sm:text-3xl text-gray-200">
              Navigating Business. Delivering Excellence
            </p>

            {/* Navigation dots */}
            <div className="flex space-x-2 mt-8">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === i ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
