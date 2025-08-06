"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Accordion";

const faqs = [
  {
    question:
      "What services does Manam Professional Services offer?",
    answer:
      "We specialize in Taxation, Advisory Services, Human Capital Development, and Corporate Recovery & Insolvency. Our goal is to provide strategic solutions that help businesses grow, stay compliant, and overcome financial challenges.",
  },
  {
    question: "Who can benefit from your services?",
    answer:
      "We cater to private and public businesses, startups, investors, and organizations seeking expert guidance on financial management, compliance, business growth, and staff development.",
  },
  {
    question: "How can I engage your firm for services?",
    answer:
      "You can reach us via our website’s contact form, email, or phone. We will schedule an initial consultation to assess your needs and provide a tailored proposal.",
  },
  {
    question:
      "What type of tax services do you provide?",
    answer:
      "We offer tax planning, compliance, filing, and advisory services, as well as tax due diligence for businesses and individuals.",
  },
  {
    question: "How can your advisory services help my business?",
    answer:
      "Our advisory services guide businesses in strategy, compliance, risk management, and decision-making to enhance growth and operational efficiency.",
  },

    {
    question: "What is Human Capital Development?",
    answer:
      "It involves building employee skills, leadership capacity, and performance through training, workshops, and talent management strategies.",
  },

    {
    question: "Do you provide customized training for organizations?",
    answer:
      "Yes, we design tailored training programs to meet your organization’s specific goals, whether it’s leadership development, compliance training, or performance enhancement.",
  },

    {
    question: "What does Corporate Recovery and Insolvency entail?",
    answer:
      "We assist businesses facing financial distress with restructuring, turnaround strategies, and insolvency solutions to protect assets and maximize recovery ",
  },

    {
    question: "At what stage should a company seek corporate recovery services?",
    answer:
      "The earlier, the better. Companies should contact us at the first signs of cash flow challenges, debt pressure, or operational decline to prevent insolvency.",
  },

    {
    question: "Do you offer consultations before engaging your services?",
    answer:
      "Yes, we provide an initial consultation to understand your needs and recommend the most effective service plan for your business.",
  },

  
 
];

export function Faqs() {
  return (
    <section className="mt-20 sm:mt-36" aria-labelledby="faq-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-14">
        <div className="col-span-full sm:col-span-5">
          <h2
            id="faq-title"
            className="inline-block scroll-my-24 bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 pr-2 text-2xl font-bold tracking-tighter text-transparent lg:text-3xl"
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600">
            Can&rsquo;t find the answer you&rsquo;re looking for? Don&rsquo;t
            hesitate to get in touch with our{" "}
            <a
              href="/contact"
              className="font-medium text-[#0095DA]"
            >
              support
            </a>{" "}
            team.
          </p>
        </div>
        <div className="col-span-full mt-6 lg:col-span-7 lg:mt-0">
          <Accordion type="multiple" className="mx-auto">
            {faqs.map((item) => (
              <AccordionItem
                value={item.question}
                key={item.question}
                className="py-3 first:pb-3 first:pt-0"
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
