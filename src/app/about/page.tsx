// import { Badge } from "@/components/Badge";

import { Faqs } from "@/components/ui/Faqs";
import TeamGallery from "@/components/ui/TeamGallery";
// import { cx } from "@/lib/utils";
import Balancer from "react-wrap-balancer";

export default function About() {
  return (
    <div className="mt-6 flex flex-col overflow-hidden px-0">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <section className="relative w-full mt-[8vh] sm:mt-[10vh] h-[20vh] md:h-[30vh] mx-auto overflow-hidden">
          {/* Background images */}

          <div className="absolute inset-0 w-full h-full transition-opacity duration-1000">
            <img
              src="/Aboutus-min.jpg"
              alt="gallert"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-30 z-10" />

          {/* Foreground content */}
          <div className="relative z-20 flex items-center h-full px-6 sm:px-14">
            <div className="w-full flex items-center text-white">
              <h1 className="mx-auto text-2xl text-center sm:text-5xl font-bold leading-tight animate-[slideUpFade_700ms_ease-in-out]">
                About Us
              </h1>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-4 sm:mt-12 max-w-6xl px-8">
          <h1
            id="about-overview"
            className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-2xl font-bold tracking-tighter text-transparent md:text-5xl"
          >
            <Balancer>
              Specialized in Taxation, Human Capital Development and Advisory
            </Balancer>
          </h1>
          <p className="mt-6 max-w-4xl text-base md:text-lg text-justify text-gray-700">
            Manam Professional Services is a Nigerian firm specializing in
            Taxation, Human Capital Development and Advisory services with
            offices in Kano, Kaduna and Abuja. We deliver cost-effective,
            high-quality solutions tailored to your business needs.
            <br />
            <br />
            Our approach blends responsiveness with the highest standards of
            professionalism, independence, and objectivity. We invest heavily in
            training our team to ensure top-tier expertise, because we know our
            clients expect nothing less.
            <br />
            <br />
          </p>
          <TeamGallery />
          <Faqs />
        </div>
      </section>
    </div>
  );
}
