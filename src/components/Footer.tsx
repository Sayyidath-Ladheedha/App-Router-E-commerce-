"use client";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 text-center">
      {/* Row 1: Logo + Brand */}
      <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
        <Image
          src="/images/shopping-cart.png"
          alt="BuyWay"
          width={50}
          height={50}
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <span
          className="fw-bold"
          style={{
            fontSize: "26px",
            letterSpacing: "1px",
            color: "rgb(209, 132, 132)",
          }}
        >
          BuYwaY
        </span>
      </div>

      {/* Row 2: Contact */}
      <div className="d-flex justify-content-center align-items-center gap-3 mb-3 small">
        <span>📞 +91 98765 43210</span>
        <span className="text-secondary">|</span>
        <span>📧 support@buyway.com</span>
      </div>

      {/* Row 3: Social Icons */}
      <div className="d-flex justify-content-center gap-4 mb-3">
        <FaFacebookF className="fs-5 footer-icon" />
        <FaInstagram className="fs-5 footer-icon" />
        <FaTwitter className="fs-5 footer-icon" />
      </div>

      {/* Row 4 */}
      <div className="small text-white-50">
        © 2025 BuyWay. All Rights Reserved.
      </div>

      {/* Hover effect (NO client component needed) */}
      <style jsx global>{`
        .footer-icon {
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .footer-icon:hover {
          color: #f5c542;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
