import { headers } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
    const headerList = headers()
    console.log(headerList.get("Authorization"))
    // return new Response("Profile API Route Handler")
    /** set response header in response and check in browser network response */
    return new Response("<h1>Profile API Route Handler<h1>", {
        headers:{
            "Content-type":"text/html"
        }
    })
}