/** check build page and reload to see difference after remove below line */
export const dynamic = "force-dynamic";

/** By Default Get request is Cache In Next Js */
export async function GET(){
    return Response.json({
        time:new Date().toLocaleString()
    })
}