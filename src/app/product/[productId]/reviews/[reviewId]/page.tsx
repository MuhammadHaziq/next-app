export default function ProductReviews({
  params,
}: {
  params: { productId: number; reviewId: number };
}) {
  return (
    <>
      <h1>
        {" "}
        Review Id {params.reviewId} of Product {params.productId}
      </h1>
    </>
  );
}
