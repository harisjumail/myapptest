
import React from "react";
import Link from "next/link";

interface ProductProps {
  product: {
    id: number;
    title: string;
    description: string;
    price: number;
    imageUrl: string;
  };
}

export const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div>
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Link href={`/products/${product.id}`}>View Product</Link>
    </div>
  );
};
