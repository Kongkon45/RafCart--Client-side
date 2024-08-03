// import React from 'react';
// import Image from "next/image";
// import { FaAngleDoubleRight } from "react-icons/fa";
// import categoriesData from "../../../categories.json"
// // console.log(categoriesData)
// const Category = () => {
//     return (
//         <div className="px-12">
//             <div className="flex justify-between items-center mb-6">
//                 <h3 className="lg:text-2xl md:text-xl text-sm font-bold">Categories</h3>
//                 <button className="flex justify-center items-center lg:gap-2 gap-1 lg:text-sm text-xs font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] lg:py-1 py-0.5 lg:px-4 px-1 transition-all ease-in-out duration-700">VIEW MORE<FaAngleDoubleRight/></button>
//             </div>
//             <div data-aos="fade-up" className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-10 ">
//             {
//                 categoriesData?.map((category)=>{
//                     return <div key={category.id}>
//                         <div>
//                         <Image className="lg:w-[160px] lg:h-[160px] w-[100px] h-[100px] mx-auto  border border-[#fd3d57] lg:p-4 p-2 shadow-lg rounded-full hover:scale-110 duration-300 cursor-pointer transtion ease-in-out" src={category.images} alt={category.name} width={160} height={160}/>
                        
//                     </div>
//                     <h4 className="text-center lg:text-md md:text-md text-sm font-bold mt-4">{category.name}</h4>
//                     </div>
//                 })
//             }
//             </div>
            
//         </div>
//     );
// };

// export default Category;

"use client";
import Image from "next/image";
import "./style.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/virtual";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleDoubleRight } from "react-icons/fa";

const breakpoints = {
  0: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
};

type SlideData = {
  img : string;
  title: string;
};

const slideData: SlideData[] = [
  {
    img : "https://i.ibb.co/1GkhK0b/i-Phone-14-Pro-Max.webp",
    title: "Mobile",
  },
  {
    img : "https://i.ibb.co/PtNydSW/Laptop.webp",
    title: "Laptop",
  },
  {
    img : "https://i.ibb.co/X8h07WV/Smart-Tv-copy.webp",
    title: "SmartTv",
  },
  {
    img : "https://i.ibb.co/KGSSmdF/Tablets.webp",
    title: "Tablet",
  },
  {
    img : "https://i.ibb.co/WF0CNgj/Airpods.webp",
    title: "Head Phone",
  },
  {
    img : "https://i.ibb.co/9tGnN7Y/Smart-Watch.webp",
    title: "Smart Watch",
  }
];

const Category = () => {
  return (
    <div className="bg_vinylPool">
      <div className="container ">
        <div className="">
        <div className="flex justify-between items-center mb-6">
             <h3 className="lg:text-2xl md:text-xl text-sm font-bold">Our All Brands</h3>
               <button className="flex justify-center items-center lg:gap-2 gap-1 lg:text-sm text-xs font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] lg:py-1 py-0.5 lg:px-4 px-1 transition-all ease-in-out duration-700">VIEW MORE<FaAngleDoubleRight/></button>
             </div>
          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
              stopOnLastSlide: false,
            }}
            speed={3000}
            allowTouchMove={false}
            breakpoints={breakpoints}
            spaceBetween={12}
          >
            {slideData.map((slideInfo, index) => (
              <SwiperSlide key={index} className={`px-[30px] md:px-0 !h-auto !md:h-full`}>
                <div className="w-full !h-full card-sd bg-primary">
                  <div className="text-center py-3 md:px-2 px-1">
                    <Image src={slideInfo.img} alt="category image" width={160} height={160} className="w-[160px] h-[160px] mx-auto"/>
                    <h4 className="text-[25px] font-bold py-1 md:py-2 text-center text-black">
                      {slideInfo.title}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Category;
