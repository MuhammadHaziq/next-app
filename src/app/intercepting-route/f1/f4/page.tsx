import Card from "@/components/card";
import Link from "next/link";

export default function F4(){
    return <> <Card> F4 Page
           <div className="flex flex-col"> <Link href="/intercepting-route/f1/f3"> F3 Page</Link>
           <Link href="/about"> About Page</Link>
           </div></Card></>
}