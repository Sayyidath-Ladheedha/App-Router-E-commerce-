import Image from "next/image";
import { notFound } from "next/navigation";
import { getProductById } from "@/services/productService";
import AddToCartButton from "@/components/AddToCartButton";

type Props = {
  params: Promise<{ id: string }>;
};

export const dynamic = "force-dynamic";

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params; // ✅ REQUIRED
  const productId = Number(id);

  if (!productId || Number.isNaN(productId)) {
    notFound();
  }

  let product;
  try {
    product = await getProductById(productId);
  } catch {
    notFound();
  }

  return (
    <section className="container py-5">
      <div className="row">
        <div className="col-md-6 text-center">
          <Image
            src={product.image}
            alt={product.title}
            width={350}
            height={350}
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <div className="col-md-6">
          <h2>{product.title}</h2>
          <p>{product.description}</p>

          <h4 className="text-danger fw-bold" style={{ fontSize: "1.6rem" }}>
            ₹{product.price}
          </h4>

          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
}
