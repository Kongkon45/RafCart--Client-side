"use client"
import React, {useState} from 'react'
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = (data:any) => {
    console.log(data);
    reset();
  }
  return (
    <div className='mb-10'>
      <div className="flex justify-end  items-center mt-6 px-12">
                <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700"><Link href={`/`}>Back</Link><FaAngleDoubleRight/></button>
      </div>
      <h2 className="text-center text-2xl font-bold mb-4">User Login Form</h2>
      <form className='lg:w-1/3 w-2/3 mx-auto border rounded-lg p-10 shadow-lg ' onSubmit={handleSubmit(onSubmit)}>
        
      <div>
          <label className='text-md font-bold' htmlFor="email">Email : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
          <input type="email" className="border-2 py-1 px-2 rounded-md w-full my-2" placeholder="Enter your Email..." {...register("email", { required: true })} />
          {errors.email && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
        </div>

        <div className="relative">
          <label className='text-md font-bold' htmlFor="lastName">Password : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
          <input type={showPassword ? "text" : "password"} className="border-2 py-1 px-2 rounded-md w-full my-2" placeholder="Enter your Password..." {...register("password", { required: true })} />
          {errors.password && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
          <span className='absolute right-3 top-10 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />} </span>
        </div>

        <div className="flex justify-center items-center mt-4">
        <input className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700" type="submit" value="Login"/>
        </div>
        <p className='mt-4'>Don&apos;t have an account.? <Link href='/register' className="underline text-purple-700">Register</Link></p>
      </form>
    </div>
  )
}

export default LoginPage