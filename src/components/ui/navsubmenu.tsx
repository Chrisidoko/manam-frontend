import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiArrowDropDownLine } from "@remixicon/react";

// Types for your data
interface Service {
  slug: string;
  name: string;
  shortdesc: string;
}

interface Product {
  slug: string;
  name: string;
  shortdesc: string;
}

interface MultiLevelDropdownProps {
  services: Service[];
  products: Product[];
}

const EnhancedMultiLevelDropdown: React.FC<MultiLevelDropdownProps> = ({
  services,
  products,
}) => {
  const [activeSubmenu, setActiveSubmenu] = useState<string>("products");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems = [
    {
      id: "products",
      label: "Products",
      data: products,
      href: "/products",
      description: `${products.length} products available`,
    },
    {
      id: "services",
      label: "Services",
      data: services,
      href: "/services",
      description: `${services.length} services offered`,
    },
  ];

  // Reset to first item when dropdown opens
  useEffect(() => {
    if (isOpen) {
      setActiveSubmenu("products");
    }
  }, [isOpen]);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex gap-1 px-2 py-1 text-gray-900 cursor-pointer hover:underline focus:outline-none">
        Discover{" "}
        <RiArrowDropDownLine
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Combined Container */}
      <div
        className={`absolute left-0 mt-2 bg-white shadow-xl rounded-lg z-50 transition-all duration-300 flex overflow-hidden ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2"
        }`}
      >
        {/* Left Menu Items */}
        <div className="w-44 bg-gray-50/50">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onMouseEnter={() => setActiveSubmenu(item.id)}
              className={`w-full text-left px-4 py-4 transition-all duration-200 border-r-2 ${
                index === 0 ? "rounded-tl-lg" : ""
              } ${index === menuItems.length - 1 ? "rounded-bl-lg" : ""} ${
                activeSubmenu === item.id
                  ? "bg-white text-black font-medium border-blue-500 shadow-sm"
                  : "text-gray-700 hover:bg-white/70 border-transparent"
              }`}
            >
              <div className="flex flex-col gap-1">
                <span className="text-sm">{item.label}</span>
                {/* <span className="text-xs text-gray-500">{item.description}</span> */}
              </div>
            </button>
          ))}
        </div>

        {/* Right Submenu Content */}
        <div className="w-[28rem] p-6 bg-white">
          {/* Products Submenu */}
          {activeSubmenu === "products" && (
            <div className="animate-fadeIn">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-gray-800">
                  Our Products
                </h3>
                {/** <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {products.length} items
                </span>*/}
              </div>

              <div className="grid grid-cols-1 gap-1 max-h-80 overflow-y-auto">
                {products.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="block px-4 py-3 hover:bg-[#e0f2fe] rounded-lg transition-all duration-200 group/item border border-transparent hover:border-blue-100"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-black font-medium group-hover/item:text-blue-600 transition-colors">
                        {product.name}
                      </span>
                      <span className="text-xs text-gray-600 font-light leading-relaxed">
                        {product.shortdesc}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Services Submenu */}
          {activeSubmenu === "services" && (
            <div className="animate-fadeIn">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold text-gray-800">
                  Our Services
                </h3>
                {/**   <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {services.length} items
                </span>*/}
              </div>

              <div className="grid grid-cols-1 gap-2 max-h-90 overflow-y-auto">
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block px-4 py-3 hover:bg-[#e0f2fe] rounded-lg transition-all duration-200 group/item border border-transparent hover:border-blue-100"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm text-black font-medium group-hover/item:text-blue-600 transition-colors">
                        {service.name}
                      </span>
                      <span className="text-xs text-gray-600 font-light leading-relaxed">
                        {service.shortdesc}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Footer with View All Link */}
          <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
            <Link
              href={activeSubmenu === "products" ? "/products" : "/services"}
              className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 hover:underline"
            >
              View All {activeSubmenu === "products" ? "Products" : "Services"}{" "}
              →
            </Link>
            {/**<span className="text-xs text-gray-400">
              Updated recently
            </span>**/}
          </div>
        </div>
      </div>

      {/* Add fadeIn animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default EnhancedMultiLevelDropdown;
