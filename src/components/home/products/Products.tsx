"use client"
import { useGetAllProductsQuery } from '@/redux/features/topProducts/topProductsApi';
import { IoMdAddCircle } from "react-icons/io";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaMinus } from "react-icons/fa6";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Slider } from "@/components/ui/slider"


import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '@/redux/features/carts/cartsSlice';


const displays = [
    "PLS LCD",
    "TFT",
    "IPS",
    "AMOLED",
    "Super AMOLED",
    "OLED",
    "Dynamic AMOLED"
];
const rams = [
    "2GB",
    "3GB",
    "4GB",
    "6GB",
    "8GB",
    "12GB",
    "16GB",
    "24GB",
    "18GB"
];
const internalStorages = [
    "32GB",
    "64GB",
    "128GB",
    "256GB",
    "512GB",
    "1TB"
];
const chipsets = [
    "Snapdragon",
    "MediaTek",
    "Exynos",
    "Bionic",
    "Tensor",
    "Kirin",
    "Unisoc",
    "Apple"
];
const regions = [
    "Indian",
    "UK",
    "USE",
    "Japan",
    "International",
    "Singapore",
    "China",
    "Vietnam",
    "Canada",
    "Hong Kong"
]

const ProductsPage = () => {
    const [sliderValue, setSliderValue] = useState([50]);
    const [inputValue1, setInputValue1] = useState(1);
    const [inputValue2, setInputValue2] = useState(1000);
    useEffect(() => {
        setInputValue1(sliderValue[0]);
        setInputValue2(sliderValue[1]);
    }, [sliderValue]);
    const handleSliderChange = (value: any) => {
        setSliderValue(value);

    };

    const handleInputChange1 = (event: any) => {
        setInputValue1(event.target.value);

    };

    const handleInputChange2 = (event: any) => {
        setInputValue2(event.target.value);

    };
    const carts = useSelector((state: any) => state?.carts?.carts)
    const dispatch = useDispatch();

    const { data, isLoading, error } = useGetAllProductsQuery({})
    // console.log("porducts", data?.data);
    return (
        <div className='flex gap-10 m-10'>
            <div className='w-1/5'>
                <div className='border-2 rounded-lg p-4'>
                    <div className='flex justify-between items-center '>
                        <h3 className='text-2xl font-bold '>Price Range</h3>
                        <FaMinus />
                    </div>
                    <hr className='border mt-3' />
                    <Slider
                        className='my-8'
                        value={sliderValue}
                        onValueChange={handleSliderChange}
                        max={1000}
                        step={1}
                    />
                    <div className='flex justify-between items-center gap-10'>
                        <input
                            className='w-1/2 border-2 text-center text-md font-bold rounded-md py-2'
                            type="text"
                            value={inputValue1}
                            onChange={handleInputChange1}
                        />
                        <input
                            className='w-1/2 border-2 text-center text-md font-bold rounded-md py-2'
                            type="text"
                            value={inputValue2}
                            onChange={handleInputChange2}
                        />
                    </div>
                </div>

                <Accordion type="single" collapsible className="w-full mt-10">
                    <AccordionItem value="item-1" className='border-2 px-3 rounded-lg my-4'>
                        <AccordionTrigger className='text-md font-semibold'>Display Type</AccordionTrigger>
                        <AccordionContent>
                            {displays.map((display, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name="display"
                                        value={display}
                                    />
                                    <label>{display}</label>
                                    <br />
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2" className='border-2 px-3 rounded-lg my-4'>
                        <AccordionTrigger className='text-md font-semibold'>Ram</AccordionTrigger>
                        <AccordionContent>
                            {rams.map((ram, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name="display"
                                        value={ram}
                                    />
                                    <label>{ram}</label>
                                    <br />
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3" className='border-2 px-3 rounded-lg my-4'>
                        <AccordionTrigger className='text-md font-semibold'>Internal Storage</AccordionTrigger>
                        <AccordionContent>
                            {internalStorages.map((internalStorage, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name="display"
                                        value={internalStorage}
                                    />
                                    <label>{internalStorage}</label>
                                    <br />
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4" className='border-2 px-3 rounded-lg my-4' >
                        <AccordionTrigger className='text-md font-semibold'>Chipset</AccordionTrigger>
                        <AccordionContent>
                            {chipsets.map((chipset, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name="display"
                                        value={chipset}
                                    />
                                    <label>{chipset}</label>
                                    <br />
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5" className='border-2 px-3 rounded-lg mt-4'>
                        <AccordionTrigger className='text-md font-semibold'>Region</AccordionTrigger>
                        <AccordionContent>
                            {regions.map((region, index) => (
                                <div key={index} className="mb-3">
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        name="display"
                                        value={region}
                                    />
                                    <label>{region}</label>
                                    <br />
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className='w-4/5 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6'>
                {
                    data?.data?.map((product: any) => {
                        const isInCart = carts.find((cart:any)=> cart._id === product._id);
                        return <div key={product._id} className='w-52 h-80 border rounded-lg shadow-md'>
                            <Image className='w-full h-52 mx-auto ' src={`${product.image}`} alt={`${product.title}`} width={100} height={100} />
                            <div className='text-center px-2 pb-4'>
                                <h3 className='text-2xl font-bold '>{product.title}</h3>
                                <p className='text-xl font-semibold'>Price : ${product.price}</p>
                                <div className="flex justify-between items-center mx-6 mt-2">
                                    <button className="text-sm font-semibold hover:bg-[#fd3d57] hover:text-white border border-[#fd3d57] rounded-lg text-[#fd3d57] py-1 px-2 transition-all ease-in-out delay-500 duration-700"><Link href={`/products/${product?._id}`}>View Details</Link></button>

                                    <button onClick={() => dispatch(addCart(product))} disabled={isInCart} className={`rounded-full border-2 text-[#fd3d57] py-1 px-1 transition-all ease-in-out duration-700 ${isInCart ? "bg-gray-300 text-black border-black" : "hover:bg-[#fd3d57] hover:text-white border-[#fd3d57]"}`}><IoMdAddCircle /></button>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default ProductsPage;