import React from 'react';
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";

const Brands = () => {
    return (
        <div className="p-12">
            <div className="flex justify-between items-center mb-6">
                <h3 className="lg:text-2xl md:text-xl text-sm font-bold">Our All Brands</h3>
                <button className="flex justify-center items-center lg:gap-2 gap-1 lg:text-sm text-xs font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] lg:py-1 py-0.5 lg:px-4 px-1 transition-all ease-in-out duration-700">VIEW MORE<FaAngleDoubleRight/></button>
            </div>
            <div data-aos="fade-up" className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-10">
                <span><Image className='hover:cursor-pointer ' src="https://i.ibb.co/fS7QQ9j/Amazon.webp" alt="brand image" width={200} height={200}/></span>
                <span><Image className='hover:cursor-pointer ' src="https://i.ibb.co/dfGBhTW/Samsung-Brand.webp" alt="brand image" width={200} height={200}/></span>
                <span><Image className='hover:cursor-pointer ' src="https://i.ibb.co/wK7P5tF/HIFUTURE.webp" alt="brand image" width={200} height={200}/></span>
                <span><Image className='hover:cursor-pointer ' src="https://i.ibb.co/gyz8Sc9/Oppo-Brand.webp" alt="brand image" width={200} height={200}/></span>
                <span><Image className='hover:cursor-pointer ' src="https://i.ibb.co/SsL8kgh/Xtra.webp" alt="brand image" width={200} height={200}/></span>
                <span><Image className='hover:cursor-pointer ' src="https://i.ibb.co/bFvtQS0/Dell.webp" alt="brand image" width={200} height={200}/></span>
            </div>
        </div>
    );
};

export default Brands;