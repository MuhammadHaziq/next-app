import Link from "next/link";

export default function Home() {
  return (
      <div className="flex flex-col">
        <h1>Home Page</h1>
        <Link href={"/blog"} className="text-blue-600 visited:text-purple-600"> Blog </Link>
        <Link href={"/product"} className="text-blue-600 visited:text-purple-600"> Product </Link>
      </div>
  );
}
 