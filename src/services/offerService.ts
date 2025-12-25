
import { Product } from "@/types/product";

export async function getOfferProduct(): Promise<Product[]> {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products?limit=12",
      {
        
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      console.error("getOfferProduct failed:", response.status);
      return []; // NEVER throw in UI data fetching
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      console.error("getOfferProduct returned invalid data");
      return [];
    }

    return data as Product[];
  } catch (err) {
    console.error("getOfferProduct runtime error:", err);
    return []; // SAFE FALLBACK
  }
}
