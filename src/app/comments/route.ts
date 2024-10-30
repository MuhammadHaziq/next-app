import { comments } from "./data";

export async function GET() {
    return  Response.json(comments)
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