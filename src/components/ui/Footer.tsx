import {
  RiArrowRightUpLine,
  RiInstagramLine,
  RiTwitterLine,
  RiLinkedinBoxLine,
  RiFacebookCircleLine,
} from "@remixicon/react";
import Link from "next/link";

const navigation = {
  product: [
    { name: "Advisory", href: "#", external: false },
    { name: "Training", href: "#", external: false },
    { name: "Tax & Assurance", href: "#", external: false },
  ],
  resources: [
    { name: "FAQs", href: "/pricing#faq-title", external: false },
    { name: "Blogs", href: "/pricing#faq-title", external: false },
    { name: "YouTube", href: "#", external: true },
  ],
  company: [
    { name: "About", href: "/about", external: false },
    { name: "Careers", href: "#", external: true },
    { name: "Contact", href: "#", external: false },
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
      <div className="mx-auto max-w-6xl px-3 pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-20">
          <div className="space-y-8">
            <img
              src="/manam(s).png"
              alt="manam logo"
              className="w-32 sm:w-40"
            />

            <p className="text-sm leading-6 text-gray-600">
              6th Floor, Yobe Investment House, Plot 1332, Ralph Shodeinde
              Street, Central Business District, Fct-Abuja.
            </p>
            <div className="flex space-x-6">
              <RiInstagramLine
                size={21}
                className="text-gray-500 cursor-pointer"
              />
              <RiLinkedinBoxLine
                size={21}
                className="text-gray-500 cursor-pointer"
              />
              <RiTwitterLine
                size={21}
                className="text-gray-500 cursor-pointer"
              />
              <RiFacebookCircleLine
                size={21}
                className="text-gray-500 cursor-pointer"
              />
            </div>
            <div></div>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-14 sm:gap-8 md:grid-cols-2 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/*return to check mobile grid*/}
              <div></div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
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
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900"
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
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
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
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900"
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
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
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
                        className="flex rounded-md text-sm text-gray-500 transition hover:text-gray-900"
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
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 sm:mt-20 sm:flex-row lg:mt-24">
          <p className="text-sm leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} Manam, Professional Services. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
