import { Badge } from "../Badge";
import Image from "next/image";
import { RiArrowRightUpLine } from "@remixicon/react";

export default function Services() {
  return (
    <section
      aria-labelledby="code-example-title"
      className="mx-auto mt-24 w-full max-w-6xl px-3"
    >
      <Badge>Services</Badge>

      <h2
        id="code-example-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-5xl"
      >
        Bring your organization <br /> to life with us
      </h2>
      <p className="mt-6 max-w-2xl text-lg text-gray-600">
        Empowering your organization&apos;s growth with tailored services that
        ensures your ambitions becomes a reality.
      </p>
      <div className="mt-12 w-full h-full grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-7">
        {/* Human Capital Development */}
        <div className="bg-white col-span-3 px-6 py-7 rounded-2xl lg:rounded-3xl cursor-pointer overflow-hidden relative">
          <h2 className="text-3xl font-bold">Human Capital Development</h2>
          <p className="mt-2 w-[70%] text-sm text-[#667085]">
            {" "}
            We believe that people are the core of every successful
            organization.{" "}
          </p>
          <p className="mt-4 flex items-center gap-1 text-[#0095DA] font-semibold">
            View More <RiArrowRightUpLine size={20} />
          </p>
          <Image
            src="/hands.png"
            width={210}
            height={180}
            alt="Human Capital Development Services"
            className="absolute bottom-0 right-5 w-32 sm:w-40 md:w-[210px]"
          />
        </div>
        {/* Management Consultancy */}
        <div className="relative w-full bg-gradient-to-br from-[#b9e8fe] to-[#7cd6fd] col-span-2 p-6 lg:p-8 rounded-2xl lg:rounded-3xl cursor-pointer">
          <h2 className="mt-6 text-3xl font-bold">Management Consultancy </h2>
          <p className="mt-2 w-[70%] text-sm">
            {" "}
            We work closely with our clients to understand their organizational
            structure, market positioning, and internal capabilities{" "}
          </p>
          <p className="mt-4 flex items-center gap-1 text-[#0095DA] font-semibold">
            View More <RiArrowRightUpLine size={20} />
          </p>
          <Image
            src="/knight.png"
            width={160}
            height={60}
            alt="Management Consultancy "
            className="absolute bottom-9 sm:bottom-6 right-1 w-34 sm:w-40 md:bottom-12 md:w-[160px]"
          />
        </div>
      </div>

      <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-7">
        <div className="relative bg-[#065c86] col-span-2 p-6 lg:p-8 rounded-2xl lg:rounded-3xl cursor-pointer">
          <h2 className="mt-2 text-3xl text-white font-bold">
            Assurance Services
          </h2>
          <p className="mt-2 w-[64%] sm:w-[70%] text-sm text-[#e0f3fe]">
            {" "}
            Our Assurance Services provide clients with confidence in the
            accuracy and integrity of their financial information.{" "}
          </p>
          <p className="mt-4 flex items-center gap-1 text-[#0095DA] font-semibold">
            View More <RiArrowRightUpLine size={20} />
          </p>
          <Image
            src="/shield.png"
            width={120}
            height={60}
            alt="Assurance Services"
            className="absolute top-18 right-4 2xl:top-3 2xl:right-4 w-22 sm:w-30 sm:h-40"
          />
        </div>
        <div className="relative bg-[#E6EEF3] col-span-2 p-6 lg:p-8 rounded-2xl lg:rounded-3xl cursor-pointer">
          <h2 className="mt-2 text-3xl text-[#07314a] font-bold">
            Taxation/Due Diligence
          </h2>
          <p className="mt-2 w-[60%] text-sm text-[#065c86]">
            {" "}
            We offer comprehensive tax advisory and due diligence services that
            help businesses navigate the complexities of local tax laws{" "}
          </p>
          <p className="mt-4 flex items-center gap-1 text-[#0095DA] font-semibold">
            View More <RiArrowRightUpLine size={20} />
          </p>
          <Image
            src="/stack.png"
            width={160}
            height={60}
            alt="Taxation/Due Diligence"
            className="absolute bottom-4 right-4 xl:bottom-14 xl:right-0"
          />
        </div>
        <div className="relative overflow-hidden bg-[#0e172a] col-span-2 p-6 lg:p-8 rounded-2xl lg:rounded-3xl cursor-pointer">
          <h2 className="mt-2 text-2xl text-white font-bold">
            Corporate Recovery and Insolvency
          </h2>
          <p className="mt-2 w-[66%] text-sm text-[#98a2b2]">
            {" "}
            We support stakeholders through debt resolution, turnaround
            strategies, liquidation processes, and creditor negotiations.{" "}
          </p>
          <p className="mt-4 flex items-center gap-1 text-[#0095DA] font-semibold">
            View More <RiArrowRightUpLine size={20} />
          </p>
          <Image
            src="/arrow.png"
            width={160}
            height={60}
            alt="Taxation/Due Diligence"
            className="absolute bottom-1 right-2 rotate-[-22deg] w-38 sm:w-32 md:w-[200px]"
          />
        </div>
      </div>
    </section>
  );
}
