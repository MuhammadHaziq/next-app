export default function ProductDetail({
  params,
}: {
  params: { productId: number };
}) {
  return (
    <>
      <h1> Product Detail {params.productId}</h1>
    </>
  );
}
