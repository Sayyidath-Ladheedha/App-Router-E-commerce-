"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

export default function Navbar() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const cartCount = useSelector(
    (state: RootState) => state.cart.totalQuantity
  );

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = searchText.trim();
    if (!query) return;

    router.push(`/products?search=${encodeURIComponent(query)}`);
    setSearchText("");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
      <div className="container-fluid px-5">
        {/* Logo */}
        <Link
          href="/"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <Image
            src="/images/shopping-cart.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <span className="fw-bold text-danger fs-4">BuYwaY</span>
        </Link>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="mx-auto position-relative"
          style={{ width: "420px" }}
        >
          <input
            type="search"
            className="form-control rounded-pill ps-4"
            placeholder="Search products..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <FaSearch
            className="position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
            style={{ pointerEvents: "none" }}
          />
        </form>

        {/* Right Menu */}
        <ul className="navbar-nav ms-auto d-flex flex-row gap-3 align-items-center">
          <li className="nav-item">
            <Link href="/" className="nav-link text-muted">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/products" className="nav-link text-muted">
              Products
            </Link>
          </li>

          <li className="nav-item">
            <Link
              href="/products?category=electronics"
              className="nav-link text-muted"
            >
              Electronics
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/contact" className="nav-link text-muted">
              Contact Us
            </Link>
          </li>

          <li className="nav-item">
            <Link
              href="/signin"
              className="btn btn-danger rounded-pill px-3"
            >
              Sign In
            </Link>
          </li>

          <li className="nav-item position-relative">
            <Link href="/cart" className="nav-link">
              <FaShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
