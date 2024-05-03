import React from 'react';
import Image from "next/image";
import { FaAngleDoubleRight } from "react-icons/fa";
import categoriesData from "../../../categories.json"
// console.log(categoriesData)
const Category = () => {
    return (
        <div className="mx-10">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Categories</h3>
                <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700">VIEW MORE<FaAngleDoubleRight/></button>
            </div>
            <div data-aos="fade-up" className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-10 ">
            {
                categoriesData?.map((category)=>{
                    return <div key={category.id}>
                        <div className='overflow-hidden border border-[#fd3d57] p-4 shadow-lg rounded-full'>
                        <Image className="hover:scale-110 duration-300 cursor-pointer transtion ease-in-out" src={category.images} alt={category.name} width={150} height={150}/>
                        
                    </div>
                    <h4 className="text-center text-md font-bold mt-4">{category.name}</h4>
                    </div>
                })
            }
            </div>
            
        </div>
    );
};

export default Category;