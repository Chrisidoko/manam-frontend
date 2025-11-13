import { RiCheckLine } from "@remixicon/react";

export default function WhyChooseUs() {
  return (
    <section aria-labelledby="code-example-title" className="w-full">
      <div
        className="w-full h-66 sm:h-100 flex flex-col items-center justify-center gap-1 mx-auto 
             bg-cover bg-start bg-no-repeat relative"
        style={{ backgroundImage: `url("/minwhat.jpg")` }}
      >
        {/*  an overlay for text readability */}
        <div className="absolute inset-0 bg-black opacity-59"></div>
        <h2 className="m-0 font-bold mt-5 text-white text-center text-2xl md:text-3xl xl:text-4xl relative z-10">
          Why Choose Us
        </h2>
        <p className="mb-0 mt-2 px-12 sm:px-0 sm:mt-4 text-white text-center text-sm md:text-xl relative z-10">
          At Manam Professional Services, we simplify the complex, so you can
          focus on growth through:
        </p>
        <div className="mt-[2vh] flex flex-col gap-2 sm:gap-4 text-xs text-white sm:text-base relative z-10">
          <span className="flex items-center gap-2">
            <RiCheckLine color="#ffffff" />
            Smart guidance for confident decisions.{" "}
          </span>
          <span className="flex items-center gap-2">
            <RiCheckLine color="#ffffff" />
            Clear, compliant, stress-free solutions.{" "}
          </span>
          <span className="flex items-center gap-2">
            <RiCheckLine color="#ffffff" />
            Practical knowledge that builds stronger teams.{" "}
          </span>
        </div>{" "}
        */
      </div>
    </section>
  );
}
