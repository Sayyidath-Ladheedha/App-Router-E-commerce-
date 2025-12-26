"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { Product } from "@/types/product";
import { addToCart, CartItem } from "@/store/cartslice";

// Directly fetch from FakeStore API
async function getProductById(id: number): Promise<Product | null> {
  if (!id || isNaN(id)) return null;

  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, { cache: "no-store" });
    if (!res.ok) return null;
    const data: Product = await res.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const dispatch = useDispatch();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || isNaN(Number(id))) {
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      const data = await getProductById(Number(id));
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-5">Loading...</p>;
  }

  if (!product) {
    return (
      <div className="alert alert-danger text-center mt-5">
        Product not found
      </div>
    );
  }

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    dispatch(addToCart(cartItem));
    router.push("/cart");
  };

  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <Image
            src={product.image}
            alt={product.title}
            width={350}
            height={350}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>

          <h4 className="text-danger fw-bold" style={{ fontSize: "1.6rem" }}>
            ₹{product.price.toFixed(2)}
          </h4>

          <button onClick={handleAddToCart} className="btn btn-danger mt-3">
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
