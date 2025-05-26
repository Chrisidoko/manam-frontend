import { Badge } from "./BadgeOverview";
import { Agent } from "@/data/agents/schema";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { cx } from "@/lib/utils";
import { RiUser3Fill } from "@remixicon/react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<Agent>();

export const columns = [
  columnHelper.accessor("registered", {
    enableColumnFilter: true,
    enableSorting: true,
    enableHiding: true,
    meta: {
      displayName: "Registered",
      className: "hidden",
    },
  }),
  columnHelper.accessor("full_name", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attendee" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Agent",
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <span className="font-medium text-gray-900">
            {row.original.full_name}
          </span>
          <div className="flex items-center gap-1 text-xs">
            <span className="text-gray-500">RefID </span>
            <span className="font-mono font-medium uppercase tabular-nums text-gray-900">
              {row.original.agent_id}
            </span>
            <RiUser3Fill
              className={cx(
                "size-3 shrink-0",
                row.original.registered ? "text-emerald-600" : "text-gray-400"
              )}
            />
          </div>
        </div>
      );
    },
  }),

  columnHelper.accessor("number", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Contact Information" />
    ),
    enableSorting: false,
    meta: {
      className: "text-left",
      displayName: "Contact Information",
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <span className="text-gray-900">{row.original.number}</span>
          <span className="text-xs text-gray-500">{row.original.email}</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("start_date", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Transaction" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Contact Dates",
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <span className="tabular-nums text-gray-900">
            <Badge className="px-1.5 py-0.5" variant="success">
              Paid
            </Badge>
          </span>
          <span className="text-xs tabular-nums text-gray-500">
            Date:{" "}
            {new Date(row.original.start_date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </span>
        </div>
      );
    },
  }),
  // {
  //   header: "Transaction date",
  //   accessorKey: "created",
  //   meta: {
  //     className: "text-left",
  //   },
  //   cell: ({ row }) => (
  //     <>
  //       {new Date(row.original.created).toLocaleDateString("en-GB", {
  //         day: "2-digit",
  //         month: "2-digit",
  //         year: "numeric",
  //         hour: "2-digit",
  //         minute: "2-digit",
  //       })}
  //     </>
  //   ),
  // },
  columnHelper.accessor("account", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Event" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Account",
    },
    filterFn: "arrIncludesSome",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <span className="text-gray-900">{row.original.account}</span>
          <span className="text-xs text-gray-500">Dnamaz Capital</span>
        </div>
      );
    },
  }),
  columnHelper.accessor("amount", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    enableSorting: false,
    meta: {
      className: "text-left",
      displayName: "Amount",
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <span className="text-gray-900">₦{row.original.amount}</span>
        </div>
      );
    },
  }),
  // {
  //   header: "Event Name",
  //   accessorKey: "description",
  //   meta: {
  //     className: "text-left",
  //     cell: "font-medium text-gray-900",
  //   },
  // },
  // {
  //   header: "Ref Code",
  //   accessorKey: "policyNumber",
  //   meta: {
  //     className: "text-left",
  //     cell: "font-medium",
  //   },
  // },
  // {
  //   header: "Full Name",
  //   accessorKey: "type",
  //   meta: {
  //     className: "text-left",
  //   },
  //   cell: ({ row }) => {
  //     const Icon = typeIconMapping[row.original.type];
  //     return (
  //       <div className="flex items-center gap-2">
  //         {Icon && <Icon className="size-4 shrink-0" aria-hidden="true" />}
  //         <span className="capitalize">
  //           {row.original.type.replace("-contact", "")}
  //         </span>
  //       </div>
  //     );
  //   },
  // },
  // {
  //   header: "Phone",
  //   accessorKey: "duration",
  //   meta: {
  //     className: "text-left",
  //   },
  // },
  // {
  //   header: "Status",
  //   accessorKey: "priority",
  //   meta: {
  //     className: "text-left",
  //   },
  //   cell: ({ row }) => (
  //     <Badge
  //       variant="neutral"
  //       className="gap-1.5 font-normal capitalize text-gray-700"
  //     >
  //       <span
  //         className={cx(
  //           "size-2 shrink-0 rounded-sm",
  //           "bg-gray-500",
  //           {
  //             "bg-emerald-600": row.original.priority === "Paid",
  //           },
  //           {
  //             "bg-gray-500": row.original.priority === "Unknown",
  //           },
  //           {
  //             "bg-orange-500": row.original.priority === "Pending",
  //           },
  //           {
  //             "bg-red-500": row.original.priority === "Failed",
  //           }
  //         )}
  //         aria-hidden="true"
  //       />
  //       {row.original.priority}
  //     </Badge>
  //   ),
  // },
] as ColumnDef<Agent>[];
