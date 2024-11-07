import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request:NextRequest){
    const headerList = headers()
    
    /** First Approach To Get Cookie */
    const cookie = request.cookies.get("theme")
    console.log(cookie)
    
    /** Second Approach To Set Cookie */
    cookies().set("resultPerPage", "20")
    console.log(cookies().get("resultPerPage"))

    console.log(headerList.get("Authorization"))
    // return new Response("Profile API Route Handler")
    /** set response header in response and check in browser network response */
    return new Response("<h1>Profile API Route Handler<h1>", {
        headers:{
            "Content-type":"text/html",
            /** First Approach To Set Cookie */
            "Set-cookie":"theme=dark"

        }
    })
}