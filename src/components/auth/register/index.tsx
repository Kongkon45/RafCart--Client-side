"use client"
import React, {useState} from 'react'
import Link from "next/link";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data:any) => {
    console.log(data);
  }
  return (
    <div>
      <div className="flex justify-end  items-center my-6 mx-10">
                <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700"><Link href={`/`}>Back</Link><FaAngleDoubleRight/></button>
      </div>
      <h2 className="text-center text-2xl font-bold my-6">User Registration Form</h2>
      <form className='w-1/3 mx-auto border rounded-lg p-10 shadow-lg ' onSubmit={handleSubmit(onSubmit)}>
        
        <input type="text" className="border-2 py-1 px-2 rounded-md w-full my-2" placeholder="Enter your Name..." {...register("name")}/>
        <input type="email" className="border-2 py-1 px-2 rounded-md w-full my-2" placeholder="Enter your Email..." {...register("email")}/>
        <div className="relative">
        <input type={showPassword ? "text" : "password" }className="border-2 py-1 px-2 rounded-md w-full my-2" placeholder="Enter your Password..." {...register("password")}/>
        <span className='absolute right-3 top-4 cursor-pointer' onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaRegEye/> : <FaRegEyeSlash/>} </span>
        </div>
        <div className="flex gap-2">
        <input
          type="checkbox"
          {...register("checkbox")}
        />
        <label htmlFor="checkbox">Accepts our terms and condition.</label>
        </div>
        <div className="flex justify-center items-center mt-4">
        <input className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700" type="submit" value="Register"/>
        </div>
        <p className='mt-4'>Already have an account.? <Link href='/login' className="underline text-purple-700"> Login </Link></p>
      </form>
    </div>
  )
}

export default RegisterPage