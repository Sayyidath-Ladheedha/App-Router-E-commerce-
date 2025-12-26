import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) return NextResponse.json([]);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching products in route.ts:", error);
    return NextResponse.json([]);
  }
}




