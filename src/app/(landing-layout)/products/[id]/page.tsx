import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { FaAngleDoubleRight } from "react-icons/fa";

import products from "../../../../products.json"
// console.log(products)
const productDetailsPage = ({params}:any) => {
    const {id} = params;
    // console.log(id)
    const filterProduct = products?.find((product)=>product.id == id );
    // console.log(filterProduct)
    return (
        <div>
            <div className="flex justify-between  items-center my-6 mx-10">
                <h3 className="text-2xl font-bold">Single Product page</h3>
                <button className="flex justify-center items-center gap-2 text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-4 transition-all ease-in-out duration-700"><Link href={`/`}>Back</Link><FaAngleDoubleRight/></button>
            </div>
            {
                filterProduct ? (
                    <div className="flex justify-center items-center gap-10 mx-10">
                        <div className="w-1/2">
                        <Image
                        className="w-full h-96 mx-auto hover:scale-125 duration-300 cursor-pointer transtion ease-in-out"
                        src={filterProduct?.images}
                        alt={filterProduct?.title}
                        width={500}
                        height={500}
                        />
                        </div>
                        <div className="w-1/2">
                        <h2 className="text-3xl font-bold ">Title : {filterProduct?.title}</h2>
                        <h4 className="text-2xl font-bold">Price : ${filterProduct?.price}</h4>
                        <p className="text-md font-semibold"><span className="text-2xl font-bold">Description :</span> {filterProduct?.description}</p>
                        <p className="text-2xl font-bold">Rating : {filterProduct?.rating}</p>
                        <p className="text-xl font-bold">Stock : {filterProduct?.stock}</p>
                        <p className="text-xl font-bold">Category : {filterProduct?.category}</p>
                        </div>
                        
                    </div>
                ):(
                    <div>
                        <h2>Product Not Found </h2>
                    </div>
                )
            }
        </div>
    );
};

export default productDetailsPage;