import { Badge } from "../Badge";

const features = [
  {
    name: "Advisory",
    description:
      "Providing strategic advisory services to drive growth, optimize operations, and expand global reach.",
  },
  {
    name: "Tax",
    description:
      "We offer trusted tax advisory services, helping you navigate complex tax regulations to ensure compliance and foster transparency in your tax matters",
  },
  {
    name: "Training",
    description:
      "Empowering our participant with up-to-date knowledge and skills for improved performance and quality service delivery.",
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
      <h3 className="mt-20 text-gray-600">WHAT WE DO</h3>
      <h2 className="w-full sm:w-[70%] mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-2xl font-bold tracking-tighter text-transparent sm:text-4xl">
      We ensure financial integrity, regulatory compliance, and business growth while empowering organizations through strategic training and professional guidance.
      </h2>
      <p className="mt-2 px-2 text-gray-600">
        Our diversified proposition delivers value across the board
      </p>
      <div className="sm:mt-8 flex flex-col items-center sm:flex-row sm:items-start gap-4 justify-between px-2 py-6 md:gap-10  md:px-50">
        {features.map((item) => (
          <div
            key={item.name}
            className="flex flex-col px-6 py-5 items-center w-[80%] sm:w-[30%] gap-2 rounded-xl  hover:bg-[#e0f2fe] ring-2 ring-gray-200/80 hover:ring-[#0395da] transform transition duration-400 hover:-translate-y-2 hover:shadow-lg"
          > 
            <Badge className="text-2xl"> {item.name}</Badge>

            <p className="mt-2 text-left leading-6 text-justify text-[#4B4949] hover:text-[#07314a]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
