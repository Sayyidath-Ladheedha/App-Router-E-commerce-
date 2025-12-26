import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Fakestore API failed:", res.status);
      return NextResponse.json([], { status: 500 });
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("Invalid data format from Fakestore");
      return NextResponse.json([], { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Route error:", error);
    return NextResponse.json([], { status: 500 });
  }
}
