"use client"
/** Test After Remove use client */
export default function Error({error, reset}:{error:Error, reset:()=>void}){
    return <>{error?.message} <br/> <button onClick={reset}> Try Again</button></>
}