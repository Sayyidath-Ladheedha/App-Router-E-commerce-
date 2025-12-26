import { Product } from "@/types/product";

const BASE_URL = "https://fakestoreapi.com";

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

// Get single product
export async function getProductById(id: number): Promise<Product> {
  if (!id || isNaN(id)) {
    throw new Error("Invalid product id");
  }

  const res = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}
