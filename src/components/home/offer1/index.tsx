import React from 'react';
import Image from "next/image";

const Offer1 = () => {
    return (
        <div className="mt-6 flex justify-center items-center gap-6 px-12 overflow-hidden ">
            <div data-aos="fade-up" className="w-1/2 overflow-hidden">
                <Image
                  className="w-full lg:h-60 h-auto mx-auto hover:scale-105 duration-300 cursor-pointer transition ease-in-out"
                  src="https://i.ibb.co/0mYVtc3/Galaxy-A55.webp"
                  alt="offer i-phone-15"
                  width={700}
                  height={500}
                />
            </div>
            <div data-aos="fade-up" className="w-1/2 overflow-hidden">
                <Image
                  className="w-full lg:h-60 h-auto mx-auto hover:scale-105 duration-300 cursor-pointer transition ease-in-out"
                  src="https://i.ibb.co/8958yXX/Xiaomi-Pad-6.webp"
                  alt="offer i-phone-15"
                  width={700}
                  height={500}
                />

            </div>
        </div>
    );
};

export default Offer1;