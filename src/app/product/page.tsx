import Link from "next/link";

export default function Product() {
  return (
    <>
      <h1>Product Page</h1>
      <h4><Link href={'/product/1'}>Product 1</Link></h4>
      <h4><Link href={'/product/2'}>Product 2</Link></h4>
      {/** Click On Link And After That Click Broswer back Buton And Check Replace Functionality */}
      <h4><Link href={'/product/3'} replace>Product 3</Link></h4>
      <h4><Link href={'/'}>Home</Link></h4>
    </>
  );
}
