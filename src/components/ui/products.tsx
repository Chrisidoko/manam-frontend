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
      "Empowering our clients with up-to-date financial knowledge and skills for improved decision-making and performance.",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      aria-label="Company logos"
      className="hidden sm:block flex animate-slide-up-fade flex-col items-center justify-center gap-y-6 text-center sm:mt-1"
      style={{ animationDuration: "1500ms" }}
    >
      <div className="sm:mt-16 flex justify-between px-2 py-6 sm:grid md:grid-cols-3 md:gap-x-10  md:px-50">
        {features.map((item) => (
          <div
            key={item.name}
            className="flex flex-col px-6 py-5 items-center gap-2 rounded-xl hover:shadow-md hover:shadow-black/15   ring-2 ring-gray-200/80"
          >
            <Badge className="text-2xl"> {item.name}</Badge>

            <p className="hidden sm:block mt-2 text-center leading-6 text-[#4B4949]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
