"use client"
import { addCart } from '@/redux/features/carts/cartsSlice';
import { useGetAllProductsQuery } from '@/redux/features/topProducts/topProductsApi';
import Link from 'next/link';
import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { IoMdAddCircle } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';

import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const TobSellingProducts = () => {
    const { data, isLoading, error } = useGetAllProductsQuery({})
    const dispatch = useDispatch();
    const carts = useSelector((state:any)=>state.carts.carts)
    // console.log(data);
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )
    return (
        <div className='my-10'>
            <div className='px-12'>
                <div className="flex justify-between items-center mb-6">
                    <h3 className="lg:text-2xl md:text-xl text-sm font-bold">Top Arrivals Products</h3>
                    <button className="flex justify-center items-center lg:gap-2 gap-1 lg:text-sm text-xs font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] lg:py-1 py-0.5 lg:px-4 px-1 transition-all ease-in-out duration-700"><Link href='/products'>VIEW MORE</Link><FaAngleDoubleRight /></button>
                </div>
            </div>
            <Carousel
                plugins={[plugin.current]}
                className="w-full px-10 overflow-hidden"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {data?.data?.map((product: any,) => {
                        const isInCart = carts.find((cart: any) => cart._id === product._id)
                        return (
                            <CarouselItem key={product._id} className="pl-5 basis-1/2 md:basis-1/3 lg:basis-1/5">
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center px-2">
                                        <div className='flex-col'>
                                            <img className='w-full h-auto mx-auto hover:scale-110 duration-300 ease-in-out transition-all cursor-pointer' src={`${product.image}`} alt={`${product.title}`} />
                                            <div className='text-center px-2 pb-4'>
                                                <h3 className='lg:text-2xl md:text-xl text-md font-bold '>{product.title}</h3>
                                                <p className='lg:text-xl md:text-md text-sm font-semibold'>Price : ${product.price}</p>
                                                <div className="flex justify-between items-center gap-2 lg:mx-5 md:mx-3 mx-1 mt-2">
                                                    <button className="lg:text-sm text-xs font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 lg:px-2 md:px-1 px-0.5 transition-all ease-in-out delay-500 duration-700"><Link href={`/products/${product?._id}`}>View Details</Link></button>
                                                    <button onClick={() => dispatch(addCart(product))} disabled={isInCart} className={` border-2 rounded-full text-[#fd3d57] lg:py-1 md:py-1 py-0.5 lg:px-1 md:px-1 px-0.5 transition-all ease-in-out duration-700 ${isInCart ? "text-black bg-gray-300 border-black" : "hover:bg-[#fd3d57] hover:text-white border-[#fd3d57]"}`}><IoMdAddCircle /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem> 
                            )
                        
})}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default TobSellingProducts;