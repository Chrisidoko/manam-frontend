"use client";

import { Card } from "@/components/Card";
import { Divider } from "@/components/Divider";
import { DataTable } from "@/components/ui/data-table-overview/DataTable";
import { columns } from "@/components/ui/data-table-overview/columns";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { exportToExcel } from "@/lib/exporttoexcel";

import DashboardSkeleton from "./DashboardSkeleton";
// import { headers } from "next/headers";

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

export default function SupportDashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<null | {
    ticket_sales: {
      current_week: { count: number; amount: number };
      current_month: { count: number; amount: number };
    };
    available_tickets: {
      count: number;
      percentage: { paid: string; available: string };
    };
  }>(null);

  const [tickets, setTickets] = useState<TicketType[]>([]);
  const [loadingTickets, setLoadingTickets] = useState(true);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());
  const [isExporting, setIsExporting] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // Function to fetch tickets based on month/year
  const fetchTickets = async (selectedMonth: number, selectedYear: number) => {
    const token = Cookies.get("token");
    if (!token) return;

    setLoadingTickets(true);

    // Calculate start and end dates for the selected month/year
    const startDate = new Date(selectedYear, selectedMonth, 1)
      .toISOString()
      .split("T")[0];
    const endDate = new Date(selectedYear, selectedMonth + 1, 0)
      .toISOString()
      .split("T")[0];

    try {
      const response = await fetch(
        `/api/tickets?date_start=${startDate}&date_end=${endDate}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const apiResponse = await response.json();
      console.log("Fetched ticket data:", apiResponse);

      if (apiResponse && apiResponse.success && apiResponse.data) {
        setTickets(apiResponse.data);
      } else {
        console.error("Invalid response structure:", apiResponse);
        setTickets([]);
      }
    } catch (err) {
      console.error("Ticket data fetch failed:", err);
      setTickets([]);
    } finally {
      setLoadingTickets(false);
    }
  };

  useEffect(() => {
    const token = Cookies.get("token");
    const role = Cookies.get("role");

    if (!token || role !== "superAdmin") {
      router.push("/admin");
      return;
    }

    // Fetch dashboard stats
    fetch("/api/dashboardstarts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setStats(data))
      .catch((err) => console.error("Dashboard stats fetch failed:", err));

    // Fetch tickets for current month/year
    fetchTickets(month, year);
  }, [month, year]);

  // columns to export
  const exportColumns = [
    { key: "name", header: "Name" },
    { key: "email", header: "Email" },
    { key: "ticket_id", header: "Ticket ID" },
    { key: "payment_status", header: "Payment Status" },
    { key: "date_start", header: "Registration Date" },
    { key: "event_name", header: "Event Name" },
    { key: "amount_paid", header: "Amount Paid" },
    { key: "organization", header: "Organization" },
  ];

  const handleExport = async () => {
    setIsExporting(true);

    try {
      //  API already handles filtering by month/year,
      // export all the current tickets data
      const result = exportToExcel({
        data: tickets,
        filename: `tickets_${months[month]}_${year}`,
        sheetName: "Tickets Data",
        columns: exportColumns,
      });

      if (result.success) {
        console.log(`Export successful: ${result.fileName}`);
      } else {
        console.error("Export failed:", result.error);
      }
    } catch (error) {
      console.error("Export error:", error);
    } finally {
      setIsExporting(false);
    }
  };

  // Month names for filename
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <main>
      <div className="flex flex-col gap-4 py-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Overview Dashboard
          </h1>
          <p className="text-gray-500 sm:text-sm/6">
            Real-time monitoring and insights into your web application
          </p>
        </div>
      </div>
      <Divider />

      {!stats ? (
        <DashboardSkeleton />
      ) : (
        <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <dt className="text-sm font-medium text-gray-900">Ticket Sales</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {stats.ticket_sales.current_week.count}
              <span className="inline-flex items-center rounded-lg bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10 ml-2">
                Current Week
              </span>
            </dd>
            <li className="mt-4 flex flex-col gap-x-2 text-xl font-semibold">
              <p className="text-sm text-[#ef4444]">Amount:</p>
              <p>₦{stats.ticket_sales.current_week.amount.toLocaleString()}</p>
            </li>
          </Card>

          <Card>
            <dt className="text-sm font-medium text-gray-900">Ticket Sales</dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {stats.ticket_sales.current_month.count}
              <span className="inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10 ml-2">
                Current Month
              </span>
            </dd>
            <li className="mt-4 flex flex-col gap-x-2 text-xl font-semibold">
              <p className="text-sm text-[#ef4444]">Amount:</p>
              <p>₦{stats.ticket_sales.current_month.amount.toLocaleString()}</p>
            </li>
          </Card>

          <Card>
            <dt className="text-sm font-medium text-gray-900">
              Available Tickets
            </dt>
            <dd className="mt-1 text-3xl font-semibold text-gray-900">
              {stats.available_tickets.count}
            </dd>
            <ul className="mt-4 flex flex-wrap gap-x-10 gap-y-4 text-sm">
              <li>
                <span className="text-base font-semibold text-gray-900">
                  {stats.available_tickets.percentage.paid}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-green-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm">Paid</span>
                </div>
              </li>
              <li>
                <span className="text-base font-semibold text-gray-900">
                  {stats.available_tickets.percentage.available}
                </span>
                <div className="flex items-center gap-2">
                  <span
                    className="size-2.5 shrink-0 rounded-sm bg-gray-400"
                    aria-hidden="true"
                  />
                  <span className="text-sm">Available</span>
                </div>
              </li>
            </ul>
          </Card>
        </dl>
      )}

      {loadingTickets ? (
        <div className="flex">
          {" "}
          <p className="text-gray-500 text-sm mx-auto mt-20">
            Loading tickets...
          </p>
        </div>
      ) : (
        <DataTable<TicketType>
          data={tickets}
          columns={columns}
          month={month}
          year={year}
          onMonthChange={setMonth}
          onYearChange={setYear}
          onExport={handleExport}
          isExporting={isExporting}
        />
      )}
    </main>
  );
}
