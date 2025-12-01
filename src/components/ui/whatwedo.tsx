import { RiArrowRightLine } from "@remixicon/react";

import Link from "next/link";

const features = [
  {
    id: 1,
    description: "Expert guidance to scale your business.",
    src: "/advisory-min.jpg",
    alt: "Advisory Services",

    cta: {
      label: "Advisory",
      link: "/services/advisory",
    },
  },
  {
    id: 2,
    description: "Simplifying tax complexity, ensuring regulatory compliance.",
    src: "/tax3-min.jpg",
    alt: "Taxation",

    cta: {
      label: "Taxation",
      link: "/services/taxation",
    },
  },
  {
    id: 3,
    name: "Human Capital Development",
    description: "Building human capital for lasting work place impact.",

    src: "/4122-min.jpg",
    alt: "Training Services",

    cta: {
      label: "Human Capital Development",
      link: "/services/human-capital-development",
    },
  },
];

export default function Products() {
  return (
    <section
      id="products"
      aria-label="Company logos"
      className="w-full flex animate-slide-up-fade flex-col items-start justify-center gap-y-3 text-center sm:mt-1 px-3 sm:px-10"
      style={{ animationDuration: "1500ms" }}
    >
      <div className="flex flex-col items-start mt-10 sm:flex-row sm:justify-between  w-full">
        <h2 className="bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl text-left font-bold tracking-tighter text-transparent sm:text-3xl md:text-4xl">
          From strategy to solutions <br /> Every step, by your side.
        </h2>

        <p className="mt-2 text-sm sm:text-base text-gray-600 text-left sm:text-right max-w-3xl">
          We ensure financial integrity, regulatory compliance, and business
          growth while empowering organizations through strategic training and
          professional guidance.
        </p>
      </div>

      <div className="flex flex-col gap-7 sm:gap-0 md:flex-row items-start justify-between mt-10 w-full">
        {/* <Badge> What we do </Badge> */}
        <div className="shadow flex gap-2 items-center bg-gradient-to-br from-[#07314a] to-[#0395da] font-semibold w-fit text-white text-sm sm:text-lg px-4 py-2 md:px-5 md:py-3 rounded-xl">
          What we do <RiArrowRightLine />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-10 ">
          {features.map((item) => (
            <Link
              key={item.id}
              href={item.cta.link}
              className="flex flex-col p-3 items-center w-[94vw] h-[36vw] sm:w-[20vw] sm:h-[22vw] gap-2 rounded-xl ring-2 ring-gray-200/80 bg-cover bg-center text-white cursor-pointer relative transform transition duration-400 hover:-translate-y-2 shadow-lg"
              style={{ backgroundImage: `url(${item.src})` }}
            >
              {/* an overlay div to ensure text is readable */}
              <div className="absolute inset-0 bg-black opacity-40 rounded-xl"></div>

              <div className="relative z-10 flex flex-col h-full ">
                <div className="font-semibold text-white mt-auto sm:mt-0.5 text-xl text-right sm:text-2xl leading-6">
                  {item.cta.label}
                </div>
                <p className="hidden sm:block mt-auto text-left text-base w-[96%]">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
