import React from "react";
import {
  //   RiMailLine,
  //   RiPhoneLine,
  //   RiMapPinLine,
  RiArrowRightLine,
  RiMessage3Line,
} from "@remixicon/react";

export default function ContactUsCard() {
  return (
    <div className="mt-[20vh] max-w-6xl mx-auto">
      {/* Contact Card */}
      <div className="bg-white/80 rounded-2xl shadow-md overflow-hidden max-w-5xl mx-auto">
        <div className="w-full">
          {/* Left Side - Contact Info */}
          {/* <div className="md:col-span-2 bg-gradient-to-br from-[#0095da] to-[#007acc] p-8 md:p-10 text-white">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/20 rounded-lg">
                  <RiMessage3Line size={24} />
                </div>
                <h2 className="text-2xl font-bold">Get in Touch</h2>
              </div>

              <p className="text-blue-100 mb-8">
                We'd love to hear from you. Our team is ready to help answer any
                questions you may have.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <RiPhoneLine size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-blue-100 text-sm">
                      +234 (0) 803 456 7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <RiMailLine size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-blue-100 text-sm">info@cbsystem.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-white/20 rounded-lg flex-shrink-0">
                    <RiMapPinLine size={20} />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Location</p>
                    <p className="text-blue-100 text-sm">Abuja, FCT, Nigeria</p>
                  </div>
                </div>
              </div>
            </div> */}

          {/* Right Side - CTA */}
          <div className="md:col-span-3 p-8 md:p-10 flex flex-col justify-center items-center text-center">
            <div className="max-w-xl">
              <div className="mb-2 sm:mb-6">
                <div className="inline-flex p-4 bg-blue-100 rounded-full mb-4">
                  <RiMessage3Line size={32} className="text-[#0095da]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  Find Out More About Our Product
                </h3>
                <p className="text-sm sm:text-lg text-gray-600 mb-8">
                  Fill out our contact form and we'll get back to you as soon as
                  possible. We're here to help with any questions or concerns.
                </p>
              </div>

              <a
                href="/#contact-form"
                className="inline-flex items-center justify-center gap-2 bg-[#0095da] text-white font-semibold px-4 py-3 sm:py-4 sm:px-8 rounded-lg hover:bg-[#007acc] transition-all duration-200 shadow-lg hover:shadow-xl group"
              >
                Contact Us
                <RiArrowRightLine
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <p className="text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6">
                Our team typically responds within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
