import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products?limit=12",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "User-Agent": "Mozilla/5.0",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error("Offers API failed:", res.status);
      return NextResponse.json([], { status: 500 });
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("Invalid offers data");
      return NextResponse.json([], { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Offers route error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
