"use client"
import { decrementQuantity, incrementQuantity, removeCart } from '@/redux/features/carts/cartsSlice';
import React from 'react';
import { IoMdAddCircle } from 'react-icons/io';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrFormSubtract } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
const CartsPage = () => {
    const productItem = useSelector((state: any) => state.carts.carts)
    console.log(productItem);
    const dispatch = useDispatch();
    const totalPrice = productItem.reduce((total: any, item: any) => total + (item.quantity * item.price), 0)
    return (
        <div className='flex gap-40 mt-10 mb-60 mx-20'>
            <div className='w-3/5 h-fit'>
                <h2 className='w-full flex justify-around text-xl font-semibold rounded-lg bg-[#e9e4e4] text-black py-1 '>
                    <span>Products</span> 
                    <span>Quantity</span>
                    <span>Total Price</span>
                </h2>
                <ul>
                    {
                        productItem.length === 0 ? (
                            <h2 className='text-4xl font-bold my-10 text-center'>No Cart Found</h2>
                        ) : (
                            productItem?.map((product: any) => {
                                return <li key={product?._id} className='flex justify-between items-center gap-6 border-2 rounded-md py-2 px-4 my-3'>
                                    <img className='w-20 h-20 ' src={`${product?.image}`} alt={`${product?.title}`} />
                                    <p className='text-xl font-bold'>Price : ${product?.price}</p>
                                    <h3 className='text-xl font-bold'>{product?.title}</h3>
                                    <button onClick={() => dispatch(incrementQuantity(product))} className="hover:bg-green-500 hover:text-white border-2 border-green-500 rounded-full text-green-500 py-1 px-1 transition-all ease-in-out duration-700"><IoMdAddCircle /></button>
                                    <p className='text-xl font-bold'>{product?.quantity}</p>
                                    <button onClick={() => dispatch(decrementQuantity(product))} className="hover:bg-orange-500 hover:text-white border-2 border-orange-500 rounded-full text-orange-500 py-1 px-1 transition-all ease-in-out duration-700"><GrFormSubtract /></button>
                                    <p className='text-xl font-bold'>Total Price : ${(product?.quantity) * (product?.price)}</p>
                                    <button onClick={() => dispatch(removeCart(product))} className="hover:bg-[#fd3d57] hover:text-white border-2 border-[#fd3d57] rounded-full text-[#fd3d57] py-1 px-1 transition-all ease-in-out duration-700"><RiDeleteBin6Fill /></button>
                                </li>
                            })

                        )
                    }
                </ul>
                {/* {
                    productItem.length > 0 && (
                        <h2 className='ml-[850px] text-2xl font-bold'>Total Price : ${totalPrice}</h2>
                    )
                } */}
            </div>
            <div className='w-1/4 h-fit border-2 rounded-lg shadow-lg p-4 my-3'>
                <h3 className='text-xl font-bold my-4 text-center'>ORDER SUMMARY</h3>
                <h5 className='text-md font-bold flex justify-between items-center'>Subtotal <span>${totalPrice}</span></h5>
                <h5 className='text-md font-bold flex justify-between items-center'>Delivery <span>Free</span></h5>
                <h5 className='text-md font-bold flex justify-between items-center'>Tax <span>Free</span></h5>
                <hr className='border my-2' />
                <h5 className='text-md font-bold flex justify-between items-center'>Total <span>${totalPrice}</span></h5>
                <div className="flex items-center">
                    <input className='my-4 border-2 rounded-l-lg py-1 px-4 w-full focus:outline-none' type="text" placeholder='Enter coupon' />
                    <button className='bg-[#fd3d57] text-white py-1 px-4 rounded-r-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-300 ease-in-out ' type="submit">Apply</button>
                </div>
                <button className='w-full my-6 bg-[#fd3d57] text-white py-2 px-4 rounded-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-200 ease-in-out ' type="submit"><Link href='/cart/checkout'>PROCESS TO CHECKOUT</Link></button>
            </div>
        </div>
    );
};

export default CartsPage;