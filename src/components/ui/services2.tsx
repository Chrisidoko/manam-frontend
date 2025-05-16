import { Badge } from "../Badge";
import Image from "next/image";
import { RiArrowRightUpLine } from "@remixicon/react";

export default function Services2() {
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
      <p className="mt-6 max-w-2xl sm:text-lg text-gray-600">
        Empowering your organization&apos;s growth with tailored services that
        ensures your ambitions becomes a reality.
      </p>
      <div className="mt-12 w-full h-full flex flex-col gap-5 md:gap-7">
        {/* Human Capital Development */}
        <div className="bg-white h-full sm:h-[20rem] w-full sm:w-[56rem] px-6 py-7 sm:px-8 sm:py-9 rounded-xl lg:rounded-3xl cursor-pointer overflow-hidden relative">
          <h2 className="text-xl sm:text-3xl font-bold">
            Human Capital Development
          </h2>
          <p className="sm:mt-2 w-[70%] text-xs sm:text-sm text-[#667085]">
            {" "}
            <br />
            We believe that people are the core of every successful
            organization. Our Human Capital Development services are designed to
            equip employees with the knowledge, skills, and mindset required to
            thrive in today’s fast-paced, competitive environment.
            <br />
            From leadership training to performance management and workforce
            planning, we provide tailored learning and development programs that
            align with your strategic goals. Our approach fosters talent growth,
            employee retention, and overall organizational effectiveness.
          </p>

          <Image
            src="/hands.png"
            width={210}
            height={180}
            alt="Human Capital Development Services"
            className="absolute bottom-0 right-5 w-32 sm:w-40 sm:h-36 md:w-[210px] md:h-[190px]"
          />
        </div>
        {/* Management Consultancy */}
        <div className="ml-auto relative h-full sm:h-[20rem] w-full sm:w-[56rem] bg-gradient-to-br from-[#b9e8fe] to-[#7cd6fd] px-6 py-7 sm:px-8 sm:py-9 rounded-xl lg:rounded-3xl cursor-pointer">
          <h2 className="text-xl sm:text-3xl font-bold">
            Management Consultancy{" "}
          </h2>
          <p className="sm:mt-2 w-[70%] text-xs sm:text-sm">
            {" "}
            <br />
            Our Management Consultancy services focus on delivering practical
            and result-oriented solutions to help businesses solve complex
            challenges, improve operations, and drive growth. We work closely
            with our clients to understand their organizational structure,
            market positioning, and internal capabilities. From strategic
            planning and process optimization to business transformation and
            corporate restructuring, our consultancy offerings are tailored to
            help organizations enhance performance, achieve operational
            excellence, and sustain long-term success.
          </p>

          <Image
            src="/knight.png"
            width={160}
            height={60}
            alt="Management Consultancy "
            className="absolute bottom-16 sm:bottom-6 right-0 w-38 sm:w-40 sm:h-36 md:bottom-12 md:w-[160px] md:h-[190px]"
          />
        </div>
      </div>

      <div className="mt-8 w-full flex flex-col gap-5 md:gap-7">
        <div className="relative bg-[#065c86] h-full sm:h-[20rem] w-full sm:w-[56rem] px-6 py-7 sm:px-8 sm:py-9 rounded-xl lg:rounded-3xl cursor-pointer">
          <h2 className="sm:mt-2 text-xl sm:text-3xl text-white font-bold">
            Assurance Services
          </h2>
          <p className="sm:mt-2 w-[68%] sm:w-[70%] text-xs sm:text-sm text-[#e0f3fe]">
            {" "}
            <br />
            Whether through audits, reviews, or agreed-upon procedures, we
            ensure compliance with regulatory requirements and provide
            actionable insights that support sound decision-making. We uphold
            the highest standards of independence and objectivity, delivering
            value beyond compliance by identifying risks, improving internal
            controls, and enhancing stakeholder trust.
            <br />
            Our Assurance Services provide clients with confidence in the
            accuracy and integrity of their financial information.
          </p>

          <Image
            src="/shield.png"
            width={120}
            height={60}
            alt="Assurance Services"
            className="absolute top-33 right-4 xl:top-9 xl:right-16 w-28 sm:w-30 sm:h-40"
          />
        </div>
        <div className="ml-auto relative bg-[#E6EEF3] h-full sm:h-[20rem] w-full sm:w-[56rem] px-6 py-7 sm:px-8 sm:py-9 rounded-xl lg:rounded-3xl cursor-pointer">
          <h2 className="sm:mt-2 text-xl sm:text-3xl text-[#07314a] font-bold">
            Taxation/Due Diligence
          </h2>
          <p className="sm:mt-2 w-[66%] text-xs sm:text-sm text-[#065c86]">
            {" "}
            <br />
            We offer comprehensive tax advisory and due diligence services that
            help businesses navigate the complexities of local tax laws while
            maintaining compliance and optimizing tax positions. Our experienced
            professionals provide guidance on corporate tax planning, VAT
            compliance, and withholding tax management. Through our due
            diligence services, we support clients in mergers, acquisitions, and
            investments, ensuring transparency, minimizing risks, and
            safeguarding business interests.
          </p>

          <Image
            src="/stack.png"
            width={160}
            height={60}
            alt="Taxation/Due Diligence"
            className="absolute bottom-20 right-1 w-36 xl:bottom-14 xl:right-20 sm:w-50 sm:h-54"
          />
        </div>
        <div className="relative overflow-hidden bg-[#0e172a] h-full sm:h-[20rem] w-full sm:w-[56rem] px-6 py-7 sm:px-8 sm:py-9 rounded-xl lg:rounded-3xl cursor-pointer">
          <h2 className="sm:mt-2 text-xl sm:text-3xl text-white font-bold">
            Corporate Recovery and Insolvency
          </h2>
          <p className="sm:mt-2 w-[74%] text-xs sm:text-sm text-[#98a2b2]">
            {" "}
            <br />
            In times of financial distress, timely intervention is critical. Our
            Corporate Recovery and Insolvency services are structured to assist
            businesses in evaluating their financial health, identifying
            restructuring options, and managing insolvency proceedings
            professionally. We support stakeholders through debt resolution,
            turnaround strategies, liquidation processes, and creditor
            negotiations. Our goal is to preserve value, ensure compliance, and
            guide clients toward the most viable path forward.
          </p>

          <Image
            src="/arrow.png"
            width={160}
            height={60}
            alt="Taxation/Due Diligence"
            className="absolute bottom-2 right-0 rotate-[-22deg] xl:right-6 w-38 sm:w-50 sm:h-46"
          />
        </div>
      </div>
    </section>
  );
}
