import { Product } from "@/components/product";
import { Review } from "@/components/reviews";
import { Suspense } from "react";

export default function Streaming() {
  return (
    <>
      {/* See difference without suspense*/}
      <h1>Streaming</h1>
      <Suspense fallback={<h1>Loading Product...</h1>}>
        <Product />
      </Suspense>
      <Suspense fallback={<h1>Loading Reviews...</h1>}>
        <Review />
      </Suspense>
    </>
  );
}
