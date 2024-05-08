"use client"
import { decrementQuantity, incrementQuantity, removeCart } from '@/redux/features/carts/cartsSlice';
import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrFormSubtract } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';

const CartsPage = () => {
    const productItem = useSelector((state: any) => state.carts.carts)
    // console.log(productItem);
    const dispatch = useDispatch();
    const totalPrice = productItem.reduce((total: any, item: any) => total + (item.quantity * item.price), 0)
    return (
        <div className='h-fit mt-10 mb-60'>
            <ul className='w-1/2 mx-auto'>
                {
                    productItem.length === 0 ? (
                        <h2 className='text-4xl font-bold my-10 text-center'>No Cart Found</h2>
                    ) : (
                        productItem?.map((product: any) => {
                            return <li key={product?._id} className='flex justify-between items-center gap-6 border-2 rounded-md py-2 px-4 my-3'>
                                <img className='w-20 h-20 ' src={`${product?.image}`} alt={`${product?.title}`} />
                                <p className='text-2xl font-bold'>${product?.price}</p>
                                <h3 className='text-2xl font-bold'>{product?.title}</h3>
                                <button onClick={() => dispatch(incrementQuantity(product))} className="hover:bg-green-500 hover:text-white border-2 border-green-500 rounded-full text-green-500 py-1 px-1 transition-all ease-in-out duration-700"><IoMdAddCircle /></button>
                                <p className='text-2xl font-bold'>{product?.quantity}</p>
                                <button onClick={() => dispatch(decrementQuantity(product))} className="hover:bg-orange-500 hover:text-white border-2 border-orange-500 rounded-full text-orange-500 py-1 px-1 transition-all ease-in-out duration-700"><GrFormSubtract /></button>
                                <p className='text-2xl font-bold'>Price : ${(product?.quantity)*(product?.price)}</p>
                                <button onClick={() => dispatch(removeCart(product))} className="hover:bg-[#fd3d57] hover:text-white border-2 border-[#fd3d57] rounded-full text-[#fd3d57] py-1 px-1 transition-all ease-in-out duration-700"><RiDeleteBin6Fill /></button>
                            </li>
                        })

                    )
                }
            </ul>
            {
                productItem.length > 0 && (
                    <h2 className='ml-[850px] text-2xl font-bold'>Total Price : ${totalPrice}</h2>
                )
            }
        </div>
    );
};

export default CartsPage;