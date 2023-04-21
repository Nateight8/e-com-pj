"use client";
import React from "react";
import Product from "./Product";
import { Separator } from "@/components/ui/separator";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
type Props = {};

function Products({}: Props) {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gray-100 relative">
      <div className="w-full py-4">
        <Separator className="bg-gray-200 mb-6" />
        <div className="grid grid-cols-7 bg--300">
          <div className="flex flex-col justify-center p-4 col-span-full md:col-span-2">
            <h1 className="e text-3xl uppercase mb-4">Chairs</h1>
            <p className="e text-base uppercase">
              collections available for preorder
            </p>
          </div>

          <Swiper
            className="w-full col-start-3 col-span-full"
            spaceBetween={20}
            slidesPerView={3.6}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              <Product />
            </SwiperSlide>
            <SwiperSlide>
              <Product />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Product />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Product />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <Product />
            </SwiperSlide>
          </Swiper>
        </div>

        <Separator className="bg-gray-200 mt-6" />
      </div>
    </section>
  );
}

export default Products;
