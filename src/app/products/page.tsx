import { getAllProducts } from "@/services/productService";
import SearchBar from "@/components/SearchBar";
import { Product } from "@/types/product";

export const metadata = {
  title: "All Products",
  description: "Browse all available products",
};

export const dynamic = "force-dynamic";

export default async function ProductsPage() {
  let products: Product[] = [];

  try {
    products = await getAllProducts();
  } catch (error) {
    console.error(error);
  }

  return <SearchBar products={products} />;
}
