"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {};

const AddCartBtn = (props: Props) => {
  const [addProduct, setAddProduct] = useState(false);

  return (
    <div>
      <Button
        className={cn("cursor-pointer", {
          "hover:bg-white hover:text-black  bg-black text-white transition-colors":
            !addProduct,
          "bg-green-500 text-white hover:bg-green-600": addProduct,
        })}
        onClick={() => setAddProduct(true)}
      >
        {addProduct ? "Added" : "Add To Cart +"}
      </Button>
    </div>
  );
};

export default AddCartBtn;
