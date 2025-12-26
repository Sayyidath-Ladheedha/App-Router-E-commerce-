import { getAllProducts } from "@/services/productService";
import SearchBar from "@/components/SearchBar";
import { Product } from "@/types/product";

export const metadata = {
  title: "All Products",
  description: "Browse all available products",
};

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  console.log("PRODUCTS PAGE RENDERING ON VERCEL");

  // Fetch directly from FakeStore API (no /api needed)
  const products: Product[] = await getAllProducts();

  console.log("PRODUCTS LENGTH:", products.length);
  console.log("PRODUCTS DATA:", products);

  return <SearchBar products={products} />;
}
