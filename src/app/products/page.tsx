import { getAllProducts } from "@/services/productService";
import SearchBar from "@/components/SearchBar";
import { Product } from "@/types/product";

export const metadata = {
  title: "All Products",
  description: "Browse all available products",
};

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  const products: Product[] = await getAllProducts();
  return <SearchBar products={products} />;
}
