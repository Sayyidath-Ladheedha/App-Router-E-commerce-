import { Product, ProductsResponse } from "@/types/product";

const BASE_URL = "https://dummyjson.com/products";

const fetchOptions: RequestInit = {
  method: "GET",
  headers: { Accept: "application/json",  "User-Agent": "Next.js Server",  },
  cache: "no-store",
};

export async function getOfferProduct(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}?limit=100`, {
      ...fetchOptions,
      next: { revalidate: 0 }, // for Next.js ISR behavior
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status);
      return [];
    }

    const data: ProductsResponse = await res.json();

    if (!Array.isArray(data.products)) {
      console.error("Invalid data:", data);
      return [];
    }

    // Filter for offers (example: price < 500) and take first 16
    return data.products
      .filter((product) => product.price < 500)
      .slice(0, 16);
  } catch (error) {
    console.error("Error fetching offer products:", error);
    return [];
  }
}
