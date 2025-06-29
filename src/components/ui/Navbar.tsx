"use client";

import { siteConfig } from "@/app/siteConfig";
import useScroll from "@/lib/use-scroll";
import { cx } from "@/lib/utils";
import { RiCloseLine, RiMenuLine, RiArrowDropDownLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";
import { services } from "@/app/services/services";
import { Button } from "../Button";

const company = [
  {
    name: "About Us",
    path: "/about",
    shortdesc: "Discover our story and what drives us.",
  },
  {
    name: "Company profile",
    path: "/companyprofile",
    shortdesc: "Learn about our mission, vision, and values.",
  },
  {
    name: "Our Team",
    path: "/#",
    shortdesc: "Get to know the experts who make it happen.",
  },
];

export function Navigation() {
  const scrolled = useScroll(15);
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
  const [openServicesDropdown, setOpenServicesDropdown] = React.useState(false);
  const servicesDropdownRef = React.useRef<HTMLDivElement>(null);
  const [openMobileServices, setOpenMobileServices] = React.useState(false);
  const [openMobileCompany, setOpenMobileCompany] = React.useState(false);

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
          ? "backdrop-blur-nav max-w-4xl border-gray-100 bg-white/80 shadow-xl shadow-black/5"
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
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              <Link
                className="px-2 py-1 text-gray-900"
                href={siteConfig.baseLinks.home}
              >
                Home
              </Link>
              {/* <Link
                className="px-2 py-1 text-gray-900"
                href={siteConfig.baseLinks.about}
              >
                Company
              </Link> */}
              {/* Company Dropdown */}
              <div className="relative group">
                <button className=" flex gap-1 px-2 py-1 text-gray-900 hover:underline focus:outline-none">
                  Company <RiArrowDropDownLine />
                </button>

                <ul className="absolute left-0 p-4 mt-2 w-68 bg-white shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {company.map((company) => (
                    <li key={company.name}>
                      <Link
                        href={company.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:rounded-lg hover:ml-5 hover:bg-[#e5eef2] transition-all duration-300 ease-in-out"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-[#07314a]">
                            {company.name}
                          </span>
                          <span className="text-xs text-gray-500 font-light">
                            {company.shortdesc}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className=" flex gap-1 px-2 py-1 text-gray-900 hover:underline focus:outline-none">
                  Services <RiArrowDropDownLine />
                </button>

                <ul className="absolute left-0 mt-2 p-4 w-160 bg-white shadow-lg rounded-lg z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 grid grid-cols-2 gap-x-2 gap-y-1">
                  {services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className="block px-4 py-4 hover:bg-[#e5eef2] hover:rounded-lg hover:ml-5 transition-all duration-300 ease-in-out"
                      >
                        <div className="flex flex-col gap-1">
                          <span className="text-sm text-[#07314a]">
                            {service.name}
                          </span>
                          <span className="text-xs text-gray-500 font-light">
                            {service.shortdesc}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                className="px-2 py-1 text-gray-900"
                href={siteConfig.baseLinks.events}
              >
                Events
              </Link>
              <Link
                className="px-2 py-1 text-gray-900"
                href={siteConfig.baseLinks.blogs}
              >
                Blog
              </Link>
            </div>
          </nav>

          {/* Desktop Contact Button */}
          <Link href={siteConfig.baseLinks.contact}>
            <Button className="hidden h-10 font-semibold md:flex">
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
            {/* <li onClick={() => setOpenMobileMenu(false)}>
              <Link href={siteConfig.baseLinks.about}>About</Link>
            </li> */}
            <li>
              <button
                onClick={() => setOpenMobileCompany(!openMobileCompany)}
                className="w-full flex items-center text-left"
              >
                About <RiArrowDropDownLine />
              </button>
              {openMobileCompany && (
                <ul className="mt-2 ml-4 space-y-2 text-sm">
                  {company.map((company) => (
                    <li
                      key={company.name}
                      onClick={() => {
                        setOpenMobileCompany(false);
                        setOpenMobileMenu(false);
                      }}
                    >
                      <Link href={company.path}>{company.name}</Link>
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

            {/* <li onClick={() => setOpenMobileMenu(false)}>
              <Link href={siteConfig.baseLinks.services}>Services</Link>
            </li> */}
            <li onClick={() => setOpenMobileMenu(false)}>
              <Link href={siteConfig.baseLinks.events}>Events</Link>
            </li>
            <li onClick={() => setOpenMobileMenu(false)}>
              <Link href={siteConfig.baseLinks.blogs}>Blog</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
