import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request:NextRequest) {
    const searchQuery = request.nextUrl.searchParams;
    const query = searchQuery.get("query")
    const filterData = query ? comments?.filter(comment => {return comment.text.includes(query)}) : comments
    return  Response.json(filterData)
}

export async function POST(request:Request) {
    const comment = await request.json();
    comments.push({
        id:comments?.length + 1,
        text:comment?.text
    })

    return new Response(JSON.stringify(comments), {
        headers:{
            "Content-Type":"application/json"
        },
        status:201
    })
}