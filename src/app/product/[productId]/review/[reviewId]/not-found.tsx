"use client";
import { usePathname } from "next/navigation"

export default function Notfound(){
  const pathname= usePathname();
  const productId =pathname.split('/')[2];
  const reviewId= pathname.split('/')[4]; 
  return(
    <div><h2>{reviewId } Review Not Found product {productId}</h2>
    
    </div>
  )
}