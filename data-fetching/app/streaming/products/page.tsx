import { rgbDataURL } from "@/app/utils/imageStreamingPlaceholder";
import ProductCard from "@/components/product-card";
import React from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const ProductsPage = async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await data.json();
  return (
    <ul className="w-2/3 m-auto grid row-auto grid-cols-3 gap-4 my-10">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          {...product}
          imageProps={{
            placeholder: "blur",
            blurDataURL: rgbDataURL(2, 129, 210),
          }}
        />
      ))}
    </ul>
  );
};

export default ProductsPage;
