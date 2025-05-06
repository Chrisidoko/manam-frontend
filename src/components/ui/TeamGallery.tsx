import { InstaxImage } from "./InstaxImage";

export default function TeamGallery() {
  return (
    <section
      aria-labelledby="teamwork-title"
      className="mx-auto mt-5 max-w-4xl animate-slide-up-fade"
      style={{
        animationDuration: "600ms",
        animationDelay: "200ms",
        animationFillMode: "backwards",
      }}
    >
      <div className="mt-20">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <InstaxImage
            className="w-[25rem] -rotate-6 sm:-ml-10"
            src="/images/working.webp"
            alt="picture 1"
            width={640}
            height={427}
            caption="picture 1"
          />
          <InstaxImage
            className="w-[15rem] rotate-3"
            src="/images/workplace.webp"
            alt="picture 2"
            width={640}
            height={853}
            caption="picture 2"
          />
          <InstaxImage
            className="-mr-10 w-[15rem] rotate-1"
            src="/images/home.webp"
            alt="picture 2"
            width={640}
            height={960}
            caption="picture 2"
          />
        </div>
      </div>

      <p className="mt-18 max-w-2xl text-lg text-gray-700">
        From startups to established enterprises, we provide strategic guidance
        on key challenges, including business growth, staff retention,
        regulatory compliance, taxation, financing, economic shifts,
        international expansion, and succession planning.
        <br />
        <br />
        At Manam, we don’t just offer services—we create value. Let’s build your
        success together.
      </p>
      <div className="mt-28">
        <div className="flex w-full flex-col items-center justify-between md:flex-row">
          <div className="w-full rotate-1 overflow-hidden rounded-2xl">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/mBYEjPRoG1E?si=tGx8JEoXzdppXAFZ"
              title="Training Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-[500px] border-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
