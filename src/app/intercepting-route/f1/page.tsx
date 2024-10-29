import Card from "@/components/card";
import Link from "next/link";

export default function F1(){
    return (<>
        <Card> F1 Page
            <div> <Link href="/intercepting-route/f1/f2"> F2 Page</Link></div>
        </Card>
    </>)
}