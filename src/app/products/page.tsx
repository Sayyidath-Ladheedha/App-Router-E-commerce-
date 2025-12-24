// app/products/page.tsx
import { getAllProducts } from "@/services/productService";
import ClientProductGrid from "@/components/SearchBar";

export const metadata = {
  title: "All Products",
  description: "Browse all available products",
};

export default async function ProductsPage() {
  const products = await getAllProducts();

  return <ClientProductGrid products={products} />;
}
