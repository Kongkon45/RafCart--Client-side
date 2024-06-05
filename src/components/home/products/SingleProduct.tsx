"use client"
import { addCart } from '@/redux/features/carts/cartsSlice';
import { useGetProductQuery } from '@/redux/features/topProducts/topProductsApi';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const SingleProduct = ({ id }:any) => {
    const dispatch = useDispatch();
    // console.log(id);
    const { data, isLoading, error } = useGetProductQuery(id)
    // console.log(data?.data);
    const product = data?.data;
    // console.log(product);
    return (
        <div>
            <div className="flex justify-end mx-10">
                <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700"><Link href={`/products`}>Back</Link><FaAngleDoubleRight/></button>
            </div>

            <div className='flex justify-center items-center gap-10 mx-10'>
            <div className='w-1/2'>
                {/* <Image src={`${product?.image}`} alt={`${product?.title}`} width={600} height={600} /> */}
                <img className='w-full h-[500px] mx-auto hover:scale-110 duration-300 delay-300 transition-all ease-in-out cursor-pointer' src={`${product?.image}`} alt={`${product?.title}`}/>
            </div>
            <div className='w-1/2'>
                <h2 className='text-2xl font-bold mb-3'>{product?.title}</h2>
                <p className='text-sm font-semibold text-justify'>{product?.description}</p>
                <p className='text-xl font-bold my-3'>Price : ${product?.price}</p>
                <p className='text-md font-semibold'><span className='text-2xl font-bold'>Category : </span>{product?.category}</p>
                <p className='text-md font-semibold my-3'><span className='text-xl font-bold'>Rating : </span>{product?.rating}</p>
                <p className='text-md font-semibold'><span className='text-2xl font-bold'>Brand : </span>{product?.brand}</p>
                <p className='text-md font-semibold my-3'><span className='text-2xl font-bold'>Stock : </span>{product?.stock}</p>
                <div>
                    <button onClick={()=>dispatch(addCart(product))} className="py-1 px-4 rounded-[10px] bg-white border border-[#fd3d57] text-[#fd3d57] hover:text-white hover:bg-[#fd3d57] transition ease-in-out duration-300 text-md font-semibold">Add To Cart</button>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default SingleProduct;