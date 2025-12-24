// app/components/AddToCartButton.tsx
"use client";

import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { addToCart, CartItem } from "@/store/cartslice";

interface Props {
  product: Product;
}

export default function AddToCartButton({ product }: Props) {
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

    // Redirect to cart page after adding
    router.push("/cart");
  };

  return (
    <button
      onClick={handleAddToCart}
      className="btn btn-danger mt-3"
      type="button"
    >
      Add to Cart
    </button>
  );
}
