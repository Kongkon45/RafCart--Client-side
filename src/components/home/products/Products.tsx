"use client"
import { useGetAllProductsQuery } from '@/redux/features/topProducts/topProductsApi';
import { IoMdAddCircle } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductsPage = () => {
    const { data, isLoading, error } = useGetAllProductsQuery({})
    // console.log("porducts", data?.data);
    return (
        <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 m-10'>
            {
                data?.data?.map((product:any) => {
                    return <div key={product._id} className='border rounded-lg shadow-lg'>
                        <Image className='w-full h-60 mx-auto ' src={`${product.image}`} alt={`${product.title}`} width={100} height={100} />
                        <div className='text-center px-2 pb-4'>
                            <h3 className='text-2xl font-bold '>{product.title}</h3>
                            <p className='text-xl font-semibold'>Price : ${product.price}</p>
                            <div className="flex justify-between items-center mx-6 mt-2">
                                <button className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-2 transition-all ease-in-out delay-500 duration-700"><Link href={`/products/${product?._id}`}>View Details</Link></button>
                                <button className="hover:bg-[#fd3d57] hover:text-white border-2 border-[#fd3d57] rounded-full text-[#fd3d57] py-1 px-1 transition-all ease-in-out duration-700"><IoMdAddCircle /></button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default ProductsPage;