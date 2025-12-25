
"use client";

import { Product } from "@/types/product";
import { CartItem, addToCart } from "@/store/cartslice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();

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

  const starWidth = ((product.rating?.rate ?? 0) / 5) * 100;

  return (
    <div className="col-md-3">
      <div className="card h-100 shadow-sm">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="card-img-top p-3"
            style={{ objectFit: "contain", cursor: "pointer" }}
          />
        </Link>
        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{(product.title ?? "").slice(0, 50)}...</h6>
          <p className="card-text">{(product.description ?? "").slice(0, 50)}...</p>
          <p className="fw-bold text-danger" style={{ fontSize: "1.5rem" }}>
            ₹{product.price}
          </p>
          <div className="d-flex align-items-center gap-2 mb-2">
            <span className="fw-semibold">{product.rating?.rate?.toFixed(1) ?? "0.0"}</span>
            <div className="position-relative" style={{ fontSize: "18px", lineHeight: "1" }}>
              <div
                className="position-absolute top-0 start-0 overflow-hidden text-warning"
                style={{ width: `${starWidth}%`, whiteSpace: "nowrap" }}
              >
                ★★★★★
              </div>
              <div className="text-secondary opacity-50">★★★★★</div>
            </div>
            <small className="text-muted">({product.rating?.count ?? 0})</small>
          </div>
          <button onClick={handleAddToCart} className="btn btn-danger mt-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
