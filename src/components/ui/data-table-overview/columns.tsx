import { Badge } from "./BadgeOverview";
import { DataTableColumnHeader } from "./DataTableColumnHeader";
import { cx } from "@/lib/utils";
import { RiUser3Fill } from "@remixicon/react";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";

// Updated type to match API response
type TicketType = {
  _id: string;
  event: {
    ticket_sold: number;
    _id: string;
    event_creator: string;
    event_name: string;
    event_date: string;
    event_location: string;
    event_description: string;
    event_organizer: string;
    price: number;
    event_image: string;
    event_type: string;
    space_available: number;
    event_status: string;
    slug: string;
    event_id: string;
    date_created: string;
    __v: number;
  };
  amount_paid: number;
  payment_status: string;
  transaction_reference: string;
  event_name: string;
  email: string;
  name: string;
  organization: string;
  date_start: string;
  ticket_id: string;
  date_paid: string;
  __v: number;
};

const columnHelper = createColumnHelper<TicketType>();

export const columns = [
  columnHelper.accessor("payment_status", {
    enableColumnFilter: true,
    enableSorting: true,
    enableHiding: true,
    meta: {
      displayName: "Payment Status",
      className: "hidden",
    },
  }),
  columnHelper.accessor("name", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Attendee" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Attendee",
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <span className="font-medium text-gray-900">
            {row.original.name || "N/A"}
          </span>
          <div className="flex items-center gap-1 text-xs">
            <span className="text-gray-500">Ticket ID </span>
            <span className="font-mono font-medium uppercase tabular-nums text-gray-900">
              {row.original.ticket_id || "N/A"}
              {/* {row.original.ticket_id?.slice(-8) || "N/A"} */}
            </span>
            <RiUser3Fill
              className={cx(
                "size-3 shrink-0",
                row.original.payment_status === "paid"
                  ? "text-emerald-600"
                  : "text-gray-400"
              )}
            />
          </div>
        </div>
      );
    },
  }),

  columnHelper.accessor("email", {
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
          <span className="text-gray-900">{row.original.email || "N/A"}</span>
          <span className="text-xs text-gray-500">
            {row.original.organization || "No organization"}
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("date_paid", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Status" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Payment Status",
    },
    cell: ({ row }) => {
      const isPaid = row.original.payment_status === "paid";
      const isPending = row.original.payment_status === "pending";

      return (
        <div className="flex flex-col gap-1">
          <span className="tabular-nums text-gray-900">
            <Badge
              className="px-1.5 py-0.5"
              variant={isPaid ? "success" : isPending ? "warning" : "error"}
            >
              {row.original.payment_status === "paid"
                ? "Paid"
                : row.original.payment_status === "pending"
                  ? "Pending"
                  : "Failed"}
            </Badge>
          </span>
          <span className="text-xs tabular-nums text-gray-500">
            Date:{" "}
            {row.original.date_paid
              ? new Date(row.original.date_paid).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })
              : "N/A"}
          </span>
        </div>
      );
    },
  }),

  columnHelper.accessor("event_name", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Event" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Event",
    },
    filterFn: "arrIncludesSome",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <span className="text-gray-900">
            {row.original.event_name || "N/A"}
          </span>
          <span className="text-xs text-gray-500">
            {row.original.event?.event_organizer || "Unknown Organizer"}
          </span>
        </div>
      );
    },
  }),
  columnHelper.accessor("amount_paid", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    enableSorting: true,
    meta: {
      className: "text-left",
      displayName: "Amount",
    },
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <span className="text-gray-900">
            ₦{row.original.amount_paid?.toLocaleString() || "0"}
          </span>
        </div>
      );
    },
  }),
] as ColumnDef<TicketType>[];
