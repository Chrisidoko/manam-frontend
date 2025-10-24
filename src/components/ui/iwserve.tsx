// import { Badge } from "../Badge";
"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Badge } from "../Badge";
import Link from "next/link";

import {
  RiBankLine,
  RiGasStationLine,
  RiBuildingLine,
  RiStethoscopeLine,
  RiBuilding3Line,
  RiMoneyDollarBoxLine,
  RiHammerLine,
  RiCellphoneFill,
  RiLightbulbFlashLine,
  RiFlashlightLine,
  RiBook2Line,
  RiHandHeartLine,
  RiStoreLine,
  RiGovernmentLine,
  RiHotelBedLine,
  RiAccountPinCircleLine,
  RiRocket2Line,
  RiArrowRightLine,
  RiToolsFill,
} from "@remixicon/react";

const slides = [
  {
    header: "Business & Finance",
    subText:
      "Strategic solutions for sustainable growth and financial excellence.",
    cta: {
      label: "Read More",
      icon: <RiArrowRightLine />,
      link: "/industries/business-finance",
    },
    industries: [
      { label: "Banking", icon: <RiBankLine /> },
      { label: "Manufacturing", icon: <RiToolsFill /> },
      { label: "Real Estate", icon: <RiBuildingLine /> },
      { label: "Construction", icon: <RiHammerLine /> },
      { label: "Fintech", icon: <RiMoneyDollarBoxLine /> },
    ],
  },

  {
    header: "Entrepreneurs & Innovators",
    subText:
      "From vision to value — enabling businesses to scale with confidence.",
    cta: {
      label: "Read More",
      icon: <RiArrowRightLine />,
      link: "/industries/business-finance",
    },
    industries: [
      { label: "SMEs", icon: <RiAccountPinCircleLine /> },
      { label: "Startups", icon: <RiRocket2Line /> },
      { label: "Creative Industries", icon: <RiLightbulbFlashLine /> },
    ],
  },
  {
    header: "People & Society",
    subText:
      "Strengthening institutions that shape lives and communities. → Learn how we create impact where it matters most.",
    cta: {
      label: "Read More",
      icon: <RiArrowRightLine />,
      link: "/industries/business-finance",
    },
    industries: [
      { label: "Healthcare", icon: <RiStethoscopeLine /> },
      { label: "Education", icon: <RiBook2Line /> },
      { label: "Public Sector", icon: <RiGovernmentLine /> },
      { label: "NGO", icon: <RiHandHeartLine /> },
    ],
  },
  {
    header: "Service & Experience",
    subText:
      "Optimizing services to deliver impact, efficiency, and customer trust. → Explore tailored solutions for your sector.",
    cta: {
      label: "Read More",
      icon: <RiArrowRightLine />,
      link: "/industries/business-finance",
    },
    industries: [
      { label: "Hospitality", icon: <RiHotelBedLine /> },
      { label: "Retail outlets", icon: <RiStoreLine /> },
      { label: "Telecoms", icon: <RiCellphoneFill /> },
    ],
  },
  {
    header: "Energy & Natural Resources Sector",
    subText:
      "Driving progress through reliable expertise in power and resources. → collaborate with us to fuel sustainable growth.",
    cta: {
      label: "Read More",
      icon: <RiArrowRightLine />,
      link: "/industries/business-finance",
    },
    industries: [
      { label: "Oil & Gas", icon: <RiGasStationLine /> },
      { label: "Mining", icon: <RiBuilding3Line /> },
      { label: "Energy", icon: <RiFlashlightLine /> },
    ],
  },
];

