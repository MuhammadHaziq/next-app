import { comments } from "../data";

export async function GET(request:Request, {params}:{params:{id:string}}){
    const comment = comments.find(comment => comment.id === parseInt(params?.id))
    return Response.json(comment);
}

export async function PATCH(request:Request, {params}:{params:{id:string}}){
    const body = await request.json();
    comments.map(comment => {
        if(comment.id === parseInt(params?.id)){
            return {...comment, text:body?.text}
        }
        return comment
    })
    return new Response(JSON.stringify(comments), {
        headers:{
            "Conent-Type":"application/json"
        }, status:200    });
}

export async function DELETE(request:Request, {params}:{params:{id:string}}){
    comments.filter(comment => {
         comment.id !== parseInt(params?.id)
    })
    return new Response(JSON.stringify(comments), {
        headers:{
            "Conent-Type":"application/json"
        }, status:200    });
}