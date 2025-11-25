// app/products/[slug]/page.tsx
import { notFound } from "next/navigation";
import { products } from "../products";
import { RiCheckFill } from "@remixicon/react";
import ContactUsCard from "@/components/ui/contactcomponent";
// import Image from "next/image";

type Params = Promise<{ slug: string }>;
const ServicePage = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const service = products.find((s) => s.slug === slug);

  if (!service) return notFound();

  // Each slug gets only one width rule, avoiding class conflict.
  // const baseClasses = "absolute bottom-0 right-3 sm:w-30";

  const videoUrl = ""; // left empty for now

  return (
    <div className="flex flex-col mt-[8vh] sm:mt-[14vh]">
      {/* <h1 className="text-3xl font-bold">{service.name}</h1> */}

      <div className="bg-gradient-to-br from-[#e1eaf7] to-[#f6f6f7] w-full h-[10rem] sm:h-[16rem]">
        <div className="flex flex-col gap-3 mx-auto mt-[4vh] sm:mt-[10vh] text-center leading-tight animate-[slideUpFade_700ms_ease-in-out]">
          <h1 className="text-3xl sm:text-5xl font-bold">{service.name}</h1>
          <h3 className="px-16 text-sm sm:text-base text-gray-600 sm:text-xl font-base ">
            {service.shortdesc}
          </h3>
        </div>
      </div>

      <div className="w-full mt-8 mx-auto max-w-7xl animate-[slideUpFade_700ms_ease-in-out]">
        <div className="px-6 flex flex-col sm:flex-row items-start gap-12 ">
          <div className="w-full sm:w-2/3 mt-4 text-base md:text-lg text-justify leading-7 whitespace-pre-line text-gray-700">
            {service.description}
          </div>
          <div className="w-full sm:w-1/3">
            <div className="bg-black/80 w-full h-80 rounded-lg overflow-hidden">
              {videoUrl ? (
                <iframe
                  width="100%"
                  src={videoUrl}
                  title="Training Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-white text-lg font-semibold opacity-80">
                    Demo Video Coming Soon
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-16 mx-auto px-6 max-w-7xl">
        <h2 className=" text-left font-semibold text-xl text-gray-900 sm:text-2xl sm:leading-9">
          Key Features
        </h2>
        <dl className="mt-8 w-full grid grid-cols-2 gap-10">
          {service.factors?.map((item) => (
            <div
              key={item.id}
              className="col-span-full sm:col-span-2 lg:col-span-1"
            >
              <div className="flex items-center gap-3" id={item.id}>
                <dt className="h-6 w-6 bg-[#0395da] text-white flex items-center justify-center rounded-full shadow-md shadow-blue-400/30 ring-1 ring-black/5">
                  <RiCheckFill size={22} className="mx-auto" />
                </dt>
                <dt className="font-semibold text-gray-900 ">{item.label}</dt>
              </div>
              <dd className="mt-2 leading-7 text-gray-600">{item.text}</dd>
            </div>
          ))}
        </dl>
        <ContactUsCard />
      </div>
    </div>
  );
};
export default ServicePage;
