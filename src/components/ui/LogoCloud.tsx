export default function LogoCloud() {
  return (
    <section
      id="logo cloud"
      aria-label="Company logos"
      className="mt-24 flex animate-slide-up-fade flex-col items-center justify-center gap-y-6 text-center sm:mt-1"
      style={{ animationDuration: "1500ms" }}
    >
      <p className="text-lg font-medium tracking-tighter text-gray-800">
        Partnering with leading financial institutions.
      </p>
      <div className="grid grid-cols-2 gap-6 gap-y-4 text-gray-900 md:grid-cols-4 md:gap-x-20">
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
