"use client";

import { useState } from "react";

import Balancer from "react-wrap-balancer";

export default function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Your message has been sent successfully!",
        });
        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      aria-labelledby="contact-form"
      id="contact-form"
      className="animate-slide-up-fade mt-24 mb-24 px-5 sm:px-10"
      style={{
        animationDuration: "600ms",
        animationFillMode: "backwards",
      }}
    >
      <div className=" p-6 sm:p-20 border-2 border-gray-200 rounded-lg md:rounded-2xl ">
        <section className="mt-1 grid grid-cols-1 gap-x-24 sm:grid-cols-2">
          <div
            className="hidden sm:block mt-2 w-full h-56 sm:h-144 gap-1 mx-auto rounded-lg md:rounded-xl p-6
             bg-cover bg-center bg-no-repeat relative"
            // REMOVED THE EXTRA DOUBLE QUOTE HERE
            style={{ backgroundImage: `url("/contactus.jpg")` }}
          >
            {/* OPTIONAL: Add an overlay for text readability */}
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg md:rounded-xl"></div>

            <div className="h-full relative z-10 flex flex-col justify-end">
              <h2 className="m-0 font-semibold text-white text-lg md:text-xl shadow">
                Start your journey with Manam
                <br />
                where expertise meets results
              </h2>
              <p className="mt-2 shadow max-w-2xl leading text-sm text-gray-50 ">
                Fill out our contact form to make enquiries or schedule a
                meeting with us at your convenience
              </p>
            </div>
          </div>

          <div>
            <h1
              id="blogs-page"
              className="inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-2xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-5xl"
            >
              <Balancer>Contact Us</Balancer>
            </h1>

            <form
              onSubmit={handleSubmit}
              method="post"
              className="mt-3 space-y-4"
            >
              {submitStatus.message && (
                <div
                  className={`rounded-md p-2 text-sm ${
                    submitStatus.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}
              <div>
                <label htmlFor="text" className="text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="text"
                  placeholder="Your name"
                  className="mt-2 block w-full appearance-none rounded-md border px-2.5 py-2 shadow-xs outline-none transition text-xs sm:text-sm  border-gray-300 text-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  placeholder="Enter Your Email"
                  className="mt-2 block w-full appearance-none rounded-md border px-2.5 py-2 shadow-xs outline-none transition text-xs sm:text-sm border-gray-300 text-gray-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Phone (Optional)
                </label>
                <input
                  type="**numeric**"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="email"
                  placeholder="Enter Phone Number"
                  className="mt-2 block w-full appearance-none rounded-md border px-2.5 py-2 shadow-xs outline-none transition text-xs sm:text-sm border-gray-300 text-gray-700"
                />
              </div>
              <div>
                <label htmlFor="text" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  // placeholder="Enter Your Email"
                  className="mt-2 block w-full h-[9rem] appearance-none rounded-md border px-2.5 py-2 shadow-xs outline-none transition sm:text-sm border-gray-300 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-3 w-full whitespace-nowrap rounded-md bg-[#0095DA] hover:bg-[#0288C6] py-3 text-center text-white leading font-medium text-sm shadow-sm cursor-pointer disabled:bg-[#e0f3fe] disabled:text-[#36c3fa]"
              >
                {isSubmitting ? "Sending..." : "Send Your Request"}
              </button>
            </form>
            {/* <p className="mt-14 leading font-semibold text-sm">
            You can also Contact Us via
          </p> */}
            {/* <div className="mt-6 flex flex-wrap gap-9">
            <div className="flex items-center gap-4">
              <div className="h-[3rem] w-[3rem] flex items-center justify-center rounded-full border border-gray-300 text-[#0095DA]">
                <RiMailFill size={24} />
              </div>
              <p className="text-sm text-gray-700">
                info@manamprofessionals.com
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="h-[3rem] w-[3rem] flex items-center justify-center rounded-full border border-gray-300 text-[#0095DA]">
                <RiPhoneFill size={24} />
              </div>
              <p className="text-sm text-gray-700">+2349160422222</p>
            </div>
          </div> */}
          </div>
        </section>
      </div>
    </section>
  );
}
