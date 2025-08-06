// app/service/[slug]/page.tsx
import { notFound } from "next/navigation";
import { services } from "../services";
import Image from "next/image";

type Params = Promise<{ slug: string }>;
const ServicePage = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) return notFound();

  // Each slug gets only one width rule, avoiding class conflict.
  const baseClasses = "absolute bottom-0 right-3 sm:w-30";

  const conditionalClasses =
    service.slug === "taxation"
      ? "w-22 md:w-[140px] sm:mr-30"
      : service.slug === "corporate-recovery-and-insolvency"
        ? "rotate-0 md:w-[320px]"
        : service.slug === "assurance-services"
          ? "w-60 md:w-[454px] left-38 sm:left-60 rotate-[-38deg] md:rotate-[-38deg]"
          : service.slug === "management-consultancy"
            ? "w-34 md:w-[300px]"
            : "md:w-[360px]"; // default width

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
          width={160}
          height={80}
          alt={service.name}
          className={`${baseClasses} ${conditionalClasses}`}
        ></Image>
      </div>

      <p className="mt-4 text-lg sm:w-[48rem] text-justify leading-7 whitespace-pre-line text-gray-700">
        {service.description}
      </p>
    </div>
  );
};
export default ServicePage;
