"use client";

import { siteConfig } from "@/app/siteConfig";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSubMenu,
  DropdownMenuSubMenuContent,
  DropdownMenuSubMenuTrigger,
  DropdownMenuTrigger,
} from "@/components/DropdownMenu";
import { cx, focusRing } from "@/lib/utils";
import {
  RiArrowRightUpLine,
  RiComputerLine,
  RiMoonLine,
  RiSunLine,
} from "@remixicon/react";
// import { useTheme } from "next-themes";
import React from "react";

function DropdownUserProfile() {
  const [mounted, setMounted] = React.useState(false);
  //   const { theme, setTheme } = useTheme();
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            aria-label="open settings"
            className={cx(
              focusRing,
              "group rounded-full p-1 hover:bg-gray-100 data-[state=open]:bg-gray-100"
            )}
          >
            <span
              className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white text-xs font-medium text-gray-700"
              aria-hidden="true"
            >
              CC
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="!min-w-[calc(var(--radix-dropdown-menu-trigger-width))]"
        >
          <DropdownMenuLabel>chris.central@gmail.com</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuSubMenu></DropdownMenuSubMenu>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />

          <DropdownMenuGroup>
            <DropdownMenuItem>
              {/* <a href={siteConfig.baseLinks.login} className="w-full">
                Sign out
              </a> */}
              <a className="w-full">Sign out</a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export { DropdownUserProfile };
