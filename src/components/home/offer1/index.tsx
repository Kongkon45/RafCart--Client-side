import React from 'react';
import Image from "next/image";

const Offer1 = () => {
    return (
        <div className="mt-6 flex justify-center items-cneter gap-6 mx-10 overflow-hidden ">
            <div data-aos="fade-right" className="w-1/2 overflow-hidden">
                <Image
                  className="hover:scale-105 duration-300 cursor-pointer transtion ease-in-out"
                  src="https://i.ibb.co/0mYVtc3/Galaxy-A55.webp"
                  alt="offer i-phone-15"
                  width={700}
                  height={500}
                />
            </div>
            <div data-aos="fade-left" className="w-1/2 overflow-hidden">
                <Image
                  className="hover:scale-105 duration-300 cursor-pointer transtion ease-in-out"
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