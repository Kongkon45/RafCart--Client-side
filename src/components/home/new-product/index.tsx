"use client";
import React from "react";
import Image from "next/image";
import products from "../../../products.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewProduct = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="mx-10 mt-6 mb-10">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">New Arrival</h3>
        <button className="hover:bg-orange-500 hover:text-white border border-orange-500 rounded-lg text-orange-500 py-1 px-4">
          VIEW MORE
        </button>
      </div>

      <div className="slider-container">
        <Slider
          {...settings}
          className="w-full grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 "
        >
          {products?.map((product) => {
            // console.log(product.images)
            return (
              <div
                key={product.id}
                className="border-2 bg-white rounded-lg shadow-md pt-2 pb-5  text-center"
              >
                <Image
                  className="w-60 h-60 mx-auto"
                  src={product.images}
                  alt={product.title}
                  width={500}
                  height={500}
                />
                <h2 className="text-xl font-bold">{product.title}</h2>
                <p className="text-md font-bold">Price : ${product.price}</p>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default NewProduct;
