"use client";

import React, { useState } from "react";

const SignIn: React.FC = () => {
  const [mobile, setMobile] = useState<string>("");

  const handleContinue = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Continue with:", mobile);
  };

  return (
    /* Overlay */
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1000 }}
    >
      {/* Modal */}
      <div
        className="bg-white rounded-3 shadow-lg p-4 text-center"
        style={{ width: "350px" }}
      >
        <h2 className="mb-4">Welcome to BuYwaY</h2>

        <form onSubmit={handleContinue} className="d-flex flex-column gap-3">
          <input
            type="text"
            className="form-control"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />

          <button
            type="submit"
            className="btn text-white fw-bold"
            style={{ backgroundColor: "rgb(209, 132, 132)" }}
          >
            CONTINUE
          </button>
        </form>

        <p className="small text-muted mt-3">
          By Signing In, I agree to{" "}
          <a href="#" className="text-decoration-none text-primary">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-decoration-none text-primary">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
