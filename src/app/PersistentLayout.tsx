"use client";

import { usePathname } from "next/navigation";
import { Navigation } from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

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
  ];

  const showLayout = !excludedRoutes.includes(pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      {showLayout && <Navigation />}

      {/* Main content area */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      {showLayout && <Footer />}
    </div>
  );
}
