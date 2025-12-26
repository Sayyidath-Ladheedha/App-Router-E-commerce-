// services/productService.ts
import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${BASE_URL}/products`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return []; // fallback so page still renders
  }
}

// Get single product
export async function getProductById(id: number): Promise<Product | null> {
  if (!id || isNaN(id)) return null;
  try {
    const res = await fetch(`${BASE_URL}/products/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch product");
    return res.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
