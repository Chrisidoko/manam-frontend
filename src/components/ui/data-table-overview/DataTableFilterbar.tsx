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
  onExport?: () => void;
  isExporting?: boolean;
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
  onExport,
  isExporting = false,
}: FilterBarProps) {
  const [searchTerm, setSearchTerm] = useState(globalFilter);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const [showSelector, setShowSelector] = useState(false);
  const [tempMonth, setTempMonth] = useState(month);
  const [tempYear, setTempYear] = useState(year);

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

  const handleExport = () => {
    if (onExport && !isExporting) {
      onExport();
    }
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

        {/* Combined Month-Year Display with Selector */}
        <div className="relative">
          <button
            type="button"
            className="text-sm font-medium border border-gray-200 rounded-md px-3 py-2 shadow-sm bg-white hover:bg-gray-50"
            onClick={() => {
              setTempMonth(month);
              setTempYear(year);
              setShowSelector(true);
            }}
          >
            {`01 ${months[month]} - ${new Date(year, month + 1, 0).getDate()} ${months[month]} ${year}`}
          </button>

          {showSelector && (
            <div className="absolute z-10 mt-2 w-64 rounded-md border bg-white shadow-lg p-4">
              <div className="flex flex-col gap-3">
                <label className="text-sm font-semibold">Select Month</label>
                <select
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                  value={tempMonth}
                  onChange={(e) => setTempMonth(parseInt(e.target.value))}
                >
                  {months.map((monthName, index) => (
                    <option key={index} value={index}>
                      {monthName}
                    </option>
                  ))}
                </select>

                <label className="text-sm font-semibold mt-2">
                  Select Year
                </label>
                <select
                  className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                  value={tempYear}
                  onChange={(e) => setTempYear(parseInt(e.target.value))}
                >
                  {yearRange.map((yearOption) => (
                    <option key={yearOption} value={yearOption}>
                      {yearOption}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => {
                    setMonth(tempMonth);
                    setYear(tempYear);
                    setShowSelector(false);
                  }}
                  className="mt-4 text-sm bg-blue-600 text-white rounded-md px-3 py-1 hover:bg-blue-700"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {onExport && (
        <Button
          className="flex items-center gap-2 text-base sm:text-sm"
          onClick={handleExport}
          disabled={isExporting}
        >
          {isExporting ? "Exporting..." : "Export"}
          <RiDownloadLine
            className="-mr-0.5 size-4 shrink-0"
            aria-hidden="true"
          />
        </Button>
      )}
    </div>
  );
}
