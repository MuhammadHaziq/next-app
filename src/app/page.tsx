import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <h1>Home Page</h1>
        <Link href={"/blog"}> Blog </Link>
        <Link href={"/product"}> Product </Link>
      </div>
    </main>
  );
}
