"use client"
import { useGetAllProductsQuery } from '@/redux/features/topProducts/topProductsApi';
import React from 'react';

const AllProducts = () => {
    const {data, isLoading, error} = useGetAllProductsQuery()
    console.log(data?.data)
    return (
        <div className="mx-10">
            <h2 className="text-2xl font-bold my-4 text-center">All Products</h2>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className='border-2 border-black'>Id</th>
                        <th className='border-2 border-black'>Title</th>
                        <th className='border-2 border-black'>Description</th>
                        <th className='border-2 border-black'>Image</th>
                        <th className='border-2 border-black'>Category</th>
                        <th className='border-2 border-black'>Price</th>
                        <th className='border-2 border-black'>Rating</th>
                        <th className='border-2 border-black'>Brand</th>
                        <th className='border-2 border-black'>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.data.length === 0 ? (
                            <tr>
                                <td>Data not found</td>
                            </tr>
                        ) : (
                            data?.data?.map((product, index)=>{
                                return <tr key={index}>
                                    <td>{product?.title}</td>
                                </tr>
                            })
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllProducts;