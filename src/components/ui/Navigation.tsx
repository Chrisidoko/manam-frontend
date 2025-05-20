"use client";

import { TabNavigation, TabNavigationLink } from "@/components/TabNavigation";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { DropdownUserProfile } from "./UserProfile";

function Navigation() {
  const pathname = usePathname();
  return (
    <div className="shadow-s sticky top-0 z-20 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 pt-3">
        <div>
          <img src="/manam(s).png" alt="manam logo" className="w-28" />
        </div>
        <div className="flex h-[42px] flex-nowrap gap-1">
          {/* <Notifications /> */}
          <DropdownUserProfile />
        </div>
      </div>
      <TabNavigation className="mt-5">
        <div className="mx-auto flex w-full max-w-7xl items-center px-6">
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={pathname === "/admin/overview"}
          >
            <Link href="/admin/overview">Overview</Link>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={pathname === "/admin/events"}
          >
            <Link href="/admin/events">Events</Link>
          </TabNavigationLink>
          <TabNavigationLink
            className="inline-flex gap-2"
            asChild
            active={pathname === "/admin/blogs"}
          >
            <Link href="/admin/blogs">Blogs</Link>
          </TabNavigationLink>
        </div>
      </TabNavigation>
    </div>
  );
}

export { Navigation };
