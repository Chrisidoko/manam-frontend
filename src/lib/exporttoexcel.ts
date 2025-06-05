// utils/excelExport.ts
import * as XLSX from "xlsx";

interface ExportToExcelOptions {
  data: any[];
  filename?: string;
  sheetName?: string;
  columns?: { key: string; header: string }[];
}

export const exportToExcel = ({
  data,
  filename = "export",
  sheetName = "Sheet1",
  columns,
}: ExportToExcelOptions) => {
  try {
    // If columns are specified, map the data to only include those columns
    let processedData = data;

    if (columns && columns.length > 0) {
      processedData = data.map((row) => {
        const processedRow: any = {};
        columns.forEach((col) => {
          // Handle nested properties and format dates/values
          let value = row[col.key];

          // Format dates nicely
          if (col.key.includes("date") || col.key.includes("created_at")) {
            value = value ? new Date(value).toLocaleDateString() : "";
          }

          // Format payment status
          if (col.key === "payment_status") {
            value = value === "paid" ? "Paid" : "Pending";
          }

          processedRow[col.header] = value || "";
        });
        return processedRow;
      });
    }

    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Convert data to worksheet
    const worksheet = XLSX.utils.json_to_sheet(processedData);

    // Auto-width columns
    if (columns) {
      const colWidths = columns.map((col) => {
        const maxLength = Math.max(
          col.header.length,
          ...processedData.map((row) => String(row[col.header] || "").length)
        );
        return { width: Math.min(maxLength + 2, 50) };
      });
      worksheet["!cols"] = colWidths;
    }

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

    // Generate the Excel file and trigger download
    const timestamp = new Date().toISOString().split("T")[0];
    const fileName = `${filename}_${timestamp}.xlsx`;

    XLSX.writeFile(workbook, fileName);

    return { success: true, fileName };
  } catch (error) {
    console.error("Error exporting to Excel:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
