import { Badge } from "../Badge";
import { RiMailSendLine, RiWhatsappLine } from "@remixicon/react";

export default function Contact() {
  return (
    <section
      aria-labelledby="code-example-title"
      className="mx-auto mt-24 w-full max-w-6xl px-3"
    >
      <Badge>Contact Us</Badge>

      <div className="mt-12 ">
        <div className="w-full flex flex-col items-center h-70 gap-1 py-12 md:py-14 px-5 bg-[#07314a] rounded-2xl lg:rounded-3xl">
          <h2 className="m-0 font-bold text-white text-3xl md:text-3xl xl:text-4xl">
            DO YOU HAVE A QUESTION?
          </h2>
          <p className="mb-0 mt-4 text-white text-sm md:text-xl">
            {" "}
            Contact us through your preferred channel{" "}
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <a
              href="mailto:enquiries@dnamazcapital.com"
              className="text-gray-200 bg-[#0095da] !border-none relative w-12 h-12 flex justify-center items-center rounded-lg line-no-box cursor-pointer focus:text-brand-800 font-medium hover:text-brand-700 no-underline text-base text-gray-900"
            >
              <RiMailSendLine className="text-white" />
            </a>
            <a
              href="https://wa.me/2348188654881?text=Hi%20there%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg cursor-pointer"
            >
              <RiWhatsappLine className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /* <a
          className="bg-blue-100 flex group opacity-0 flex-col overflow-hidden relative p-6 lg:p-8 rounded-2xl lg:rounded-3xl min-h-[382px] md:min-h-[288px] lg:min-h-[300px] animate-fadeInLeft duration-700 delay-200"
          style={{
            background: "radial-gradient(circle, #172543, #000000)",
          }}
        >
          <div className="flex flex-col relative z-10 h-full">
            <div className="relative z-10 rtl:text-right">
              <h3 className="text-3xl xl:text-4xl font-bold text-white">
                XM App{" "}
              </h3>
              <p className="text-base font-medium py-4 max-w-96 xl:max-w-[26rem] text-gray-200">
                Get full access to XM services with the top-rated, award-winning
                XM App.
              </p>
            </div>
            <div className="flex flex-row gap-2.5 mt-4"></div>
            <button className="flex items-center gap-2 mt-auto mb-0 max-w-max z-10 cursor-pointer focus:text-white font-medium hover:text-brand-600 no-underline text-lg text-white">
              {" "}
              Get the App{" "}
            </button>
          </div>
        </a> */
}
