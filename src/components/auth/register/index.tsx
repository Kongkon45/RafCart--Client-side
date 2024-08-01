// "use client"
// import React, { useState } from 'react'
// import Link from "next/link";
// import { FaRegEye } from "react-icons/fa";
// import { FaRegEyeSlash } from "react-icons/fa";
// import { FaAngleDoubleRight } from "react-icons/fa";
// import { useForm } from "react-hook-form";
// import { tree } from 'next/dist/build/templates/app-page';

// const RegisterPage = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const onSubmit = (data: any) => {
//     console.log(data);
//     reset();
//   }
//   return (
//     <div className='mb-8'>
//       <div className="flex justify-end  items-center mt-6 px-12">
//         <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700"><Link href={`/`}>Back</Link><FaAngleDoubleRight /></button>
//       </div>
//       <h2 className="text-center text-2xl font-bold mb-4">User Registration Form</h2>
//       <form className='lg:w-1/3 w-2/3 mx-auto border rounded-lg p-10 shadow-lg ' onSubmit={handleSubmit(onSubmit)}>

//         <div>
//           <label className='text-md font-bold' htmlFor="name">Name : <span className='text-md text-[#fd3d57]'>*</span></label> <br />
//           <input type="text" className="border-2 py-1 px-2 rounded-md w-full my-2" placeholder="Enter your Name..." {...register("name", { required: true })} />
//           {errors.name && <span className='text-[#fd3d57] text-sm'>This field is required</span>}
//         </div>

//         <div>
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

//         <div className="flex gap-2">
//           <input
//             type="checkbox"
//             {...register("checkbox", { required: true })}
//           />
//           <label htmlFor="checkbox">Accepts our terms and condition.</label>
//         </div>
//         {errors.checkbox && <span className='text-[#fd3d57] text-sm'>This checkbox is required</span>}

//         <div className="flex justify-center items-center mt-4">
//           <input className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700" type="submit" value="Register" />
//         </div>
//         <p className='mt-4'>Already have an account.? <Link href='/login' className="underline text-purple-700"> Login </Link></p>
//       </form>
//     </div>
//   )
// }

// export default RegisterPage




"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import Swal from 'sweetalert2';
import { useSignupMutation } from '@/redux/features/auth/auth';
import { setUser } from '@/redux/store';
import { useRouter } from 'next/navigation';

interface SignupFormData {
  email: string;
  password: string;
}

const SignupForm: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<SignupFormData>();
  const [signup, { isLoading, isError, error }] = useSignupMutation();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<SignupFormData> = async (data) => {
    const result = await signup(data);

    if ('error' in result) {
      Swal.fire({
        icon: 'error',
        text: 'Something went wrong!',
        title: "This email is already used."
      });
    } else {
      dispatch(setUser(result.data));
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your account is created.",
        showConfirmButton: false,
        timer: 1500
      });
      reset();
      router.push('/');
    }
  };

  return (
    <div className="max-w-md mx-auto py-10">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 border-2 rounded-[10px] shadow-lg">
        <h2 className="text-3xl mb-4 text-center font-bold">Sign Up Form</h2>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-base">Email <sup className='text-md text-[#fd3d57]'>*</sup></label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            placeholder='Enter your email....'
            className="w-full p-2 border-2 rounded-lg"
          />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
        </div>
        <div className="mb-4 relative">
          <label className="block mb-2 text-base font-bold">Password <sup className='text-red-500'>*</sup></label>
          <input
            {...register('password', { required: 'Password is required' })}
            type={showPassword ? "text" : "password"}
            placeholder='Enter your password....'
            className="w-full p-2 border-2 rounded-lg"
          />
          <button type='button' className='absolute top-12 right-3' onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
          {errors.password && <p className="text-red-600">{errors.password.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700 text-lg font-bold"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Sign Up'}
        </button>
        <p className="text-center font-normal text-base pt-2">Already have an Account? <span className="text-red-900 hover:underline font-bold"><Link href='/login'>Login</Link> </span></p>
      </form>
    </div>
  );
};

export default SignupForm;
