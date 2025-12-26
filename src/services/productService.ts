import { Product, ProductsResponse } from "@/types/product";

const BASE_URL = "https://dummyjson.com/products";

const fetchOptions: RequestInit = {
  method: "GET",
  headers: { Accept: "application/json", 
     "User-Agent": "Next.js Server",  },
  cache: "no-store", 
};


export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(BASE_URL, fetchOptions);

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status);
      return [];
    }

    const data: ProductsResponse = await res.json();
    return Array.isArray(data.products) ? data.products : [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  if (!id || isNaN(id)) return null;

  try {
    const res = await fetch(`${BASE_URL}/${id}`, fetchOptions);

    if (!res.ok) {
      console.error("Failed to fetch product:", res.status);
      return null;
    }

    const product: Product = await res.json();
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
