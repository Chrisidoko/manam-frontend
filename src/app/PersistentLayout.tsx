"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { RiWhatsappLine } from "@remixicon/react";

export default function PersistentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Routes that should NOT show Navigation or Footer
  const excludedRoutes = [
    "/admin",
    "/admin/overview",
    "/admin/blogs",
    "/admin/events",
    "/admin/user",
  ];

  const showLayout = !excludedRoutes.includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      {showLayout && <Navigation />}

      {/* Main content area */}
      <main className="flex-grow">{children}</main>

      {showLayout && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-green-500 text-white w-fit px-3 py-2 hover:bg-green-600 cursor-pointer rounded-2xl shadow-lg">
            <a
              href="https://wa.me/2349160422222?text=Hi%20there%2C%20I%20have%20a%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span>Chat on WhatsApp</span>
              <RiWhatsappLine className="text-white text-xl" />
            </a>
          </div>
        </div>
      )}

      {/* Footer */}
      {showLayout && <Footer />}
    </div>
  );
}
