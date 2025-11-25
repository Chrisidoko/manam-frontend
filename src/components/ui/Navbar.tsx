"use client";

import { siteConfig } from "@/app/siteConfig";
import useScroll from "@/lib/use-scroll";
import { cx } from "@/lib/utils";
import { RiCloseLine, RiMenuLine, RiArrowDropDownLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";
import { services } from "@/app/services/services";
// import MultiLevelDropdown from "@/components/ui/navsubmenu";
import { Button } from "../Button";

// Your products data
const products = [
  {
    slug: "eeZitax",
    name: "eeZitax",

    // shortdesc:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    slug: "taxcess",
    name: "Taxcess ",

    // shortdesc:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  // ... more products
];

const industries = [
  {
    id: 1,
    name: "Business & Finance",
    slug: "business-finance",
    subText:
      "Strategic solutions for sustainable growth and financial excellence.",
  },

  {
    id: 2,
    name: "Entrepreneurs & Innovators",
    slug: "entrepreneurs-innovators",
    subText:
      "From vision to value — enabling businesses to scale with confidence.",
  },
  {
    id: 3,
    name: "People & Society",
    slug: "people-society",
    subText:
      "Strengthening institutions that shape lives and communities. → Learn how we create impact where it matters most.",
  },
  {
    id: 4,
    name: "Service & Experience",
    slug: "service-experience",
    subText:
      "Optimizing services to deliver impact, efficiency, and customer trust. → Explore tailored solutions for your sector.",
  },
  {
    id: 5,
    name: "Energy & Natural Resources Sector",
    slug: "energy-and-natural-resources-sector",
    subText:
      "Driving progress through reliable expertise in power and resources. → collaborate with us to fuel sustainable growth.",
  },
];

const resource = [
  {
    name: "Blogs",
    path: "/blogs",
    shortdesc: "Access our latest research and professional perspectives.",
  },
  {
    name: "Events",
    path: "/events",
    shortdesc: "Register for our Seminars and workshops",
  },
  {
    name: "Gallery",
    path: "/gallery",
    shortdesc: "Get to know us, see our events and office environment.",
  },
];

export function Navigation() {
  const scrolled = useScroll(15);
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
  const [openServicesDropdown, setOpenServicesDropdown] = React.useState(false);
  const servicesDropdownRef = React.useRef<HTMLDivElement>(null);
  const [openMobileServices, setOpenMobileServices] = React.useState(false);
  const [openMobileIndustries, setOpenMobileIndustries] = React.useState(false);
  const [openMobileResource, setOpenMobileResource] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = () => {
      setOpenMobileMenu(false);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setOpenServicesDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={cx(
        "fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        openMobileMenu ? "h-auto pb-6" : "h-16",
        scrolled || openMobileMenu
          ? "backdrop-blur-nav max-w-6xl border-gray-100 bg-white/80 shadow-xl shadow-black/5"
          : "bg-white/0"
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">manam-logo</span>
            <img
              src="/manam(s).png"
              alt="manam logo"
              className="w-30 sm:w-36 "
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:w-[80vw] ml-[13vw] md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link
                className="px-2 py-1 text-gray-900"
                href={siteConfig.baseLinks.home}
              >
                Home
              </Link>

              <Link
                className="px-2 py-1 text-gray-900"
                href={siteConfig.baseLinks.about}
              >
                About Us
              </Link>
              {/* Industries Dropdown */}
              <div className="relative group">
                <button className=" flex gap-1 px-2 py-1 text-gray-900 cursor-pointer hover:underline focus:outline-none">
                  Industries <RiArrowDropDownLine />
                </button>

                <ul className="absolute left-0 p-4 mt-2 w-168 bg-white shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="grid grid-cols-2 gap-2 max-h-90 overflow-y-auto">
                    {industries.map((industries) => (
                      <Link
                        key={industries.name}
                        href={`/industries/${industries.slug}`}
                        className="block px-4 py-3 hover:bg-[#e0f2fe]/40 rounded-lg transition-all duration-200 group/item border border-transparent hover:border-blue-100"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-black font-medium group-hover/item:text-[#0395da] transition-colors">
                            {industries.name}
                          </span>
                          <span className="text-xs text-gray-600 font-light leading-relaxed">
                            {industries.subText}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </ul>
              </div>

              {/* Resource Dropdown */}
              <div className="relative group">
                <button className=" flex gap-1 px-2 py-1 text-gray-900 cursor-pointer hover:underline focus:outline-none">
                  Products <RiArrowDropDownLine />
                </button>

                <ul className="absolute left-0 p-4 mt-2 w-68 bg-white shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {products.map((products) => (
                    <li key={products.name}>
                      <Link
                        href={`/products/${products.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:rounded-lg hover:bg-[#e0f2fe]/40  group/item transition-all duration-300 ease-in-out border border-transparent hover:border-blue-100"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-black group-hover/item:text-[#0395da] ">
                            {products.name}
                          </span>
                          {/* <span className="text-xs text-gray-900 font-light">
                            {products.shortdesc}
                          </span> */}
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Multi-level dropdown
              <MultiLevelDropdown services={services} products={products} /> */}

              {/* Services Dropdown */}
              <div className="relative group">
                <button className=" flex gap-1 px-2 py-1 text-gray-900 cursor-pointer hover:underline focus:outline-none">
                  Services <RiArrowDropDownLine />
                </button>

                <ul className="absolute right-0 p-4 mt-2 w-168 bg-white shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="grid grid-cols-2 gap-2 max-h-90 overflow-y-auto">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block px-4 py-3 hover:bg-[#e0f2fe]/40 rounded-lg transition-all duration-200 group/item border border-transparent hover:border-blue-100"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-black font-medium group-hover/item:text-[#0395da] transition-colors">
                            {service.name}
                          </span>
                          <span className="text-xs text-gray-600 font-light leading-relaxed">
                            {service.shortdesc}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </ul>
              </div>

              {/* Resource Dropdown */}
              <div className="relative group">
                <button className=" flex gap-1 px-2 py-1 text-gray-900 cursor-pointer hover:underline focus:outline-none">
                  Resources <RiArrowDropDownLine />
                </button>

                <ul className="absolute left-0 p-4 mt-2 w-68 bg-white shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {resource.map((resource) => (
                    <li key={resource.name}>
                      <Link
                        href={resource.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:rounded-lg hover:bg-[#e0f2fe]/40  group/item transition-all duration-300 ease-in-out border border-transparent hover:border-blue-100"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-black group-hover/item:text-[#0395da] ">
                            {resource.name}
                          </span>
                          <span className="text-xs text-gray-900 font-light">
                            {resource.shortdesc}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Desktop Contact Button */}
          <Link href={siteConfig.baseLinks.contact}>
            <Button className="hidden cursor-pointer h-10 font-semibold md:flex">
              Contact Us
            </Button>
          </Link>

          {/* Mobile Menu Toggle */}
          <div className="flex gap-x-2 md:hidden">
            <Link href={siteConfig.baseLinks.contact}>
              <Button>Contact Us</Button>
            </Link>
            <Button
              onClick={() => setOpenMobileMenu(!openMobileMenu)}
              variant="light"
              className="aspect-square p-2"
            >
              {openMobileMenu ? (
                <RiCloseLine aria-hidden="true" className="size-5" />
              ) : (
                <RiMenuLine aria-hidden="true" className="size-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          className={cx(
            "mt-4 mb-1 flex text-lg ease-in-out will-change-transform md:hidden",
            openMobileMenu ? "" : "hidden"
          )}
        >
          <ul className="space-y-5 font-medium text-sm">
            <li onClick={() => setOpenMobileMenu(false)}>
              <Link href={siteConfig.baseLinks.home}>Home</Link>
            </li>
            <li onClick={() => setOpenMobileMenu(false)}>
              <Link href={siteConfig.baseLinks.about}>About</Link>
            </li>

            <li>
              <button
                onClick={() => setOpenMobileIndustries(!openMobileIndustries)}
                className="w-full flex items-center text-left"
              >
                Industries <RiArrowDropDownLine />
              </button>
              {openMobileIndustries && (
                <ul className="mt-2 ml-4 space-y-2 text-sm">
                  {industries.map((industries) => (
                    <li
                      key={industries.slug}
                      onClick={() => {
                        setOpenMobileIndustries(false);
                        setOpenMobileMenu(false);
                      }}
                    >
                      <Link href={`/industries/${industries.slug}`}>
                        {industries.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => setOpenMobileServices(!openMobileServices)}
                className="w-full flex items-center text-left"
              >
                Services <RiArrowDropDownLine />
              </button>
              {openMobileServices && (
                <ul className="mt-2 ml-4 space-y-2 text-sm">
                  {services.map((service) => (
                    <li
                      key={service.slug}
                      onClick={() => {
                        setOpenMobileServices(false);
                        setOpenMobileMenu(false);
                      }}
                    >
                      <Link href={`/services/${service.slug}`}>
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <button
                onClick={() => setOpenMobileResource(!openMobileResource)}
                className="w-full flex items-center text-left"
              >
                Resources <RiArrowDropDownLine />
              </button>
              {openMobileResource && (
                <ul className="mt-2 ml-4 space-y-2 text-sm">
                  {resource.map((resource) => (
                    <li
                      key={resource.name}
                      onClick={() => {
                        setOpenMobileResource(false);
                        setOpenMobileMenu(false);
                      }}
                    >
                      <Link href={resource.path}>{resource.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* <li onClick={() => setOpenMobileMenu(false)}>
              <Link href={siteConfig.baseLinks.services}>Services</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
