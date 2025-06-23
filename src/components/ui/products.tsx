import { Badge } from "../Badge";

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
      "Empowering our participant with up to date knowledge and skills for improved performance and quality services.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      aria-label="Company logos"
      className="flex animate-slide-up-fade flex-col items-center justify-center gap-y-6 text-center sm:mt-1"
      style={{ animationDuration: "1500ms" }}
    >
      <h3 className="mt-20 text-gray-400">WHAT WE DO</h3>
      <h2 className="w-full sm:w-[76%] mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-2xl font-bold tracking-tighter text-transparent sm:text-4xl md:text-4xl">
        We are an Africa-focused firm, that ensures financial integrity, and
        deliver empowering training.
      </h2>
      <p className="mt-2 px-2 text-gray-600">
        Our diversified proposition delivers value across the board
      </p>
      <div className="sm:mt-8 flex flex-col sm:flex-row gap-4 justify-between px-2 py-6 md:gap-10  md:px-50">
        {features.map((item) => (
          <div
            key={item.name}
            className="flex flex-col px-6 py-5 items-center gap-2 rounded-xl hover:shadow-md hover:shadow-black/15  ring-2 ring-gray-200/80 hover:ring-blue-200/80 "
          >
            <Badge className="text-2xl"> {item.name}</Badge>

            <p className="mt-2 text-justify leading-6 text-[#4B4949]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
