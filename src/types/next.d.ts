// src/types/next.d.ts
import "next";

// Extend Next.js types
declare module "next" {
  export interface PageProps {
    params?: Record<string, string>;
    searchParams?: Record<string, string | string[] | undefined>;
  }
}
