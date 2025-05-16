// src/app/types.d.ts
// Define Next.js types to fix the error

import "@tanstack/react-table";
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

// below available on TanstackTable.d.ts
// declare module "@tanstack/table-core" {
//   interface ColumnMeta<TData extends RowData, TValue> {
//     className?: string;
//     displayName?: string;
//     // any other custom meta properties you needed
//   }
// }
