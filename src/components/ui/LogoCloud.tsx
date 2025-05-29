// import { Badge } from "../Badge";

export default function LogoCloud() {
  return (
    <section
      id="logo cloud"
      aria-label="Company logos"
      className="bg-gradient-to-br from-[#e1eaf7] to-[#ffffff] mx-auto mt-24 w-full px-10 sm:px-40"
      style={{ animationDuration: "1500ms" }}
    >
      <div className="mt-26 flex flex-col items-center gap-8 md:flex-row">
        <div className="mr-auto">
          <h1
            id="Partners-title"
            className="max-w-2xl text-left inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-3xl text-transparent font-bold tracking-tighter sm:text-2xl md:text-3xl"
          >
            Partners
          </h1>
          <p className="max-w-3xl text-3xl text-[#0095da] font-bold tracking-tighter sm:text-2xl md:text-3xl">
            We believe in the power <br /> of collaboration.
          </p>
        </div>
        <span className="max-w-2xl ml-auto">
          Through strategic partnerships with leading organizations and
          professional bodies, we enhance our expertise, ensure continuous
          innovation, and deliver exceptional value to our clients.
        </span>
      </div>

      <div className="mt-16  mb-26 grid grid-cols-2 gap-6 gap-y-4 text-gray-900 md:grid-cols-4 md:gap-x-20">
        {[
          { src: "/dnamaz.png", alt: "dnamazcapital", className: "w-16" },
          {
            src: "/goldenspring.png",
            alt: "goldenspring securities",
            className: "w-28",
          },

          { src: "/sec.png", alt: "Sec Nigeria", className: "w-38" },
          {
            src: "/goldenspring.png",
            alt: "goldenspring securities",
            className: "w-28",
          },
        ].map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className={`${logo.className} cursor-pointer grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300`}
          />
        ))}
      </div>
    </section>
  );
}
