// src/app/types.d.ts
// Define Next.js types to fix the error

import { ReactNode } from "react";

declare module "next" {
  export interface PageProps {
    params?: {
      [key: string]: string;
    };
    searchParams?: {
      [key: string]: string | string[] | undefined;
    };
    children?: ReactNode;
  }
}
