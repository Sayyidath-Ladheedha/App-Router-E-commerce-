'use client';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types
export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

 export interface CartState {
  cartItems: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

// Load cart from localStorage safely
const getInitialCart = (): CartState => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem("cartState");
    return savedCart
      ? JSON.parse(savedCart)
      : { cartItems: [], totalQuantity: 0, totalAmount: 0 };
  }
  return { cartItems: [], totalQuantity: 0, totalAmount: 0 };
};

const initialState: CartState = getInitialCart();

// Update localStorage helper
const updateLocalStorage = (state: CartState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cartState", JSON.stringify(state));
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const product = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === product.id);

      if (existingItem) existingItem.quantity += 1;
      else state.cartItems.push({ ...product, quantity: 1 });

      state.totalQuantity = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
      state.totalAmount = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      updateLocalStorage(state);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      state.totalQuantity = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
      state.totalAmount = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      updateLocalStorage(state);
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;

      state.totalQuantity = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
      state.totalAmount = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      updateLocalStorage(state);
    },

    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cartItems.find((i) => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) item.quantity -= 1;
        else state.cartItems = state.cartItems.filter((i) => i.id !== action.payload);
      }

      state.totalQuantity = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
      state.totalAmount = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

      updateLocalStorage(state);
    },

    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      updateLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
