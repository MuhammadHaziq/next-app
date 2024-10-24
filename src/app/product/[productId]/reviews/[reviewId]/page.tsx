"use client"
import { notFound } from "next/navigation";

function getRandomNumber(num:number){
  return Math.floor(Math.random() * num)
}

export default function ProductReviews({
  params,
}: {
  params: { productId: number; reviewId: number };
}) {
  const errorNumber = getRandomNumber(2)
  if(errorNumber === 1){
    /** Test After Remove The Error.tsx file */
    throw new Error("Error in loading review")
  }
  
    if (params?.reviewId > 200) {
      return notFound();
    }
  
  return (
    <>
      <h1>
        {" "}
        Review Id {params.reviewId} of Product {params.productId}
      </h1>
    </>
  );
}
