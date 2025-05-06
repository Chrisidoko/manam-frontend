// import HeroImage from "./HeroImage"

const features = [
  {
    name: "Advisory",
    description:
      "Management consulting for global access, enhancing performance.",
  },
  {
    name: "Tax & Assurance",
    description: "Delivering Reliable Tax Strategies and Assurance Solutions.",
  },
  {
    name: "Training",
    description:
      "Ensuring our advisee's are at the forefront of financial expertise.",
  },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="mt-32 flex flex-col items-center justify-center text-center sm:mt-40"
    >
      {" "}
      <h1
        id="hero-title"
        className="inline-block animate-slide-up-fade bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text p-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl"
        style={{ animationDuration: "700ms" }}
      >
        We don’t just offer services <br /> we create value
      </h1>
      <p
        className="mt-6 max-w-lg animate-slide-up-fade text-lg text-gray-700 z-30"
        style={{ animationDuration: "900ms" }}
      >
        Our approach blends responsiveness with the highest standards of
        professionalism, independence, and objectivity.
      </p>
      <div className="z-20 -mt-32 h-[26rem] w-full overflow-hidden md:-mt-36">
        <div className="absolute bottom-0 h-3/5 w-full bg-gradient-to-b from-transparent via-[#e0f3fe] to-[#0095da] z-10" />
        <div className="absolute inset-x-6 bottom-12 top-86 m-auto max-w-4xl md:top-2/3 z-20">
          <div className="grid grid-cols-1 gap-x-10 gap-y-6 rounded-lg border border-white/[60%] bg-white/[50%] px-6 py-6 shadow-xl backdrop-blur md:grid-cols-3 md:p-8">
            {features.map((item) => (
              <div key={item.name} className="flex flex-col items-start gap-2">
                <h3 className="whitespace-nowrap bg-gradient-to-b from-[#0095DA] to-[#0095DA] bg-clip-text text-lg font-semibold text-transparent md:text-xl">
                  {item.name}
                </h3>
                <p className="text-sm text-left leading-6 text-[#4B4949]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
