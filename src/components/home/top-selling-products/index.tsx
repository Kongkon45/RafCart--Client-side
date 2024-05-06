"use client"
import React from 'react';
import Image from 'next/image'
import Slider from "react-slick";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
// import products from "../../../products.json"
import topProducts from "../../../topProducts.json"
import Link from 'next/link';

// console.log(products)
const TobSellingProducts = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    
    return (
        <div className="mx-10 mt-6 mb-10">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Top Selling</h3>
                <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700">VIEW MORE<FaAngleDoubleRight/></button>
            </div>
            <div  className="slider-container">
            <Slider {...settings}>
            {topProducts?.map((product:any)=>{
                    // console.log(product.images)
                    return <div key={product.id} className="border bg-white rounded-lg shadow-md pt-2 pb-5  text-center">
                        <Image
                        className="w-48 h-48 mx-auto hover:scale-125 duration-300 cursor-pointer transition ease-in-out"
                        src={product.images}
                        alt={product.title}
                        width={500}
                        height={500}
                        />
                        <h2 className='text-xl font-bold'>{product.title}</h2>
                        <p className="text-md font-bold">Price : ${product.price}</p>
                        <div className="flex justify-between items-center mx-6 mt-2">
                            <button className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-2 transition-all ease-in-out duration-700"><Link href={`/products/${product.id}`}>View Details</Link></button>
                            <button className="hover:bg-[#fd3d57] hover:text-white border-2 border-[#fd3d57] rounded-full text-[#fd3d57] py-1 px-1 transition-all ease-in-out duration-700"><IoMdAddCircle /></button>
                        </div>
                    </div>
                })}
            </Slider>
            </div>
            
        </div>
    );
};

export default TobSellingProducts;