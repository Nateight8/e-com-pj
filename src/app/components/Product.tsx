"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import React from "react";

type Props = {};

const Product = (props: Props) => {
  return (
    <div className="flex flex-col hover:shadow-md transition-shadow duration-1000 shadow-slate-600 p-1 hover:cursor-pointer rounded-sm my-3 w-fit">
      <div className="w-72">
        <AspectRatio ratio={1 / 1}>
          <Image src="/1.jpg" fill alt="" className=" object-cover" />
        </AspectRatio>
      </div>
      <div className="flex justify-between py-2">
        <p className="text text-lg uppercase  font-medium">Baige Sheep chair</p>
        <p className="text text-lg font-medium uppercase">price</p>
      </div>
    </div>
  );
};

export default Product;
