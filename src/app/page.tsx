import HomeCarousel from "../components/HomeCarousal";
import OfferProducts from "@/components/OfferProducts";
import type { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Home",
  description: "Shop the best products online",
};

export default function HomePage() {
  return (
    <>
      <HomeCarousel />
      <h1 className="text-center text-danger">Welcome to BuYwaY</h1>
      <p className="text-center">Best products at the best price</p>
      <OfferProducts />
    </>
  );
}
