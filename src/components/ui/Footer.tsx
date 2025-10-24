import {
  RiArrowRightUpLine,
  RiInstagramLine,
  RiTwitterXLine,
  RiLinkedinBoxLine,
  RiFacebookCircleLine,
} from "@remixicon/react";
import Link from "next/link";
import Newsletter from "@/components/ui/newsletter";

const navigation = {
  services: [
    { name: "Taxation", href: "/services/taxation", external: false },
    {
      name: "Human Capital Development",
      href: "/services/human-capital-development",
      external: false,
    },
    {
      name: "Advisory",
      href: "/services/management-consultancy",
      external: false,
    },

    {
      name: "Corporate Recovery and Insolvency",
      href: "/services/corporate-recovery-and-insolvency",
      external: false,
    },
  ],

  product: [
    { name: "eeziTax", href: "#", external: false },
    { name: "Taxcess", href: "#", external: false },
  ],

  resources: [
    { name: "FAQs", href: "/about#faq-title", external: false },
    { name: "Blogs", href: "/blogs#blogs-page", external: false },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCtF7a5beRkR0J7zU_OTWvWQ?themeRefresh=1",
      external: true,
    },
  ],
  company: [
    { name: "About", href: "/about", external: false },
    {
      name: "Careers",
      href: "https://www.linkedin.com/company/manamprofessionals/jobs/",
      external: true,
    },
    { name: "Contact", href: "/contact", external: false },
  ],
  legal: [
    { name: "Regulatory", href: "#", external: false },
    { name: "Privacy", href: "#", external: false },
    { name: "Terms", href: "#", external: false },
  ],
};

export default function Footer() {
  return (
    <footer id="footer">
      <div className="mx-auto max-full mt-20 sm:px-30 px-3 pb-8 pt-6 md:pt-14 bg-gradient-to-tr from-[#07314a] to-[#0395da]">
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between py-6  ">
          {" "}
          <div className="hidden sm:block sm:w-1/3">
            <img
              src="/manam(s).png"
              alt="manam logo"
              className="w-32 sm:w-40 mb-10 sm:mb-0"
            />
          </div>
          <Newsletter />
        </div>
        <div className="xl:grid xl:grid-cols-3 xl:gap-20 border-t border-gray-100/40 pt-16 ">
          <div className="space-y-8">
            <div className="block sm:hidden sm:w-1/3">
              <img
                src="/manam(s).png"
                alt="manam logo"
                className="w-32 sm:w-40 mb-10 sm:mb-0"
              />
            </div>
            <p className="text-sm leading-6 text-white">
              Plot 1332, Ralph Shodeinde Street, Central Business District,
              Fct-Abuja.
            </p>

            <div className="flex space-x-6">
              <Link
                href="https://www.instagram.com/manamprofessionals/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on Instagram"
              >
                <RiInstagramLine
                  size={21}
                  className="text-white cursor-pointer hover:text-[#0095da] transition-colors"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/manamprofessionals/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Our LinkedIn"
              >
                <RiLinkedinBoxLine
                  size={21}
                  className="text-white hover:text-[#0095da] cursor-pointer"
                />
              </Link>
              <Link
                href="https://x.com/manam121212"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
              >
                <RiTwitterXLine
                  size={21}
                  className="text-white hover:text-[#0095da] cursor-pointer"
                />
              </Link>
              <Link
                href="https://web.facebook.com/manamprofessionalservices"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on facebook"
              >
                <RiFacebookCircleLine
                  size={21}
                  className="text-white hover:text-[#0095da] cursor-pointer"
                />
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-14 sm:gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              {/*return to check mobile grid*/}

              <div></div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Products
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Product"
                >
                  {navigation.product.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        href={item.href}
                        className="flex rounded-md text-sm text-white transition hover:text-[#0095da]"
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Company"
                >
                  {navigation.company.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-white transition hover:text-[#0095da]"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Resources
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links Resources"
                >
                  {navigation.resources.map((item) => (
                    <li key={item.name} className="w-fit">
                      <Link
                        className="flex rounded-md text-sm text-white transition hover:text-[#0095da]"
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-0.5 aspect-square size-3 rounded-full bg-gray-100 p-px">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Services
                </h3>
                <ul
                  role="list"
                  className="mt-6 space-y-4"
                  aria-label="Quick links services"
                >
                  {navigation.services.map((item) => (
                    <li key={item.name} className="w-fit sm:w-[220px]">
                      <Link
                        href={item.href}
                        className="flex rounded-md text-sm text-white transition hover:text-[#0095da]"
                        rel={item.external ? "noopener noreferrer" : undefined}
                      >
                        <span>{item.name}</span>
                        {item.external && (
                          <div className="ml-1 aspect-square size-3 rounded-full bg-gray-100 p-px">
                            <RiArrowRightUpLine
                              aria-hidden="true"
                              className="size-full shrink-0 text-gray-900"
                            />
                          </div>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-100/40 pt-8 sm:mt-20 sm:flex-row lg:mt-24">
          <p className="text-sm leading-5 text-white/60">
            &copy; {new Date().getFullYear()} Manam, Professional Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
