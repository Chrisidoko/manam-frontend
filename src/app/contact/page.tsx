"use client";

import { useState } from "react";
import { Badge } from "@/components/Badge";

import {
  RiMailFill,
  RiPhoneFill,
  RiCheckboxCircleLine,
  RiMapPin2Fill,
} from "@remixicon/react";
// import Image from "next/image";

import Balancer from "react-wrap-balancer";

export default function Contactpage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
        body: JSON.stringify({ name, email, message }),
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
    <div className="mt-36 flex flex-col overflow-hidden px-3">
      <section
        aria-labelledby="contact-page"
        className="animate-slide-up-fade"
        style={{
          animationDuration: "600ms",
          animationFillMode: "backwards",
        }}
      >
        <Badge>Contact Us</Badge>
        <h1
          id="blogs-page"
          className="mt-2 inline-block bg-gradient-to-br from-gray-900 to-gray-800 bg-clip-text py-2 text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-5xl"
        >
          <Balancer>Get in touch with us</Balancer>
        </h1>
        <p className="mt-6 max-w-2xl leading text-lg text-gray-700">
          Fill out the form below or shedule a meeting with us at your covinence
        </p>
        <section className="mt-12 grid grid-cols-1 gap-x-24 sm:grid-cols-2">
          <div>
            <form
              onSubmit={handleSubmit}
              method="post"
              className="mt-6 space-y-4"
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
                  className="mt-2 block w-full appearance-none rounded-md border px-2.5 py-2 shadow-xs outline-none transition sm:text-sm border-gray-300 text-gray-700"
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
                  className="mt-2 block w-full appearance-none rounded-md border px-2.5 py-2 shadow-xs outline-none transition sm:text-sm border-gray-300 text-gray-700"
                  required
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
                  className="mt-2 block w-full h-[10rem] appearance-none rounded-md border px-2.5 py-2 shadow-xs outline-none transition sm:text-sm border-gray-300 text-gray-700 focus:border-blue-500 focus:ring-blue-500"
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
            <p className="mt-14 leading font-semibold text-sm">
              You can also Contact Us via
            </p>
            <div className="mt-6 flex flex-wrap gap-9">
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
            </div>
          </div>
          <div>
            <p className="mt-7 leading font-semibold text-sm">
              With our services you can
            </p>
            <div className="mt-8 flex flex-col gap-y-4 text-gray-700 leading font-light text-sm">
              <span className="flex items-center gap-4">
                <RiCheckboxCircleLine /> Balance finance needs with business
                goal
              </span>
              <span className="flex items-center gap-4">
                <RiCheckboxCircleLine /> Outperform your business competiion
              </span>
              <span className="flex items-center gap-4">
                <RiCheckboxCircleLine /> Navigate the complexities of local tax
                goal
              </span>
              <span className="flex items-center gap-4">
                <RiCheckboxCircleLine /> Improve strategic planning and process
                optimization goals
              </span>
            </div>
            <div className="mt-18 flex gap-x-7">
              <div className="flex flex-col gap-y-4 w-[13rem]">
                <div className="flex gap-x-2 items-center text-[#0095DA]">
                  <RiMapPin2Fill />
                  <p className="text-gray-900 text-sm">Abuja</p>
                </div>
                <p className="text-xs text-gray-700 leading">
                  6th Floor, Yobe Investment House, Plot 1332, Ralph Shodeinde
                  Street, Central Business District, Fct-Abuja.
                </p>
              </div>
              <div className="flex flex-col gap-y-4 w-[13rem]">
                <div className="flex gap-x-2 items-center text-[#0095DA]">
                  <RiMapPin2Fill />
                  <p className="text-gray-900 text-sm">Kaduna</p>
                </div>
                <p className="text-xs text-gray-700 leading">
                  6th Floor, Yobe Investment House, Plot 1332, Ralph Shodeinde
                  Street, Central Business District, Fct-Abuja.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
