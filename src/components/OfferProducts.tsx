"use client"; // ⚠️ MUST be top

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { getOfferProduct } from "@/services/offerService";
import { useDispatch } from "react-redux";
import { addToCart, CartItem } from "@/store/cartslice";
import Image from "next/image";

export default function OfferProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getOfferProduct();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    const cartItem: CartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.thumbnail,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  if (!products || products.length === 0) {
    return (
      <section className="container py-5">
        <div className="text-center text-muted fs-5">No offers available</div>
      </section>
    );
  }

  return (
    <section className="container py-5">
      <div className="row g-4">
        {products.map((product) => {
          const starWidth = (product.rating / 5) * 100;

          return (
            <div key={product.id} className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="card-img-top p-3"
                    style={{ objectFit: "contain", cursor: "pointer" }}
                  />
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                    {Math.floor(Math.random() * 30) + 10}% OFF
                  </span>
                </div>

                <div className="card-body d-flex flex-column">
                  <h6 className="card-title">{(product.title ?? "").slice(0, 50)}...</h6>
                  <p className="fw-bold mb-2 text-danger" style={{ fontSize: "1.5rem" }}>
                    ₹{product.price}
                  </p>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="fw-semibold">{product.rating?.toFixed(1) ?? "0.0"}</span>
                    <div className="position-relative" style={{ fontSize: "18px" }}>
                      <div
                        className="position-absolute top-0 start-0 overflow-hidden text-warning"
                        style={{ width: `${starWidth}%`, whiteSpace: "nowrap" }}
                      >
                        ★★★★★
                      </div>
                      <div className="text-secondary opacity-50">★★★★★</div>
                    </div>
                    <small className="text-muted">({product.stock ?? 0})</small>
                  </div>
                  <button onClick={() => handleAddToCart(product)} className="btn btn-danger mt-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
