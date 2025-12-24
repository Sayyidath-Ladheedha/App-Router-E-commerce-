import { Product } from "@/types/product";

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 },
    });

    if (!res.ok) return [];

    const text = await res.text();
    if (!text) return [];

    return JSON.parse(text) as Product[];
  } catch (err) {
    console.error("getAllProducts error:", err);
    return [];
  }
}

// Get single product
export async function getProductById(id: number): Promise<Product | null> {
  try {
    if (!id || isNaN(id)) return null;

    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 120 },
    });

    if (!res.ok) return null;

    const text = await res.text();
    if (!text) return null;

    return JSON.parse(text) as Product;
  } catch (err) {
    console.error("getProductById error:", err);
    return null;
  }
}
