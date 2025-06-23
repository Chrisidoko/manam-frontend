import React from "react";

import {
  RiBankLine,
  RiGasStationLine,
  RiBuildingLine,
  RiRocketLine,
  RiStethoscopeLine,
  RiGovernmentLine,
  RiHospitalLine,
  RiBookLine,
  RiBuilding4Line,
  RiMic2Line,
} from "@remixicon/react";

const industries = [
  { label: "Banking & Financial Services", icon: <RiBankLine /> },
  { label: "Oil & Gas", icon: <RiGasStationLine /> },
  { label: "Manufacturing", icon: <RiBuildingLine /> },
  { label: "SMEs & Startups", icon: <RiRocketLine /> },
  { label: "Healthcare", icon: <RiStethoscopeLine /> },
  { label: "Hospitality", icon: <RiHospitalLine /> },
  { label: "Education", icon: <RiBookLine /> },
  { label: "Real Estate", icon: <RiBuilding4Line /> },
  { label: "Public Sector & Government Agencies", icon: <RiGovernmentLine /> },
  { label: "Lifestyle & Creative Industries", icon: <RiMic2Line /> },
];

export default function Industries() {
  return (
    <section
      aria-labelledby="Idustries-title"
      className="bg-[#e0f3fe] mx-auto mt-24 w-full px-10 sm:px-40"
    >
      <div className="mt-30 mb-30 flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col gap-2 md:w-2/3">
          <h3 className="max-w-2xl text-left mt-2 inline-block text-[#07314a] py-2 text-3xl font-bold tracking-tighter sm:text-2xl md:text-3xl">
            Industries We Serve
          </h3>
          <p className="max-w-3xl text-justify text-[#0b4c6f]">
            We understand that each industry operates within a unique regulatory
            and operational landscape. Our team brings deep expertise and
            tailored solutions to help organizations across sectors stay
            compliant, improve performance, and build capacity through
            professional training and advisory services.
          </p>
          <div className="py-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className="bg-white py-3 px-3 shadow rounded-xl text-[#0095da] text-2xl transform transition duration-400 hover:-translate-y-2 hover:shadow-lg">
                  {industry.icon}
                </div>
                <p className="text-sm text-center text-[#0b4c6f]">
                  {industry.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/3 flex justify-center md:justify-end">
          <img src="/africa(9).svg" alt="africa" className="w-60" />
        </div>
      </div>
    </section>
  );
}
