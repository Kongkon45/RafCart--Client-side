"use client"
import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form"
import { FaAngleDoubleRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';

interface IFormInput {
    firstName: string
    lastName: string
    email: string
    phoneNumber: number
    city: string
    address: string
    zipCode: number
    checkbox: boolean
}

const districts = [
    "Bagerhat", "Bandarban", "Barguna", "Barishal", "Bhola", "Bogura", "Brahmanbaria", "Chandpur",
    "Chattogram", "Chuadanga", "Cumilla", "Cox's Bazar", "Dhaka", "Dinajpur", "Faridpur", "Feni",
    "Gaibandha", "Gazipur", "Gopalganj", "Habiganj", "Jamalpur", "Jashore (Jessore)", "Jhalokati",
    "Jhenaidah", "Joypurhat", "Khagrachhari", "Khulna", "Kishoreganj", "Kurigram", "Kushtia",
    "Lakshmipur", "Lalmonirhat", "Madaripur", "Magura", "Manikganj", "Meherpur", "Moulvibazar",
    "Munshiganj", "Mymensingh", "Naogaon", "Narail", "Narayanganj", "Narsingdi", "Natore",
    "Netrokona", "Nilphamari", "Noakhali", "Pabna", "Panchagarh", "Patuakhali", "Pirojpur",
    "Rajbari", "Rajshahi", "Rangamati", "Rangpur", "Satkhira", "Shariatpur", "Sherpur",
    "Sirajganj", "Sunamganj", "Sylhet", "Tangail", "Thakurgaon", "Habiganj"
];

const CheckoutPage = () => {
    const productItem = useSelector((state: any) => state.carts.carts);
    // console.log(productItem);
    const totalPrice = productItem.reduce((total: any, item: any) => total + (item.quantity * item.price), 0)

    const { register, handleSubmit, reset, formState: { errors }, } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
        reset();
    }
    return (
        <div>
            <div className='flex justify-end mr-10 mt-4'>
            <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700"><Link href={`/cart`}>Back</Link><FaAngleDoubleRight/></button>
            </div>
            <div className='flex justify-center gap-20 mt-10'>
            <div className='w-2/4'>
                <h2 className='w-full text-xl font-semibold rounded-lg text-center bg-[#e9e4e4] text-black pl-10 py-1 '>Billing Details</h2>
                <form className='my-6 border-2 p-10 rounded-lg shadow-lg ' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-10 items-center'>
                        <div className='w-1/2'>
                            <label className='text-md font-bold' htmlFor="firstName">First Name : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                            <input className='w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 ' placeholder='Enter your name...' type="text" {...register("firstName", { required: true })} />
                            {errors.firstName && <span className='text-[#fd3d57]'>This field is required</span>}
                        </div>
                        <div className='w-1/2'>
                            <label className='text-md font-bold' htmlFor="lastName">Last Name : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                            <input className='w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 ' placeholder='Enter your lastName...' type="text" {...register("lastName", { required: true })} />
                            {errors.lastName && <span className='text-[#fd3d57]'>This field is required</span>}
                        </div>
                    </div>
                    <div className='my-4'>
                        <label className='text-md font-bold' htmlFor="email">Email Address : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                        <input className='w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 ' placeholder='Enter your email...' type="email" {...register("email", { required: true })} />
                        {errors.email && <span className='text-[#fd3d57]'>This field is required</span>}
                    </div>
                    <div className='my-4'>
                        <label className='text-md font-bold' htmlFor="phoneNumber">Phone Number : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                        <input className='w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 ' placeholder='Enter your phone number...' type="number" {...register("phoneNumber", { required: true })} />
                        {errors.phoneNumber && <span className='text-[#fd3d57]'>This field is required</span>}
                    </div>
                    <div className='my-4'>
                        <label className='text-md font-bold' htmlFor="address">Street Address : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                        <input className='w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 ' placeholder='Enter your Address...' type="text" {...register("address", { required: true })} />
                        {errors.address && <span className='text-[#fd3d57]'>This field is required</span>}
                    </div>
                    <div className='flex gap-10 my-4'>
                        <div className='w-1/2'>
                            <label className='text-md font-bold' htmlFor="town/city">Town/City : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                            <select className='w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2' {...register("city", { required: true })}>
                                <option value="">Select Town/City</option>
                                {districts.map((district, index) => (
                                    <option key={index} value={district}>{district}</option>
                                ))}
                            </select>
                            {errors.city && <span className='text-[#fd3d57]'>This field is required</span>}
                        </div>
                        <div className='w-1/2'>
                            <label className='text-md font-bold' htmlFor="zipCode">Zip Code : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                            <input className='w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 ' placeholder='Enter zip code...' type="text" {...register("zipCode", { required: true })} />
                            {errors.zipCode && <span className='text-[#fd3d57]'>This field is required</span>}
                        </div>
                    </div>


                    <input className='w-full mx-auto text-xl font-bold' type="submit" value="Submit" />
                </form>
            </div>
            <div className='w-1/4'>
                <h2 className='w-full text-xl rounded-lg font-semibold text-center bg-[#e9e4e4] text-black pl-10 py-1 '>Your Order</h2>
                <div className='mt-6 border-2 rounded-lg p-4'>
                    <h2 className='text-center text-2xl font-bold my-3'>Products</h2>
                    <hr className='border mb-4' />
                    <ul>
                        {
                            productItem.length === 0 ? (
                                <li className='text-2xl font-bold text-center'>Cart Not Found</li>
                            ) : (
                                productItem?.map((product: any) => {
                                    return <li key={product._id} className='flex justify-between items-center'>
                                        <img className='w-12 h-12' src={`${product.image}`} alt={`${product.title}`} />
                                        <h5>{product.title}</h5>
                                        <p>{product.price}</p>
                                        <p>X{product.quantity}</p>
                                        <p className='text-md font-bold'>{(product.quantity) * (product.price)}</p>
                                    </li>
                                })
                            )
                        }
                    </ul>
                    <div className='my-6'>
                        <hr className='border my-2' />
                        <h5 className='text-md font-bold flex justify-between items-center'>Subtotal <span>${totalPrice}</span></h5>
                        <hr className='border my-2' />
                        <h5 className='text-md font-bold flex justify-between items-center'>Shipping <span>Free</span></h5>
                        <hr className='border my-2' />
                        <h5 className='text-md font-bold flex justify-between items-center'>Total <span>${totalPrice}</span></h5>
                        <hr className='border my-2' />
                        <div className='flex items-center gap-2 mt-6'>
                            <input className='w-5 h-5' type="checkbox" {...register("checkbox")} />
                            <label htmlFor="checkbox">Agree to our Terms & Conditons</label>
                        </div>
                        <button className='w-full mt-6 bg-[#fd3d57] text-white py-2 px-4 rounded-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-200 ease-in-out ' type="submit">PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default CheckoutPage;