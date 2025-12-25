'use client';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '@/store/cartslice';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const [mounted, setMounted] = useState(false);

  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setMounted(true);
  }, []);

  
  if (!mounted) {
    return null; 
  }

  const handleIncrease = (id: number) => dispatch(increaseQuantity(id));
  const handleDecrease = (id: number) => dispatch(decreaseQuantity(id));
  const handleRemove = (id: number) => dispatch(removeFromCart(id));
  const handleClear = () => dispatch(clearCart());

  // 🛒 Empty cart UI
  if (cart.cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h2>Your Cart is Empty</h2>
        <Link href="/">
          <button className="btn btn-primary mt-3">
            Go Back to Products
          </button>
        </Link>
      </div>
    );
  }

  // 🛒 Cart items UI
  return (
    <div className="container py-5">
      <h2 className="mb-4">Your Cart</h2>

      <table className="table align-middle">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th style={{ width: '160px' }}>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cart.cartItems.map((item) => (
            <tr key={item.id}>
              <td className="d-flex align-items-center">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                />
                <span className="ms-2">{item.title}</span>
              </td>

              <td>₹{item.price}</td>

              <td>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-sm btn-secondary me-2"
                    onClick={() => handleDecrease(item.id)}
                  >
                    −
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    className="btn btn-sm btn-secondary ms-2"
                    onClick={() => handleIncrease(item.id)}
                  >
                    +
                  </button>
                </div>
              </td>

              <td>₹{item.price * item.quantity}</td>

              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4>
          Total Amount:{' '}
          <span className="text-danger"> ₹{Number(cart.totalAmount).toFixed(2)}</span>
        </h4>

        <div>
          <button
            className="btn btn-warning me-2"
            onClick={handleClear}
          >
            Clear Cart
          </button>

          <button className="btn btn-success">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
