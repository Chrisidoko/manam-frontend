import Link from "next/link";
import { services } from "./services";
import { Badge } from "@/components/Badge";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen mt-20 sm:mt-36 max-w-6xl mx-auto">
      {/* Sidebar */}
      <aside className="w-fit sm:w-64 pr-0 sm:pr-6 border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 ml-6 sm:ml-0 hidden sm:block">
        <Badge>Our Services</Badge>

        <ul className="mt-6 space-y-3">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="text-sm font-semibold hover:bg-[#0395da] hover:p-2 hover:rounded-lg hover:text-white block max-w-[200px] truncate transition-all duration-500 ease-in-out"
              >
                {service.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pt-4 md:pt-0 md:pl-6">{children}</main>
    </div>
  );
}
