"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function SearchBar({ products }: Props) {
  const searchParams = useSearchParams();

  // Read query params and normalize to lowercase
  const search = searchParams.get("search")?.toLowerCase().trim() || "";
  const category = searchParams.get("category")?.toLowerCase().trim() || "";

  // Filter products based on search + category
  const filteredProducts = useMemo(() => {
    if (!search && !category) return products; // show all if no filters

    return products.filter((product) => {
      const title = product.title?.toLowerCase() || "";
      const productCategory = product.category?.toLowerCase() || "";

      const matchesSearch =
        !search || title.includes(search) || productCategory.includes(search);

      const matchesCategory = !category || productCategory === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  return (
    <div className="container py-5">
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="text-center text-muted fs-5">
            No products found
          </div>
        )}
      </div>
    </div>
  );
}
