// Skeleton loader
import React from "react";

export default function DashboardSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="rounded-xl border border-gray-200 p-4 space-y-4 shadow-sm bg-white"
          >
            <div className="h-4 w-1/2 bg-gray-300 rounded" />
            <div className="h-8 w-1/3 bg-gray-300 rounded" />
            <div className="h-4 w-1/4 bg-gray-200 rounded mt-4" />
            <div className="h-4 w-1/2 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}
