import Link from "next/link";

export default function Product() {
  return (
    <div className="flex flex-col">
      <h1>Product Page</h1>
      <h4><Link href={'/product/1'} className="text-blue-600 visited:text-purple-600">Product 1</Link></h4>
      <h4><Link href={'/product/2'} className="text-blue-600 visited:text-purple-600">Product 2</Link></h4>
      {/** Click On Link And After That Click Broswer back Buton And Check Replace Functionality */}
      <h4><Link href={'/product/3'} replace className="text-blue-600 visited:text-purple-600">Product 3</Link></h4>
      <h4><Link href={'/'} className="text-blue-600 visited:text-purple-600">Home</Link></h4>
      </div>
  );
}
