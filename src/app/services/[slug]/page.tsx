// app/service/[slug]/page.tsx
import { notFound } from "next/navigation";
import { services } from "../services";
import Image from "next/image";

type Params = Promise<{ slug: string }>;
const ServicePage = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  return (
    <div className="p-6">
      {/* <h1 className="text-3xl font-bold">{service.name}</h1> */}
      <div
        className="h-[10rem] w-full sm:h-[14rem] sm:w-[48rem] px-6 py-7 sm:px-8 sm:py-9 rounded-md lg:rounded-xl cursor-pointer overflow-hidden relative"
        style={{ backgroundColor: service.bgColor, color: service.textColor }}
      >
        <h2 className="text-xl sm:text-3xl font-bold">{service.name}</h2>

        <Image
          src={service.image}
          width={110}
          height={80}
          alt={service.name}
          className={`absolute bottom-0 right-5 w-23 sm:w-20 md:w-[160px]  ${service.slug === "corporate-recovery-and-insolvency" ? "rotate-[-22deg]" : ""} 
    ${service.slug === "assurance-services" ? "md:h-[190px]" : ""}`}
        />
      </div>
      <p className="mt-4 text-justify leading-10 whitespace-pre-line text-gray-700">
        {service.description}
      </p>
    </div>
  );
};
export default ServicePage;
