// "use client"
// import React, {useState} from 'react'
// import Link from "next/link";
// import { FaRegEye } from "react-icons/fa";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { FaAngleDoubleRight } from "react-icons/fa";
// import { useForm } from "react-hook-form";

// const LoginPage = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const onSubmit = (data:any) => {
//     console.log(data);
//     reset();
//   }
//   return (
//     <div className='mb-10'>
//       <div className="flex justify-end  items-center mt-6 px-12">
//                 <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700"><Link href={`/`}>Back</Link><FaAngleDoubleRight/></button>
//       </div>
//       <h2 className="text-center text-2xl font-bold mb-4">User Login Form</h2>
//       <form className='lg:w-1/3 w-2/3 mx-auto border rounded-lg p-10 shadow-lg ' onSubmit={handleSubmit(onSubmit)}>
        
//       <div>
//           <label className='text-md font-bold' htmlFor="email">Email : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
//           <input type="email" className="border-2 py-1 px-2 rounded-md w-full my-2" placeholder="Enter your Email..." {...register("email", { required: true })} />
//           {errors.email && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
//         </div>

//         <div className="relative">
//           <label className='text-md font-bold' htmlFor="lastName">Password : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
//           <input type={showPassword ? "text" : "password"} className="border-2 py-1 px-2 rounded-md w-full my-2" placeholder="Enter your Password..." {...register("password", { required: true })} />
//           {errors.password && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
//           <span className='absolute right-3 top-10 cursor-pointer' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEye /> : <FaRegEyeSlash />} </span>
//         </div>

//         <div className="flex justify-center items-center mt-4">
//         <input className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700" type="submit" value="Login"/>
//         </div>
//         <p className='mt-4'>Don&apos;t have an account.? <Link href='/register' className="underline text-purple-700">Register</Link></p>
//       </form>
//     </div>
//   )
// }

// export default LoginPage





"use client";
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { useLoginMutation } from '@/redux/features/auth/auth';
import { setUser } from '@/redux/store';
import { useRouter } from 'next/navigation';

interface LoginFormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LoginFormData>();
  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    const result = await login(data);
    if ('error' in result) {
      Swal.fire({
        title: "Email and Password doesn't match",
        text: "Something went wrong!",
        icon: "error",
        position: "center",
      });
    } else {
      dispatch(setUser(result.data));
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset(); 
      router.push('/')
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 border-2 rounded-[10px] shadow-lg">
        <h2 className="text-3xl mb-4 text-center font-bold">Login Form</h2>
        <div className="mb-4">
          <label className="block mb-2 text-base font-bold">Email <sup className='text-md text-[#fd3d57]'>*</sup></label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            placeholder='Enter your email....'
            className="w-full p-2 border-2 rounded-lg"
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>
        <div className="mb-4 relative">
          <label className="block mb-2 text-base font-bold">Password <sup className='text-md text-[#fd3d57]'>*</sup></label>
          <input
            {...register('password', { required: 'Password is required' })}
            type={showPassword ? "text" : "password"}
            placeholder='Enter your password....'
            className="w-full p-2 border-2 rounded-lg"
          />
          <button type='button' className="absolute top-12 right-3" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          {errors.password && <p className="text-red-600">{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 text-lg font-bold"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Login'}
        </button>
        <p className="text-center font-normal text-base pt-2">Don&lsquo;t have an Account? <span className='text-red-900 hover:underline font-bold'><Link href='/register'>SignUp</Link> </span></p>
      </form>
    </div>
  );
};

export default LoginForm;
