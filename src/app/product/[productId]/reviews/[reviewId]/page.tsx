import { notFound } from "next/navigation";
export default function ProductReviews({
  params,
}: {
  params: { productId: number; reviewId: number };
}) {
  {
    if (params?.reviewId > 200) {
      return notFound();
    }
  }
  return (
    <>
      <h1>
        {" "}
        Review Id {params.reviewId} of Product {params.productId}
      </h1>
    </>
  );
}
