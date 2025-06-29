"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RiArrowRightUpLine } from "@remixicon/react";

import { Badge } from "../Badge";

export default function Services2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      id: 1,
      title: "Human Capital Development",
      slug: "human-capital-development",
      description:
        " We believe that people are the core of every successful organization.",
      image: "/hands.png",
      bgColor: "bg-white",
      textColor: "text-gray-900",
      descColor: "text-[#667085]",
      imageClasses:
        "absolute bottom-0 right-5 w-32 sm:w-40 sm:h-36 md:w-[210px] md:h-[190px]",
    },
    {
      id: 2,
      title: "Management Consultancy",
      slug: "management-consultancy",
      description:
        "We work closely with our clients to understand their organizational  structure, market positioning, and internal capabilities",
      image: "/knight.png",
      bgColor: "bg-gradient-to-br from-[#b9e8fe] to-[#7cd6fd]",
      textColor: "text-gray-900",
      descColor: "text-gray-800",
      imageClasses:
        "absolute bottom-16 sm:bottom-6 right-0 w-38 sm:w-46 md:bottom-12 md:w-[180px]",
    },
    {
      id: 3,
      title: "Assurance Services",
      slug: "assurance-services",
      description:
        "Our Assurance Services provide clients with confidence in the accuracy and integrity of their financial information.",
      image: "/shield.png",
      bgColor: "bg-[#065c86]",
      textColor: "text-white",
      descColor: "text-[#e0f3fe]",
      imageClasses:
        "absolute top-33 right-4 xl:top-9 xl:right-16 w-28 sm:w-30 sm:h-40",
    },
    {
      id: 4,
      title: "Taxation",
      slug: "taxation",
      description:
        "We offer comprehensive tax advisory and due diligence services that help businesses navigate the complexities of local tax laws",
      image: "/stack.png",
      bgColor: "bg-[#E6EEF3]",
      textColor: "text-[#07314a]",
      descColor: "text-[#065c86]",
      imageClasses:
        "absolute bottom-20 right-1 w-36 xl:bottom-14 xl:right-20 sm:w-50 sm:h-54",
    },
    {
      id: 5,
      title: "Corporate Recovery and Insolvency",
      slug: "corporate-recovery-and-insolvency",
      description:
        " We support stakeholders through debt resolution, turnaround  strategies, liquidation processes, and creditor negotiations.",
      image: "/arrow.png",
      bgColor: "bg-[#0e172a]",
      textColor: "text-white",
      descColor: "text-[#98a2b2]",
      imageClasses:
        "absolute bottom-2 right-0 rotate-[-24deg] xl:right-6 w-38 sm:w-50 sm:h-46",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 12000); // Change slide every 12 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, services.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Stop auto-play when user manually navigates
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  // const goToPrevious = () => {
  //   setCurrentIndex(
  //     (prevIndex) => (prevIndex - 1 + services.length) % services.length
  //   );
  //   setIsAutoPlaying(false);
  //   setTimeout(() => setIsAutoPlaying(true), 10000);
  // };

  // const goToNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  //   setIsAutoPlaying(false);
  //   setTimeout(() => setIsAutoPlaying(true), 10000);
  // };

  return (
    <section
      aria-labelledby="services-slider-title"
      className="mx-auto mt-24 w-full max-w-6xl px-3"
    >
      <Badge>Services</Badge>

      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl"
      >
        Bring your organization <br /> to a higher level with us
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-justify text-gray-600">
        Empowering your organization&apos;s growth with tailored services that
        ensures your goal becomes a reality
      </p>

      {/* Slider Container */}
      <div className="mt-12 relative">
        {/* Navigation Arrows */}
        {/* <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          aria-label="Previous service"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button> */}
        {/* 
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
          aria-label="Next service"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button> */}

        {/* Slider Viewport */}
        <div className="overflow-hidden mx-2">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service) => (
              <div
                key={service.id}
                className={`flex-shrink-0 w-full ${service.bgColor} h-[24rem] sm:h-[20rem] px-6 py-7 sm:px-8 sm:py-9 rounded-xl lg:rounded-3xl cursor-pointer overflow-hidden relative`}
              >
                <h3
                  className={`text-xl sm:text-3xl font-bold ${service.textColor}`}
                >
                  {service.title}
                </h3>
                <p
                  className={`w-[76%] text-md sm:text-2xl ${service.descColor} leading-relaxed`}
                >
                  <br />
                  {service.description}
                </p>

                <p>
                  {" "}
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-8 flex items-center gap-1 text-[#0095DA] font-semibold"
                  >
                    View More <RiArrowRightUpLine size={20} />
                  </Link>
                </p>

                <img
                  src={service.image}
                  alt={service.title}
                  className={service.imageClasses}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-gray-800"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        {/* <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
          <div
            className="bg-gray-800 h-1 rounded-full transition-all duration-500"
            style={{
              width: `${((currentIndex + 1) / services.length) * 100}%`,
            }}
          />
        </div> */}

        {/* Service Counter */}
        <div className="text-center mt-4 text-sm text-gray-600">
          {currentIndex + 1} of {services.length}
        </div>
      </div>
    </section>
  );
}
