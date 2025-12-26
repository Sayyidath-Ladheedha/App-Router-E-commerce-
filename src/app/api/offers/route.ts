import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products?limit=12");
    if (!res.ok) {
      console.error("Failed to fetch offer products:", res.status);
      return NextResponse.json([]);
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in route.ts fetching offer products:", error);
    return NextResponse.json([]);
  }
}
