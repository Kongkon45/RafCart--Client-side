
import React from 'react';
import Image from "next/image";

const Offer3 = () => {
    return (
        <div className="mt-6 flex justify-center items-cneter gap-6 px-12 overflow-hidden">
            <div data-aos="fade-up" className="w-1/2 overflow-hidden">
                <Image
                  className="w-full lg:h-60 h-20 mx-auto hover:scale-105 duration-300 cursor-pointer transition ease-in-out"
                  src="https://i.ibb.co/Cn9WJML/Realme-12-Pro-Plus.webp"
                  alt="offer i-phone-15"
                  width={700}
                  height={500}
                />
            </div>
            <div data-aos="fade-up" className="w-1/2 overflow-hidden">
                <Image
                  className="w-full lg:h-60 h-20 mx-auto hover:scale-105 duration-300 cursor-pointer transition ease-in-out"
                  src="https://i.ibb.co/cCp2SBh/Mac-Book-Air-M2.webp"
                  alt="offer i-phone-15"
                  width={700}
                  height={500}
                />

            </div>
        </div>
    );
};

export default Offer3;