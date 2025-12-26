import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com/products";

export async function getOfferProduct(): Promise<Product[]> {
  try {
    const res = await fetch(BASE_URL, {
      cache: "no-store",
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status);
      return [];
    }

    const data = await res.json();

    if (!Array.isArray(data)) {
      console.error("Invalid data:", data);
      return [];
    }

    return data
      .filter((product: Product) => product.price < 500)
      .slice(0, 16);
  } catch (error) {
    console.error("Error fetching offer products:", error);
    return [];
  }
}
