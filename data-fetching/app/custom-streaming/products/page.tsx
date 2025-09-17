import { rgbDataURL } from "@/app/utils/imageStreamingPlaceholder";
import CardSkeleton from "@/components/card-skeleton";
import ProductCard from "@/components/product-card";
import React, { Suspense } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const PromiseCard = async ({
  productPromise,
}: {
  productPromise: Promise<Product>;
}) => {
  const product = await productPromise;
  return (
    <ProductCard
      {...product}
      imageProps={{
        placeholder: "blur",
        blurDataURL: rgbDataURL(2, 129, 210),
      }}
    />
  );
};

const ProductsPage = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await response.json();
  return (
    <ul className="w-2/3 m-auto grid row-auto grid-cols-3 gap-4 my-10">
      {products.map((product, index) => (
        <Suspense key={index} fallback={<CardSkeleton />}>
          <PromiseCard productPromise={Promise.resolve(product)} />
        </Suspense>
      ))}
    </ul>
  );
};

export default ProductsPage;
