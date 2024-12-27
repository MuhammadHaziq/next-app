import { redirect } from "next/navigation";
import { comments } from "../data";
import { type NextRequest } from "next/server";

export async function GET(request:NextRequest, {params}:{params:{id:string}}){
    const {id} = params
    if(parseInt(id) > comments?.length){
        redirect("/comments")
    }
    const comment = comments.find(comment => comment.id === parseInt(id))
    return Response.json(comment);
}

export async function PATCH(request:NextRequest, {params}:{params:{id:string}}){
    const body = await request.json();
    const {id} = params
    const updateComments = comments.map(comment => {
        if(comment.id === parseInt(id)){
            return {...comment, text:body?.text}
        }
        return comment
    })
    return new Response(JSON.stringify(updateComments), {
        headers:{
            "Conent-Type":"application/json"
        }, status:200    });
}

export async function DELETE(request:NextRequest, {params}:{params:{id:string}}){
    const {id} = params

    const updateComments =  comments.filter(comment => {
       return  (comment.id) !== parseInt(id)
    })

    return new Response(JSON.stringify(updateComments), {
        headers:{
            "Conent-Type":"application/json"
        }, status:200    });
}