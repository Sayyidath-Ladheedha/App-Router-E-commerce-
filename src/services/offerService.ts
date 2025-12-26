import { Product } from "@/types/product";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

export async function getOfferProduct(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/api/offers`, { cache: "no-store" });
    if (!res.ok) return [];
    const data: Product[] = await res.json();
    if (!Array.isArray(data)) return [];
    return data;
  } catch (error) {
    console.error("Error fetching offer products:", error);
    return [];
  }
}
