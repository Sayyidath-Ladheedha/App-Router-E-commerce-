import React from "react";

const Contact = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container text-center" style={{ maxWidth: "1100px" }}>
        <h1 className="fw-bold mb-2" style={{ fontSize: "36px" }}>
          Contact Us
        </h1>
        <p className="text-muted mb-5">
          Reach out to us anytime. We're always here to support you.
        </p>

        <div className="row g-4">
          {[
            {
              img: "https://cdn-icons-png.flaticon.com/512/597/597177.png",
              title: "Phone Support",
              text: "+91 98765 43210",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
              title: "Email Us",
              text: "support@shopnow.com",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/535/535239.png",
              title: "24/7 Help Desk",
              text: "We respond quickly to all customer queries.",
            },
            {
              img: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
              title: "Our Location",
              text: "Kochi, Kerala, India",
            },
          ].map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="card h-100 border-0 shadow-sm p-4 text-center">
                <img
                  src={item.img}
                  alt={item.title}
                  className="mx-auto mb-3"
                  style={{ width: "55px" }}
                />
                <h5 className="mb-2">{item.title}</h5>
                <p className="text-muted small">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
