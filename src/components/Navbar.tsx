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
  const [menuOpen, setMenuOpen] = useState(false);
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
    setMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3" style={{ zIndex: 1030, position: "relative" }}>
      <div className="container-fluid px-3 px-md-5">
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <Image src="/images/shopping-cart.png" alt="Logo" width={40} height={40} />
          <span className="fw-bold text-danger fs-4">BuYwaY</span>
        </Link>

        {/* Hamburger toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links + search */}
        <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="mx-auto my-2 my-lg-0 position-relative flex-grow-1"
            style={{ maxWidth: "100%" }}
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

          {/* Right menu */}
          <ul className="navbar-nav ms-auto d-flex flex-column flex-lg-row gap-2 gap-lg-3 align-items-lg-center mt-3 mt-lg-0">
            <li className="nav-item">
              <Link href="/" className="nav-link text-muted py-2" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className="nav-link text-muted py-2" onClick={() => setMenuOpen(false)}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link text-muted py-2" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-muted py-2" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/signin"
                className="btn btn-danger rounded-pill px-3 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item position-relative mt-2 mt-lg-0">
              <Link href="/cart" className="nav-link position-relative py-2" onClick={() => setMenuOpen(false)}>
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
      </div>
    </nav>
  );
}
