"use client"
import React from 'react';
import { FaMapMarkerAlt } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form"
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

interface IFormInput {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    address: string
}

const ContactForm = () => {
    const { register, handleSubmit, reset, formState: { errors }, } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        console.log(data)

        reset();
    }
    return (
        <div className='lg:flex w-full lg:p-12 p-10'>
            <div className='lg:w-2/4 w-full mx-auto border-2 rounded-lg p-5 shadow-lg'>
                <h4 className='lg:text-xl text-md font-bold lg:my-2 my-1'>LEAVE US A MESSAGE</h4>
                <p className='lg:text-md text-sm'>Use the form below to get in touch with the sales team</p>
                <form className='lg:mt-6 md:mt-4 mt-3' onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex gap-10 items-center'>
                        <div className='w-1/2'>
                            <label className='text-md font-bold' htmlFor="firstName">First Name : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                            <input className='w-full border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 text-sm' placeholder='Enter your name...' type="text" {...register("firstName", { required: true })} />
                            {errors.firstName && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
                        </div>
                        <div className='w-1/2'>
                            <label className='text-md font-bold' htmlFor="lastName">Last Name : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                            <input className='w-full text-sm border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 ' placeholder='Enter your lastName...' type="text" {...register("lastName", { required: true })} />
                            {errors.lastName && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
                        </div>
                    </div>
                    <div className='my-4'>
                        <label className='text-md font-bold' htmlFor="email">Email Address : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                        <input className='w-full text-sm border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 ' placeholder='Enter your email...' type="email" {...register("email", { required: true })} />
                        {errors.email && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
                    </div>
                    <div className='my-4'>
                        <label className='text-md font-bold' htmlFor="phoneNumber">Phone Number : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                        <input className='w-full text-sm border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 ' placeholder='Enter your phone number...' type="string" {...register("phoneNumber", { required: true })} />
                        {errors.phoneNumber && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
                    </div>
                    <div className='my-4'>
                        <label className='text-md font-bold' htmlFor="address">Street Address : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
                        <input className='w-full text-sm border-2 hover:border-[#fd3d57] rounded-md py-1 px-2 ' placeholder='Enter your Address...' type="text" {...register("address", { required: true })} />
                        {errors.address && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
                    </div>
                    <button className='lg:text-md text-sm font-bold mt-6 bg-[#fd3d57] text-white py-2 px-4 rounded-lg hover:border-2 hover:bg-white hover:text-[#fd3d57] hover:border-[#fd3d57] transition-all duration-300 ease-in-out ' type="submit">Send Message</button>
                </form>
            </div>
            <div className='lg:w-1/4 w-full mx-auto border-2 rounded-lg p-5 shadow-lg lg:mt-0 mt-8'>
                <h4 className='lg:text-xl text-md font-bold'>OUR STORE</h4>
                <div>
                    <p className='flex items-center lg:gap-3 gap-2 lg:my-3 my-2'><span><FaMapMarkerAlt /></span>Dhaka, BanglaDesh</p>
                    <p className='flex items-center lg:gap-3 gap-2 lg:my-3 my-2'><span><FaPhoneAlt /></span>+8801778934545</p>
                    <p className='flex items-center lg:gap-3 gap-2 lg:my-3 my-2'><span><MdOutlineMailOutline /></span>kongkon4545@gmail.com</p>
                </div>
                <h4 className='lg:text-xl text-md font-bold lg:my-5 md:my-3 my-2'>HOURS OF OPERATION</h4>
                <div>
                    <p className='flex items-center justify-between'><span>Satarday</span>10:00</p>
                    <p className='flex items-center justify-between'><span>Sunday</span>10:00</p>
                    <p className='flex items-center justify-between'><span>Monday</span>10:00</p>
                    <p className='flex items-center justify-between'><span>Tuesday</span>10:00</p>
                    <p className='flex items-center justify-between'><span>Thursday</span>10:00</p>
                    <p className='flex items-center justify-between'><span>Wednesday</span>10:00</p>
                    <p className='flex items-center justify-between'><span>Firday</span>10:00</p>
                </div>
                <h4 className='lg:text-xl text-md font-bold lg:my-5 md:my-3 my-2'>CAREERS</h4>
                <p>If you are interesting in emplyment opportunities at RAFCARTs. Please email us : kongkonjowarder@gmail.com</p>
            </div>
        </div>
    );
};

export default ContactForm;