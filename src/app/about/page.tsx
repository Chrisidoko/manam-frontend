import { Badge } from "@/components/Badge";

import { Faqs } from "@/components/ui/Faqs";
import TeamGallery from "@/components/ui/TeamGallery";
// import { cx } from "@/lib/utils";
import Balancer from "react-wrap-balancer";

export default function About() {
  return (
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="about-overview"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>about us</Badge>
        <h1
          id="about-overview"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-5xl"
        >
          <Balancer>
            Specialized in Taxation, Human <br /> Capital Development and Advisory
          </Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-justify text-gray-700">
          Manam Professional Services is a Nigerian firm specializing in
          Taxation, Human Capital Development and  Advisory services with
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
      </section>
      <TeamGallery />
      <Faqs />
    </div>
  );
}
