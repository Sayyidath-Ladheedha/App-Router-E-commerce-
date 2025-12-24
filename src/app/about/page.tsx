import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        {/* Heading */}
        <h1 className="text-center fw-bold mb-3">About Us</h1>
        <p className="text-center text-muted fs-5 mb-5">
          We are committed to providing high-quality products with fast delivery and trusted service.
        </p>

        {/* Features */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-lg-3 col-md-6">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/535/535239.png"
                alt="Support"
                className="mx-auto mb-3"
                style={{ width: 60 }}
              />
              <h5 className="fw-semibold">24/7 Support</h5>
              <p className="text-muted small">
                Our team is always ready to assist you anytime.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-lg-3 col-md-6">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/743/743131.png"
                alt="Delivery"
                className="mx-auto mb-3"
                style={{ width: 60 }}
              />
              <h5 className="fw-semibold">Fast Delivery</h5>
              <p className="text-muted small">
                Quick and secure delivery right to your doorstep.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-lg-3 col-md-6">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1029/1029183.png"
                alt="Trust"
                className="mx-auto mb-3"
                style={{ width: 60 }}
              />
              <h5 className="fw-semibold">Trusted by Customers</h5>
              <p className="text-muted small">
                Thousands of customers trust our quality and service.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-lg-3 col-md-6">
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1828/1828970.png"
                alt="Quality"
                className="mx-auto mb-3"
                style={{ width: 60 }}
              />
              <h5 className="fw-semibold">Premium Quality</h5>
              <p className="text-muted small">
                We ensure only the best products reach you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
