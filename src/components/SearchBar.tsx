"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ClientProductGrid({ products }: Props) {
  const searchParams = useSearchParams();

  // Read query params
  const search = searchParams.get("search")?.toLowerCase() || "";
  const category = searchParams.get("category")?.toLowerCase() || "";

  // Filter products based on search + category
  const filteredProducts = useMemo(() => {
    // If no search or category, return all products
    if (!search && !category) return products;

    return products.filter((product) => {
      const matchesSearch =
        !search ||
        product.title.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search);

      const matchesCategory =
        !category || product.category.toLowerCase() === category;

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
