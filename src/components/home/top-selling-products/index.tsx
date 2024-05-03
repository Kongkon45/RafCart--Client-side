import React from 'react';
import Image from 'next/image'
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";
import products from "../../../products.json"

// console.log(products)
const TobSellingProducts = () => {
    
    return (
        <div className="mx-10 mt-6 mb-10">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Top Selling</h3>
                <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700">VIEW MORE<FaAngleDoubleRight/></button>
            </div>
            <div data-aos="fade-up" className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 ">
                {products?.map((product)=>{
                    // console.log(product.images)
                    return <div key={product.id} className="border bg-white rounded-lg shadow-md pt-2 pb-5  text-center">
                        <Image
                        className="w-48 h-48 mx-auto hover:scale-125 duration-300 cursor-pointer transtion ease-in-out"
                        src={product.images}
                        alt={product.title}
                        width={500}
                        height={500}
                        />
                        <h2 className='text-xl font-bold'>{product.title}</h2>
                        <p className="text-md font-bold">Price : ${product.price}</p>
                        <div className="flex justify-between items-center mx-6 mt-2">
                            <button className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-2 transition-all ease-in-out duration-700">View Details</button>
                            <button className="hover:bg-[#fd3d57] hover:text-white border-2 border-[#fd3d57] rounded-full text-[#fd3d57] py-1 px-1 transition-all ease-in-out duration-700"><IoMdAddCircle /></button>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default TobSellingProducts;