import { Badge } from "@/components/Badge";
import Image from "next/image";

// import { cx } from "@/lib/utils";
import Corevalues from "@/components/ui/corevalues";

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
        <Badge>company profile</Badge>
        <div className="flex flex-col gap-20 mt-13">
          <div className="grid grid-cols-1 gap-x-10 items-center sm:grid-cols-2">
            <Image
              alt="mission image"
              src="/mission.png"
              width={500}
              height={500}
              className="rounded-2xl h-80 object-fit"
            />
            <div className="ml-auto flex flex-col">
              <h2 className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent md:text-4xl ">
                Our Mission
              </h2>
              <p className="leading-7 text-gray-600">
                To provide value-driven professional consultancy and assurance
                services, empowering clients through strategic insights,
                technical excellence, and commitment to integrity.
              </p>
            </div>
          </div>
          {/* vision */}
          <div className="grid grid-cols-1 gap-x-10 items-center sm:grid-cols-2 sm: gap-y-10 ">
            <div className="ml-auto flex flex-col">
              <h2 className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl font-bold tracking-tighter text-transparent md:text-4xl ">
                Our Vision
              </h2>
              <p className="leading-7 text-gray-600">
                To be a trusted leader in delivering innovative and impactful
                management, advisory, Taxation and assurance solutions that
                drive sustainable growth for businesses across Nigeria and
                beyond
              </p>
            </div>
            <Image
              alt="vision image"
              src="/vision.png"
              width={500}
              height={500}
              className="rounded-2xl h-80 object-fit"
            />
          </div>
        </div>

        <Corevalues />
      </section>
    </div>
  );
}
