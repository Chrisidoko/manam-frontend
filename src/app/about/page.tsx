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
            Specialized in Management Consultancy, <br /> Accounting, and
            Assurance
          </Balancer>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-gray-700">
          Manam Professional Services is a trusted provider of Management
          Consultancy, taxation, Assurance and training services, with offices
          in Kaduna, Kano and Abuja.
          <br />
          <br />
          We are committed to delivering cost-effective, high-quality solutions
          tailored to meet the specific needs of your business. Our team
          combines deep industry knowledge with a personalized approach,
          ensuring that every client receives expert guidance and measurable
          results.
        </p>
      </section>
      <TeamGallery />

      <Faqs />
    </div>
  );
}
