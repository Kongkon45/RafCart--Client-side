import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { IoHome } from "react-icons/io5";

const ContactBanner = () => {
    return (
        <div className='relative flex justify-center items-center'>
            <h3 className='absolute text-white lg:text-3xl text-2xl font-bold'>Contact Us</h3>
            <h5 className='flex justify-center items-center mt-20 absolute text-white lg:text-xl text-md font-bold'> <Link className='text-[#fd3d57]' href='/'><IoHome/></Link> <span className='mx-2'><IoIosArrowForward /></span> <Link className='hover:underline' href='/contact-us'>Contact Us</Link></h5>
            <img src="https://i.ibb.co/S6b1CWm/contact-banner.jpg" alt="about us banner image" />
        </div>
    );
};

export default ContactBanner;