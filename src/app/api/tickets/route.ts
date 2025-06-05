// app/api/ticket/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("Authorization");

  if (!authHeader) {
    return NextResponse.json({ error: "Missing token" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const dateStart = searchParams.get("date_start");
  const dateEnd = searchParams.get("date_end");

  if (!dateStart || !dateEnd) {
    return NextResponse.json(
      { error: "Missing date parameters" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://mana-event.onrender.com/api/ticket/by-date?date_start=${dateStart}&date_end=${dateEnd}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: authHeader,
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch tickets" },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
