import React from 'react';
import Image from 'next/image'
import products from "../../../products.json"

// console.log(products)
const TobSellingProducts = () => {
    
    return (
        <div className="mx-10 mt-6 mb-10">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">Top Selling</h3>
                <button className="hover:bg-orange-500 hover:text-white border border-orange-500 rounded-lg text-orange-500 py-1 px-4">VIEW MORE</button>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10 ">
                {products?.map((product)=>{
                    // console.log(product.images)
                    return <div key={product.id} className="border-2 bg-white rounded-lg shadow-md pt-2 pb-5  text-center">
                        <Image
                        className="w-48 h-48 mx-auto"
                        src={product.images}
                        alt={product.title}
                        width={500}
                        height={500}
                        />
                        <h2 className='text-xl font-bold'>{product.title}</h2>
                        <p className="text-md font-bold">Price : ${product.price}</p>
                    </div>
                })}
            </div>
        </div>
    );
};

export default TobSellingProducts;