
import React from 'react';
import Image from "next/image";

const Offer3 = () => {
    return (
        <div className="mt-6 flex justify-center items-cneter gap-6 mx-10">
            <div className="w-1/2 overflow-hidden">
                <Image
                  className="w-full h-60 mx-auto hover:scale-105 duration-300 cursor-pointer transtion ease-in-out"
                  src="https://i.ibb.co/Cn9WJML/Realme-12-Pro-Plus.webp"
                  alt="offer i-phone-15"
                  width={700}
                  height={500}
                />
            </div>
            <div className="w-1/2 overflow-hidden">
                <Image
                  className="h-60 w-full mx-auto hover:scale-105 duration-300 cursor-pointer transtion ease-in-out"
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