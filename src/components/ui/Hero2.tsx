"use client";

// import HeroImage from "./HeroImage"

import { useEffect, useState } from "react";
import Image from "next/image";

const features = [
  {
    name: "Advisory",
    description:
      "Strategic management consulting to drive growth, optimize operations, and expand global reach.",
  },
  {
    name: "Tax & Assurance",
    description:
      "Providing trusted tax advisory and assurance services to ensure compliance, transparency, and financial integrity",
  },
  {
    name: "Training",
    description:
      "Empowering our clients with up-to-date financial knowledge and skills for improved decision-making and performance.",
  },
];

export default function Hero2() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, 10000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      aria-labelledby="hero-title"
      className="mt-32 flex flex-col  sm:mt-40"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center gap-4">
        {/* Left Sliding Text Section */}
        <div className="overflow-hidden mt-10 ml-2 sm:ml-26 w-full sm:w-[50%] h-70 relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {features.map((feature, i) => (
              <div key={i} className="w-full min-w-full px-4 sm:px-10">
                <h1 className="py-2 bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text text-transparent text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  {feature.name}
                </h1>
                <p className="mt-6 max-w-lg text-xl text-gray-700 z-50">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: stacked/overlapping images */}
        <div className="hidden sm:block w-full lg:w-1/2 flex justify-center relative">
          {/* Top image */}
          <div className="w-70 h-70 mr-68 rounded-xl overflow-hidden shadow-lg z-20 relative">
            <Image
              src="/image1.jpg"
              alt="Image 1"
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom image – offset */}
          <div className="w-70 h-70 mr-6 rounded-xl overflow-hidden shadow-lg absolute top-20 right-20 z-70">
            <Image
              src="/tree(1).jpg"
              alt="Image 2"
              fill
              className="object-cover"
            />
          </div>

          {/* badge */}
          <div className="absolute top-2 right-60 bg-gray-800 text-white tracking-tight font-semibold px-4 py-2 rounded-sm text-sm z-30">
            100+ <br />
            Happy Clients
          </div>
        </div>
      </div>

      <div className="z-20 h-[16rem] sm:h-[26rem] w-full overflow-hidden -mt-18 sm:-mt-38">
        <div className="absolute bottom-0 h-3/5 w-full bg-gradient-to-b from-transparent via-[#e0f3fe] to-[#0095da] z-10" />
      </div>
    </section>
  );
}
