"use client";

import { Card } from "@/components/Card";

import { Divider } from "@/components/Divider";

import { DataTable } from "@/components/ui/data-table-overview/DataTable";
import { columns } from "@/components/ui/data-table-overview/columns";
import { agents } from "@/data/agents/agents";
import React from "react";

type AgentType = {
  number: string;
  agent_id: string;
  full_name: string;
  account: string;
  start_date: string;
  end_date: string | null;
  email: string;
  registered: boolean;
  minutes_called: number;
  minutes_booked: number;
  ticket_generation: boolean;
};

export default function SupportDashboard() {
  // const [isOpen, setIsOpen] = React.useState(false);
  return (
    <main>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Overview Dashboard
          </h1>
          <p className="text-gray-500 sm:text-sm/6">
            Real-time monitoring and insights into your web application
          </p>
        </div>

        {/* <TicketDrawer open={isOpen} onOpenChange={setIsOpen} /> */}
      </div>
      <Divider />
      <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <dt className="text-sm font-medium text-gray-900">Ticket Sales </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            7{" "}
            <span className=" inline-flex items-center rounded-lg bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700 ring-1 ring-inset ring-orange-700/10">
              Current Week
            </span>{" "}
          </dd>
          <li className="mt-4 flex flex-col gap-x-2 text-xl font-semibold text-gray-800 text-[#0395da] leading">
            <p className="text-sm text-[#ef4444]">Amount:</p>
            <p>₦23,000</p>
          </li>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900">Ticket Sales</dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">
            27{" "}
            <span className=" inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
              Current Month
            </span>{" "}
          </dd>
          <li className="mt-4 flex flex-col gap-x-2  text-xl font-semibold text-gray-800 text-[#0395da]">
            <p className="text-sm text-[#ef4444]">Amount:</p> <p>₦123,000</p>
          </li>
        </Card>
        <Card>
          <dt className="text-sm font-medium text-gray-900">
            Available Tickets
          </dt>
          <dd className="mt-1 text-3xl font-semibold text-gray-900">247</dd>

          <ul
            role="list"
            className="mt-4 flex flex-wrap gap-x-10 gap-y-4 text-sm"
          >
            <li>
              <span className="text-base font-semibold text-gray-900">82%</span>
              <div className="flex items-center gap-2">
                <span
                  className="size-2.5 shrink-0 rounded-sm bg-green-600"
                  aria-hidden="true"
                />
                <span className="text-sm">Paid</span>
              </div>
            </li>
            <li>
              <span className="text-base font-semibold text-gray-900">13%</span>
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
      <DataTable<AgentType> data={agents} columns={columns} />
    </main>
  );
}
