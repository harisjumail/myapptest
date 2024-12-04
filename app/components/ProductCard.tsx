import React from "react";
import Link from "next/link";

interface ProductProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string; 
  };
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <img src={product.thumbnail || "/placeholder.png"} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link href={`/products/${product.id}`}>View Product</Link>
    </div>
  );
};
