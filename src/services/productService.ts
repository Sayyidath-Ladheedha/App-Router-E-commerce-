import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com/products";

export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(BASE_URL, { cache: "no-store" });
    if (!res.ok) {
      console.error("Failed to fetch products, status:", res.status);
      return [];
    }
    const data: Product[] = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  if (!id || isNaN(id)) return null;
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data: Product = await res.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
