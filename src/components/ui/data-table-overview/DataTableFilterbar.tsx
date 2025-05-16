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
}

export function Filterbar({ globalFilter, setGlobalFilter }: FilterBarProps) {
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
