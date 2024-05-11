import React from 'react';
import Image from "next/image";

const Offer2 = () => {
    return (
        <div className='px-12'>
            <div data-aos="fade-up" className="overflow-hidden">
            <Image
                className="w-full lg:h-60 h-auto mx-auto hover:scale-105 duration-300 cursor-pointer transition ease-in-out"
                src="https://i.ibb.co/M9dbW1j/Get-the-i-Phone-15-Pro-Max.webp"
                alt="offer i-phone-15"
                width={700}
                height={500}
            />
        </div>
        </div>
    );
};

export default Offer2;