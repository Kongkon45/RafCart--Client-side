"use client"
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { useForm } from "react-hook-form";


const BottomNavbar = () => {
    const { register, handleSubmit } = useForm();

  const onSubmit = (data:any) => {
    console.log("Search submitted:", data.searchQuery);
    // Handle search submission here
  };
  return (
    <div className="bg-[#fd3d57] text-white">
        <header className=" py-4 flex items-center justify-between mx-10">
      
        {/* All Categories Button */}
        <div>
          <button className="bg-gray-800 text-white px-4 py-1 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            All Categories
          </button>
        </div>
       {/* Search Input */}
       <div className="ml-4 flex items-center space-x-4">
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("searchQuery")}
              placeholder="Search products..."
              className="border text-black border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500"
            />
            <button type="submit" className="bg-gray-800 text-white px-4 py-1 rounded-r-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
              Search
            </button>
          </form>
        </div>
    
     {/* Icons */}
     <div className="mr-4 flex items-center space-x-4">
        {/* Cart Icon */}
        <AiOutlineShoppingCart className="h-6 w-6 cursor-pointer" />

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
