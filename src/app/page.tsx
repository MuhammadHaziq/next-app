import Link from "next/link";

export default function Home() {
  const navLinks = [{name:"Blog", link:"/blog"}, {name:"Product", link:"/product"}]
  return (
      <div className="flex flex-col">
        <h1>Home Page</h1>
        {navLinks.map((navLink, index) => (
        <Link href={navLink.link} className="text-blue-600 visited:text-purple-600" key={index}> {navLink.name} </Link>
          ))}
      </div>
  );
}
 