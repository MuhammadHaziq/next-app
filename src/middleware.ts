import { NextResponse, type NextRequest } from "next/server";

export function middleware(request:NextRequest){
    /** Set Cookies And Headers */

    /** check Difference by uncomment below line and comment NextResponse.redirect(new URL("/", request.url)); this*/
    
    // const response = NextResponse.next()
    const response = NextResponse.redirect(new URL("/", request.url));
    const theme = response.cookies.get("theme")
    if(!theme){
        response.cookies.set("theme", "dark")
    }

    response.headers.set("custom-header", "custom-value")
    return response
    // return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
    matcher:"/profile"
}