import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}
const fetchProducts = async (): Promise<{ products: Product[] }> => {
  const res = await fetch("https://dummyjson.com/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export default async function ProductsPage() {
  const data = await fetchProducts();
  const products: Product[] = data.products;

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map((product: Product) => (
          <div key={product.id}>
            <Image
              src={product.thumbnail || "/placeholder.png"}
              alt={product.title}
              width={300}
              height={200}
              loading="lazy"
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <Link href={`/products/${product.id}`}>View Product</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
