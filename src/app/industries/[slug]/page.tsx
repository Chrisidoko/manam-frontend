// app/service/[slug]/page.tsx
import { notFound } from "next/navigation";
import { industries } from "../industries";
// import Image from "next/image";

type Params = Promise<{ slug: string }>;
const ServicePage = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const service = industries.find((s) => s.slug === slug);

  if (!service) return notFound();

  // Each slug gets only one width rule, avoiding class conflict.
  const baseClasses = "absolute bottom-0 right-3 sm:w-30";

  return (
    <div className="px-6">
      {/* <h1 className="text-3xl font-bold">{service.name}</h1> */}
      <div className="h-[10rem] w-full sm:h-[17rem] sm:w-[48rem] px-6 py-7 sm:px-8 sm:py-9 rounded-md lg:rounded-xl cursor-pointer overflow-hidden relative">
        <div className="absolute inset-0 w-full h-full transition-opacity duration-1000">
          <img
            src={service.image}
            alt="gallert"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-10" />

        {/* Foreground content */}
        <div className="relative z-20 flex items-center h-full px-6 sm:px-14">
          <div className="w-full flex flex-col items-center justify-center gap-3 md:gap-6 text-white">
            <h1 className="mx-auto text-xl sm:text-3xl text-center font-bold leading-tight animate-[slideUpFade_700ms_ease-in-out]">
              {service.name}
            </h1>
          </div>
        </div>
      </div>
      {/* <div
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
      </div> */}

      <p className="mt-4 text-lg sm:w-[48rem] text-justify leading-7 whitespace-pre-line text-gray-700">
        {service.description}
      </p>
    </div>
  );
};
export default ServicePage;