const logos = [
  // { src: "/dnamaz.png", alt: "dnamazcapital", className: "w-16" },
  {
    src: "/kano_state(1).png",
    alt: "Kano state govt",
    className: "w-18",
  },

  { src: "/dunesinvest.png", alt: "dunesinvest", className: "w-44" },
  {
    src: "/scc.jpg",
    alt: "scc",
    className: "w-40",
  },
  {
    src: "/bob.png",
    alt: "scc",
    className: "w-18",
  },
  {
    src: "/UBEC.jpg",
    alt: "subeb jigawa",
    className: "w-18",
  },
  {
    src: "/eurofoam.png",
    alt: "eurofoam",
    className: "w-42",
  },

  {
    src: "/fjsc.png",
    alt: "federa judiciary commission service",
    className: "w-44",
  },
  {
    src: "/nigerstate.png",
    alt: "niger state",
    className: "w-34",
  },
  // {
  //   src: "/kadirs.png",
  //   alt: "kaduna state internal revenue services",
  //   className: "w-18",
  // },
  {
    src: "/sahad.png",
    alt: "sahad stores",
    className: "w-40",
  },
  {
    src: "/nile.png",
    alt: "nile university",
    className: "w-40",
  },
  {
    src: "/gilmore.png",
    alt: "gilmore construction",
    className: "w-34",
  },
];

export default function LogoCloud() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality on idustries not client
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 12000); // Change slide every 12 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  return (
    <section
      id="logo cloud"
      aria-label="Company logos"
      className="bg-gradient-to-tl from-[#e1eaf7] to-[#f6f6f7] mx-auto w-full px-10 sm:px-30"
      style={{ animationDuration: "1500ms" }}
    >
      <Badge className="mt-10 md:mt-20"> Industries we serve </Badge>
      {/* Slider Container */}
      <div className="relative mb-26">
        <div className="relative overflow-hidden mx-0 w-full">
          {/* Slides wrapper */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 flex flex-col md:flex-row items-start md:justify-between gap-6 px-2 py-2 md:px-1 md:py-1"
              >
                {/* Left section */}
                <div className="flex flex-col gap-3 md:w-1/2 mt-3 md:mt-6">
                  <h3 className="text-[#07314a] text-left py-2 text-3xl font-bold tracking-tighter sm:text-3xl md:text-5xl">
                    {slide.header}
                  </h3>
                  <p className="max-w-[400px] text-[#0b4c6f]">
                    {slide.subText}
                  </p>
                  <Link
                    href={slide.cta.link}
                    className="mt-[4%] shadow flex gap-2 items-center bg-gradient-to-br from-[#07314a] to-[#0395da] cursor-pointer font-semibold w-fit text-white text-sm sm:text-lg px-4 py-2 md:px-5 md:py-3 rounded-xl"
                  >
                    {slide.cta.label} {slide.cta.icon}
                  </Link>
                </div>

                {/* Right section */}
                <div className="md:w-1/2 mt-2 md:mt-8 flex justify-center md:justify-start items-start">
                  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-2 md:gap-4 place-items-start">
                    {slide.industries.map((industry, i) => (
                      <div
                        key={i}
                        className="bg-white/60 w-26 h-26 md:w-40 md:h-40 flex flex-col justify-center items-center shadow rounded-2xl text-[#0095da] transform transition duration-400 hover:-translate-y-2 hover:shadow-lg"
                      >
                        <div className="text-3xl mb-2">{industry.icon}</div>
                        <p className="text-xs md:text-sm text-center">
                          {industry.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-1 rounded-sm transition-colors ${
              index === currentIndex
                ? "bg-gray-800"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="mt-26 flex flex-col items-center gap-4 md:gap-8 md:flex-row">
        <div className="mr-auto">
          <h1
            id="Partners-title"
            className="max-w-2xl text-left bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2  text-transparent font-bold tracking-tighter text-2xl md:text-3xl"
          >
            Our Clients
          </h1>
          <p className="w-[86%] text-[#0095da] font-bold tracking-tighter text-2xl md:text-3xl">
            We believe in the power of shared success
          </p>
        </div>

        <span className="max-w-2xl ml-auto">
          We support organizations across diverse sectors with tailored
          solutions and services that drive compliance, growth, and impact.
        </span>
      </div>

      <div className="mt-26 mb-26 relative overflow-hidden w-full">
        <div className="flex whitespace-nowrap gap-10 w-max py-4 animate-marquee">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className={`${logo.className} cursor-pointer opacity-90  hover:opacity-100 transition duration-300 inline-block`}
              // className={`${logo.className} cursor-pointer grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300 inline-block`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-inline {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
