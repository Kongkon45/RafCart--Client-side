"use client"
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const BottomNavbar = () => {
  const carts = useSelector((state:any)=>state.carts.carts)
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log("Search submitted:", data.searchQuery);
    // Handle search submission here
  };

  return (
    <div className="bg-[#fd3d57] text-white">
      <header className="py-3 mx-4 md:mx-10 flex items-center justify-between">
        {/* All Categories Button */}
        <div>
          <button className="bg-gray-800 text-white lg:px-4 px-2 py-1 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            All Categories
          </button>
        </div>

        {/* Search Input */}
        <div className="flex-grow ml-3  mr-2 md:mr-4 md:flex">
          <form onSubmit={handleSubmit(onSubmit)} className="flex items-center lg:w-1/2 w-1/5 lg:mx-auto">
            <input
              type="text"
              {...register("searchQuery")}
              placeholder="Search products..."
              className="flex-grow border text-black border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-1 rounded-r-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Search
            </button>
          </form>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <Link href='/cart' className="flex gap-1 ">
          <AiOutlineShoppingCart  className="h-8 w-8 cursor-pointer text-md font-bold" /><sup className="text-md font-bold mt-2">{ carts.length}</sup>
          </Link>

          {/* Account Icon */}
          <AiOutlineUser className="h-6 w-6 cursor-pointer" />

          {/* Wishlist Icon */}
          <AiOutlineHeart className="h-6 w-6 cursor-pointer" />
        </div>
      </header>
    </div>
  );
};

export default BottomNavbar;
