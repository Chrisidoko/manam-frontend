// api/dashboardstarts/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const authHeader = req.headers.get("Authorization");

    if (!authHeader) {
      return NextResponse.json({ error: "Missing token" }, { status: 401 });
    }

    const res = await fetch(
      "https://mana-event.onrender.com/api/dashboard-stats",
      {
        headers: {
          Accept: "application/json",
          Authorization: authHeader,
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch dashboard stats");
    }

    const json = await res.json();
    return NextResponse.json(json.data);
  } catch (error) {
    console.error("Dashboard stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch dashboard stats" },
      { status: 500 }
    );
  }
}
