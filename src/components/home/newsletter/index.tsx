"use client"
import React from 'react';
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsLetter = () => {
    return (
        <div className='bg-[#f3f3f3] px-12'>
            <div className="lg:flex w-full justify-center items-center overflow-hidden">
                <div data-aos="fade-up" className="lg:w-1/2 w-full">
                    <Image
                        className="lg:h-auto lg:w-auto md:h-60 md:w-72 h-48 w-52  mx-auto hover:scale-105 duration-300 cursor-pointer transition ease-in-out"
                        src="https://i.ibb.co/9ZVR5Lp/mobile-view.png"
                        alt="raf cart image"
                        width={400}
                        height={300}
                    />
                </div>
                <div data-aos="fade-up" className="lg:w-1/2 w-full lg:py-0 p-4">
                    <h3 className="lg:text-3xl text-xl font-bold">Download RAFCART App Now!</h3>
                    <p className="my-3 lg:text-[16px] text-[12px] text-justify">Shopping fastly and easily more with our app. Get a link to download the app on your phone . Samsung Galaxy A37 is a mid-range smartphone designed to offer a blend of performance, features, and affordability.</p>
                    <div className="flex w-full items-center mb-6">
                        <Input className='border lg:w-96 w-full p-4 border-[#fd3d57]' type="email" placeholder="Email Address..." />
                        <Button className='bg-[#fd3d57] py-4' type="submit">Subscribe</Button>
                    </div>
                    <div className="flex justify-start items-center gap-2">
                        <span><Image
                            className='lg:w-52 lg:h-16 w-40 h-12'
                            src="https://i.ibb.co/HGCGLvK/google-play.png"
                            alt="google play"
                            width={100}
                            height={100}
                        /></span>
                        <span><Image
                            className='lg:w-52 lg:h-16 w-40 h-12'
                            src="https://i.ibb.co/Yd3LPVt/app-store.png
                    "
                            alt="App Store"
                            width={100}
                            height={100}
                        /></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;