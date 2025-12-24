import { getOfferProduct} from "@/services/offerService";
import { Product } from '@/types/product';
import Image from "next/image";
import Link from "next/link";

export default async function OfferProducts() {
  const products: Product[] = await getOfferProduct();

  return (
    <section className="container py-5">
      <div className="row g-4">
        {products.map((product) => {
          // ⭐ calculate PER PRODUCT
          const starWidth = ((product.rating?.rate ?? 0) / 5) * 100; //?. → safely access rate even if rating is missing,?? 0 → provide 0 as a default when the value is null or undefined.

          return (
            <div key={product.id} className="col-md-3">
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="card-img-top p-3"
                    style={{ objectFit: "contain" }}
                  />
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                    {Math.floor(Math.random() * 30) + 10}% OFF
                  </span>
                </div>

                <div className="card-body d-flex flex-column">
                   <h6 className="card-title">  {(product.title ?? "").slice(0, 50)}...</h6>
                  {/* <p className="text-muted small">{product.category}</p> */}
                <p className="fw-bold mb-2 text-danger" style={{ fontSize: '1.5rem' }}>
  ₹{product.price}
</p>


                  {/* ⭐ Rating section */}
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="fw-semibold">
                      {product.rating?.rate?.toFixed(1) ?? "0.0"} {/*Shows the rating rounded to 1 decimal (like 4.235 -> 4.2) if it exists, otherwise shows 0.0. */}
                      
                    </span>

                    <div
                      className="position-relative"
                      style={{ fontSize: "18px", lineHeight: "1" }}
                    >
                      {/* Filled stars */}
                      <div
                        className="position-absolute top-0 start-0 overflow-hidden text-warning"
                        style={{ width: `${starWidth}%`, whiteSpace: "nowrap" }} //Width fills the stars, nowrap keeps them straight.
                      >
                        ★★★★★
                      </div>

                      {/* Empty stars */}
                      <div className="text-secondary opacity-50">
                        ★★★★★
                      </div>
                    </div>

                    <small className="text-muted">
                      ({product.rating?.count ?? 0}) {/*Shows number of reviews if available, otherwise shows 0. */}
                    </small>
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="btn btn-danger text-white mt-auto"
                  >
                   Add to cart
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
