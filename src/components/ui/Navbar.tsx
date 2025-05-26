"use client";

import { siteConfig } from "@/app/siteConfig";
import useScroll from "@/lib/use-scroll";
import { cx } from "@/lib/utils";
import { RiCloseLine, RiMenuLine, RiArrowDropDownLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";
import { services } from "@/app/services/services";
import { Button } from "../Button";

export function Navigation() {
  const scrolled = useScroll(15);
  const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
  const [openServicesDropdown, setOpenServicesDropdown] = React.useState(false);
  const servicesDropdownRef = React.useRef<HTMLDivElement>(null);
  const [openMobileServices, setOpenMobileServices] = React.useState(false);

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
          ? "backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5"
          : "bg-white/0"
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href={siteConfig.baseLinks.home} aria-label="Home">
            <span className="sr-only">manam-logo</span>
            <img src="/manam(s).png" alt="manam logo" className="w-28" />
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
              <Link
                className="px-2 py-1 text-gray-900"
                href={siteConfig.baseLinks.about}
              >
                About
              </Link>

              {/* Services Dropdown */}
              <div className="relative" ref={servicesDropdownRef}>
                <button
                  onClick={() => setOpenServicesDropdown(!openServicesDropdown)}
                  className="px-2 py-1 text-gray-900 hover:underline focus:outline-none"
                >
                  Services
                </button>
                {openServicesDropdown && (
                  <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-51">
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setOpenServicesDropdown(false)}
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
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
            <Button>Contact Us</Button>
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
            "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
            openMobileMenu ? "" : "hidden"
          )}
        >
          <ul className="space-y-4 font-medium text-sm">
            <li onClick={() => setOpenMobileMenu(false)}>
              <Link href={siteConfig.baseLinks.home}>Home</Link>
            </li>
            <li onClick={() => setOpenMobileMenu(false)}>
              <Link href={siteConfig.baseLinks.about}>About</Link>
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
