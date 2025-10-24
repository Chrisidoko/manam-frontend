import React from "react";

import { RiArrowRightLine } from "@remixicon/react";
import { Badge } from "../Badge";

import { InstaxImage } from "./InstaxImage";
import Corevalues from "@/components/ui/corevalues";
import Link from "next/link";

export default function AboutUS() {
  return (
    <section
      aria-labelledby="Idustries-title"
      className="mx-auto mt-24 pb-30 w-full px-10 sm:px-30"
    >
      <Badge className="mx-auto"> Who We Are </Badge>
      <div className="w-full ">
        <h3 className="mt-2 text-center bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter sm:text-3xl md:text-7xl">
          About Us
        </h3>
        <div className="flex items-start justify-between">
          <p className="mt-4 mx-auto text-center text-sm sm:text-base max-w-4xl text-gray-600">
            With our offices in Kano, Kaduna, and Abuja, Manam delivers
            professional, cost-effective consultancy services in Tax, Advisory,
            and Human Capital development across Africa.
          </p>
        </div>
      </div>

      <div className="mt-6 md:mt-10 flex flex-col gap-6 md:flex-row md:items-center">
        <div className="w-full grid grid-cols-1 gap-6 text-gray-600  md:w-1/2 order-2 md:order-none">
          <div className="space-y-3">
            <h4 className="font-bold text-lg text-[#0395da] ">Our Mission</h4>
            <p className="text-base">
              To provide value-driven professional consultancy and advisory
              services, empowering clients through strategic insights, technical
              excellence, and commitment to integrity.{" "}
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-bold text-lg text-[#0395da]">Our Vision</h4>
            <p className="text-base">
              To be a trusted leader in delivering innovative and impactful
              management, advisory, Taxation and Human Capital solutions that
              drive sustainable growth for businesses across Nigeria and beyond.
            </p>
          </div>
        </div>

        <div className="md:w-1/2 order-1 md:order-none">
          {" "}
          {/* 1. Make this the positioning context */}
          <div className="w-83 sm:w-120 sm:ml-auto relative">
            <InstaxImage
              src="/Aboutus-min.jpg"
              alt="about us"
              width={500}
              height={700}
              caption="Tax Advocacy"
              // 2. Remove 'relative' and 'ml-auto' from the Image. Use 'w-full' for fluid width.
              className="rounded-2xl h-66 sm:h-100 object-cover -rotate-6"
            />
            {/* 3. The Overlay (Must be a sibling of the Image) */}
            {/* <div className="absolute inset-0 bg-black opacity-30 rounded-2xl -rotate-6"></div> */}
          </div>
        </div>
      </div>
      <div>
        <Corevalues />
      </div>
    </section>
  );
}
