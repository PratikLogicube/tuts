import CardSkeleton from "@/components/card-skeleton";
import React from "react";

const ProductsPage = () => {
  return (
    <ul className="w-2/3 m-auto grid row-auto grid-cols-3 gap-4 my-10">
      {Array.from({ length: 9 }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </ul>
  );
};

export default ProductsPage;
