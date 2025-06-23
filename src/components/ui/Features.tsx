import React from "react";
import { Badge } from "../Badge";

const stats = [
  {
    name: "Client Growth",
    value: "+45%", // Example percentage growth
  },
  {
    name: "Client Retention Rate",
    value: "95%", // High retention indicates client satisfaction
  },
  {
    name: "Years of Collective Experience",
    value: "10+",
  },
];

export default function Features() {
  return (
    <section
      aria-labelledby="features-title"
      className="mx-auto mt-24 w-full max-w-6xl px-3"
    >
      <Badge>Company Overview</Badge>
      <h2
        id="features-title"
        className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl"
      >
        Delivering Strategic Business Solutions.
      </h2>
      <p className="mt-6 max-w-3xl text-lg text-justify leading-7 text-gray-600">
        Manam professional services provides expert strategic business advice
        designed to meet your unique needs. We offer tailored solutions across
        investment, retirement, and more, empowering you to achieve your
        financial goals with confidence.
      </p>
      <dl className="mt-12 grid grid-cols-1 gap-y-8 md:grid-cols-3 md:border-y md:border-gray-200 md:py-14">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <div className="border-l-2 border-blue-100 pl-6 md:border-l md:text-center lg:border-gray-200 lg:first:border-none ">
              <dd className="inline-block bg-gradient-to-t from-[#0095da] to-[#36c3fa] bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl">
                {stat.value}
              </dd>
              <dt className="mt-1 text-gray-600">{stat.name}</dt>
            </div>
          </React.Fragment>
        ))}
      </dl>
    </section>
  );
}
