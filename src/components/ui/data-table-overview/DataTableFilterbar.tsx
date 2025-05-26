"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { RiDownloadLine } from "@remixicon/react";
import { useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface FilterBarProps {
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  registeredOnly: boolean;
  setRegisteredOnly: (checked: boolean) => void;
  month: number;
  setMonth: (month: number) => void;
  year: number;
  setYear: (year: number) => void;
}

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

const currentYear = new Date().getFullYear();
const yearRange = Array.from({ length: 4 }, (_, i) => currentYear - i);

export function Filterbar({
  globalFilter,
  setGlobalFilter,
  registeredOnly,
  setRegisteredOnly,
  month,
  setMonth,
  year,
  setYear,
}: FilterBarProps) {
  const [searchTerm, setSearchTerm] = useState(globalFilter);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const debouncedSetGlobalFilter = useDebouncedCallback((value) => {
    setGlobalFilter(value);
  }, 300);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    debouncedSetGlobalFilter(value);
  };

  const handleClear = () => {
    setSearchTerm("");
    setGlobalFilter("");
    searchInputRef.current?.focus();
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-6 rounded-lg py-6">
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-fit">
        <Input
          ref={searchInputRef}
          className="w-full sm:w-96"
          type="search"
          placeholder="Search all columns..."
          value={searchTerm ?? ""}
          onChange={handleSearchChange}
        />
        {searchTerm && (
          <Button
            variant="ghost"
            onClick={handleClear}
            className="border border-gray-200 px-2.5 font-semibold text-blue-500 sm:border-none sm:py-1"
          >
            Clear
          </Button>
        )}
        <div className="flex items-center gap-2">
          {/* Month Selector */}
          <select
            className="border border-gray-200 rounded-md px-2 py-2 text-sm shadow-sm"
            value={month}
            onChange={(e) => setMonth(parseInt(e.target.value))}
          >
            {months.map((monthName, index) => (
              <option key={index} value={index}>
                {monthName}
              </option>
            ))}
          </select>

          {/* Year Selector */}
          <select
            className="border border-gray-200 rounded-md px-2 py-2 text-sm shadow-sm"
            value={year}
            onChange={(e) => setYear(parseInt(e.target.value))}
          >
            {yearRange.map((yearOption) => (
              <option key={yearOption} value={yearOption}>
                {yearOption}
              </option>
            ))}
          </select>
        </div>
      </div>

      <Button className="flex items-center gap-2 text-base sm:text-sm">
        Export
        <RiDownloadLine
          className="-mr-0.5 size-4 shrink-0"
          aria-hidden="true"
        />
      </Button>
    </div>
  );
}
