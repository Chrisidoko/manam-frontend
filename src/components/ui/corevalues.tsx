const corevalues = [

  {
    title: "Professionalism",
    description:
      "We deliver our services with competence, responsibility, and respect.",
  },
  {
    title: "Accountability",
    description:
      "We take full responsibility for our commitments and outcomes.",
  },

  {
    title: "Client-Centricity",
    description:
      "Our solutions are tailored to meet the unique needs of every client.",
  },
  {
    title: "Teamwork",
    description:
      "We work collaboratively, leveraging our diverse strengths for greater impact while striving for the highest quality in our work and results.",
  },
];

export default function Corevalues() {
  return (
    <section aria-labelledby="benefits-title" className="mx-auto mt-26">
      <h2
        id="benefits-title"
        className="inline-block bg-gradient-to-t from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent md:text-5xl"
      >
        Our Core Values
      </h2>
      <dl className="mt-8 grid grid-cols-4 gap-x-10 gap-y-8 sm:mt-12 sm:gap-y-10">
        {corevalues.map((corevalue, index) => (
          <div key={index} className="col-span-4 sm:col-span-2 lg:col-span-1">
            <dt className="font-semibold text-gray-900">{corevalue.title}</dt>
            <dd className="mt-2 leading-7 text-gray-600 text-justify">
              {corevalue.description}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
