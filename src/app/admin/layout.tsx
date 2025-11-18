"use client";

import { Navigation } from "@/components/ui/Navigation";
import { usePathname } from "next/navigation";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // This needs to be client component
  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}

// Create a client component to use hooks

function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/admin" || pathname === "/admin/";

  return (
    <div className="bg-white min-h-screen">
      {!isLoginPage && <Navigation />}
      <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6">{children}</div>
    </div>
  );
}
