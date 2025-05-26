"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@/components/Table";
import { cx } from "@/lib/utils";
import { RankingInfo, rankItem } from "@tanstack/match-sorter-utils";
import {
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  Row,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { Filterbar } from "./DataTableFilterbar";
import { DataTablePagination } from "./DataTablePagination";
import { useMemo } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fuzzyFilter: FilterFn<any> = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  row: Row<any>,
  columnId: string,
  filterValue: string,
  addMeta: (meta: { itemRank: RankingInfo }) => void
) => {
  const itemRank = rankItem(row.getValue(columnId), filterValue);

  addMeta({ itemRank });

  return itemRank.passed;
};

interface DataTableProps<TData extends { start_date: string }> {
  columns: ColumnDef<TData>[];
  data: TData[];
}

export function DataTable<TData extends { start_date: string }>({
  columns,
  data,
}: DataTableProps<TData>) {
  const pageSize = 16;
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [month, setMonth] = useState(new Date().getMonth());
  const [year, setYear] = useState(new Date().getFullYear());

  const registeredFilterValue = columnFilters.find(
    (filter) => filter.id === "registered"
  )?.value as boolean | undefined;

  // const filteredData = data.filter((item) => {
  //   const date = new Date(item.start_date); // <- make sure item.end_date is a valid date string
  //   return date.getMonth() === month && date.getFullYear() === year;
  // });

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      if (!item.start_date) return false;

      const date = new Date(item.start_date);
      if (isNaN(date.getTime())) return false;

      const itemMonth = date.getMonth();
      const itemYear = date.getFullYear();

      // Only include items from 2024 and beyond
      if (itemYear < 2024) return false;

      return itemMonth === month && itemYear === year;
    });
  }, [data, month, year]);

  const table = useReactTable({
    data: filteredData,
    columns,
    enableColumnResizing: false,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      globalFilter,
      columnFilters,
    },
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    globalFilterFn: fuzzyFilter,
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: pageSize,
      },
    },
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div className="space-y-3">
      <Filterbar
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
        registeredOnly={Boolean(registeredFilterValue)}
        setRegisteredOnly={(checked: boolean) => {
          table.getColumn("registered")?.setFilterValue(checked || null);
        }}
        setMonth={setMonth}
        setYear={setYear}
        month={month}
        year={year}
      />

      <div className="relative overflow-hidden overflow-x-auto">
        <Table>
          <TableHead>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-gray-200">
                {headerGroup.headers.map((header) => (
                  <TableHeaderCell
                    key={header.id}
                    className={cx(
                      "whitespace-nowrap py-1 text-sm sm:text-xs",
                      header.column.columnDef.meta?.className
                    )}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </TableHeaderCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="group select-none hover:bg-[#FBFBFC]"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className={cx(
                        "relative whitespace-nowrap py-2.5 text-gray-600",
                        cell.column.columnDef.meta?.className
                      )}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} pageSize={pageSize} />
    </div>
  );
}
