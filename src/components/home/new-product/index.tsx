"use client";
import React from "react";
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";
import products from "../../../products.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useGetAllProductsQuery } from "@/redux/features/topProducts/topProductsApi";

const NewProduct = () => {
  const {data, isLoading, error} = useGetAllProductsQuery({})
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
        <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700">
          VIEW MORE
          <FaAngleDoubleRight />
        </button>
      </div>

      <div className="slider-container">
        <Slider {...settings}>
          {data?.data?.map((product:any) => {
            // console.log(product.images)
            console.log(product);
            return (
              <div
              style={{width:"900px"}}
                key={product.id}
                className="border bg-white rounded-lg shadow-md pt-2 pb-5 text-center sliderCard"
              >
                <Image
                  className="w-48 h-48 mx-auto"
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
