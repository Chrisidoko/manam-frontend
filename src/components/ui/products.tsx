const features = [
  {
    name: "Advisory",
    description:
      "Strategic management consulting to drive growth, optimize operations, and expand global reach.",
  },
  {
    name: "Tax & Assurance",
    description:
      "Providing trusted tax advisory and assurance services to ensure compliance, transparency, and financial integrity",
  },
  {
    name: "Training",
    description:
      "Empowering our clients with up-to-date financial knowledge and skills for improved decision-making and performance.",
  },
];

export default function Products() {
  return (
    <section
      id="logo cloud"
      aria-label="Company logos"
      className="mt-24 flex animate-slide-up-fade flex-col items-center justify-center gap-y-6 text-center sm:mt-1"
      style={{ animationDuration: "1500ms" }}
    >
      <div className="flex justify-between px-40 py-6 sm:grid md:grid-cols-3 md:gap-x-10  md:px-50">
        {features.map((item) => (
          <div key={item.name} className="flex flex-col items-start gap-2">
            <h3 className="whitespace-nowrap bg-gradient-to-b from-[#0095DA] to-[#0095DA] bg-clip-text font-semibold text-transparent text-lg sm:text-xl md:text-2xl">
              {item.name}
            </h3>
            <p className="hidden md:block text-left leading-6 text-[#4B4949]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
