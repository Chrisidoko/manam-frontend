"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Using placeholder images for testing
const images = ["/1390.jpg", "/advisorycom.jpg", "/tax1-min.jpg"];

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
      <section className="relative w-[96%] mt-[13vh] sm:mt-[14vh] h-[60vh] md:h-[86vh] mx-auto rounded-lg md:rounded-xl overflow-hidden">
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
        <div className="absolute inset-0 bg-black opacity-30 z-10" />

        {/* Foreground content */}
        <div className="relative z-20 flex items-center h-full px-6 sm:px-14">
          <div className="flex flex-col gap-3 md:gap-6 max-w-3xl text-white">
            {/* Navigation dots */}
            <div className="flex space-x-2 mt-8 animate-[slideUpFade_700ms_ease-in-out]">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 md:w-3 h-1 rounded-sm transition-colors ${
                    index === i ? "bg-white" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <h1 className="text-2xl sm:text-5xl font-bold leading-tight animate-[slideUpFade_700ms_ease-in-out]">
              Empowering Your Business to Grow with Confidence
            </h1>

            <p className="text-sm md:text-base text-white animate-[slideUpFade_700ms_ease-in-out]">
              Since inception, we’ve guided businesses through tax complexities,
              growth decisions, and effective team building—delivering practical
              solutions, lasting results.
            </p>

            <div className="flex flex-col md:flex-row md:items-center gap-4 text-sm animate-[slideUpFade_700ms_ease-in-out]">
              <Link href="/services">
                <button className="self-auto bg-[#0395da] border-2 border-[#0395da] cursor-pointer font-bold w-full md:w-fit text-white md:px-5 py-3 transform transition duration-400 hover:-translate-y-1 rounded-lg">
                  What we offer
                </button>
              </Link>

              <Link href="/#contact-form">
                <button className="flex justify-center bg-white border-2 border-white cursor-pointer font-semibold w-full md:w-fit text-[#0395da] md:px-5 py-3 transform transition duration-400 hover:-translate-y-1 rounded-lg">
                  Talk to our expert
                </button>
              </Link>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes slideUpFade {
            from {
              opacity: 0;
              transform: translateY(12px);
            }
            to {
              opacity: 1;
              transform: translateY(0px);
            }
          }
        `}</style>
      </section>
    </div>
  );
}
