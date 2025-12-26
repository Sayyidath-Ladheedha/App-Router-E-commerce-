import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com/products";

export async function getOfferProduct(): Promise<Product[]> {
  try {
    const res = await fetch(BASE_URL, { cache: "no-store" });
    if (!res.ok) return [];

    const data: Product[] = await res.json();
    if (!Array.isArray(data)) return [];

    //filter offer products onder<500
    const offers = data.filter((product) => product.price < 500);

    
    return offers.slice(0, 16);
  } catch (error) {
    console.error("Error fetching offer products:", error);
    return [];
  }
}
