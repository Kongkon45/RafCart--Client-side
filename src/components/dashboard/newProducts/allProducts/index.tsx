"use client"
import { useGetAllProductsQuery } from '@/redux/features/topProducts/topProductsApi';
import React from 'react';

const NewAllProducts = () => {
    const { data, isLoading, error } = useGetAllProductsQuery({})
    console.log(data?.data);
    return (
        <div className='mx-10'>
            <h2 className='text-2xl font-bold text-center my-4'>New All Products</h2>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='border-2 border-black'>Id</th>
                        <th className='border-2 border-black'>Title</th>
                        <th className='border-2 border-black'>Description</th>
                        <th className='border-2 border-black'>Image</th>
                        <th className='border-2 border-black'>Price</th>
                        <th className='border-2 border-black'>Rating</th>
                        <th className='border-2 border-black'>Category</th>
                        <th className='border-2 border-black'>Stock</th>
                        <th className='border-2 border-black'>Brand</th>
                        <th className='border-2 border-black'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.data?.length === 0 ? (
                            <tr>
                                <td>Data is not found</td>
                            </tr>
                        ) : (
                            data?.data?.map((product: any, index: any) => {
                            
                                return <tr key={index}>
                                    <td className='border-2 border-gray-400 text-center'>{index+1}</td>
                                    <td className='border-2 border-gray-400 text-center'>{product?.title}</td>
                                    <td className='border-2 border-gray-400 text-center'>{product?.description}</td>
                                    <td className='border-2 border-gray-400 text-center'>{product?.image}</td>
                                    <td className='border-2 border-gray-400 text-center'>{product?.price}</td>
                                    <td className='border-2 border-gray-400 text-center'>{product?.rating}</td>
                                    <td className='border-2 border-gray-400 text-center'>{product?.category}</td>
                                    <td className='border-2 border-gray-400 text-center'>{product?.stock}</td>
                                    <td className='border-2 border-gray-400 text-center'>{product?.brand}</td>
                                </tr>
                            })  
                        )
                        
                    }
                </tbody>
            </table>
        </div>
    );
};

export default NewAllProducts;