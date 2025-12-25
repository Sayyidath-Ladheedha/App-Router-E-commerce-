// app/products/page.tsx
import { getAllProducts } from "@/services/productService";
import SearchBar from "@/components/SearchBar";

export const metadata = {
  title: "All Products",
  description: "Browse all available products",
};

// Force runtime fetch instead of prerender
export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return <SearchBar products={products} />;
}
