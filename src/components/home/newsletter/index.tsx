"use client"
import React from 'react';
import Image from 'next/image'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsLetter = () => {
    return (
        <div className="flex justify-center items-center bg-[#f3f3f3] mx-10 overflow-hidden">
            <div data-aos="fade-right" className="w-1/2 ">
            <Image
            className="mx-auto hover:scale-105 duration-300 cursor-pointer transtion ease-in-out"
            src="https://i.ibb.co/9ZVR5Lp/mobile-view.png"
            alt="raf cart image"
            width={400}
            height={300}
            />
            </div>
            <div data-aos="fade-left" className="w-1/2">
                <h3 className="text-3xl font-bold">Download RAFCART App Now!</h3>
                <p className="my-3 text-md">Shopping fastly and easily more with our app. Get a link to <br />  download the app on your phone</p>
                <div className="flex w-full items-center mb-6">
                    <Input className='border w-96 p-4 border-[#fd3d57]' type="email" placeholder="Email Address..." />
                    <Button className='bg-[#fd3d57] py-4' type="submit">Subscribe</Button>
                </div>
                <div className="flex justify-start items-center gap-2">
                    <span><Image
                    src="https://i.ibb.co/HGCGLvK/google-play.png"
                    alt="google play"
                    width={150}
                    height={120}
                    /></span>
                    <span><Image
                    src="https://i.ibb.co/Yd3LPVt/app-store.png
                    "
                    alt="App Store"
                    width={150}
                    height={120}
                    /></span>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;