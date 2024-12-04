import React from "react";
import Image from "next/image";
import ProductCarousel from "@/app/components/ProductCarousel";

const fetchProductDetails = async (id: string) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product details");
  return res.json();
};

export default async function ProductDetails({ params }: { params: { id: string } }) {
  const product = await fetchProductDetails(params.id);

  return (
    <div>
      <h1>{product.title}</h1>
      <ProductCarousel images={product.images} />
      <Image
        src={product.thumbnail || "/placeholder.png"}
        alt={product.title}
        width={300}
        height={200}
        loading="lazy" 
      />

      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Category: {product.category}</p>
      <p>Stock: {product.stock}</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
}
