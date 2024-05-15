import React from 'react';
import { FaRegThumbsUp } from "react-icons/fa";

const Vision = () => {
    return (
        <div className='lg:flex w-full justify-center items-center lg:px-28 gap-20 px-12 lg:pt-10 py-5'>
            <div className='lg:w-1/2 w-full'>
                <img className='w-full h-[400px]' src='https://i.ibb.co/Yhp4xz3/about-img-2.jpg' alt='vision image' />
            </div>
            <div className='lg:w-1/2 w-full lg:mt-0 mt-6'>
                <h4 className='text-[#fd3d57] lg:text-xl text-md font-semibold lg:mb-4 mb-2'>OUR VISION</h4>
                <h2 className='lg:text-2xl md:text-xl text-md text-justify font-semibold text-black lg:my-4 my-2'>OUR VISION IS SIMPLE - WE EXIST TO <br />
                    ACCELERATE OUR CUSTOMERS&apos; PROGRESS</h2>
                <p className='lg:text-md text-sm text-justify lg:my-4 my-2'>we design and deliver our customers’ digital transformation by bringing together their vision with our industry knowledge and deep technological expertise. we design and deliver our customers’ digital transformation.</p>
                <div>
                    <p className='flex items-center lg:gap-3 gap-2 lg:text-md text-sm my-2'><span className='text-[#fd3d57]'><FaRegThumbsUp /></span>We build strong relationships.</p>
                    <p className='flex items-center lg:gap-3 gap-2 lg:text-md text-sm my-2'><span className='text-[#fd3d57]'><FaRegThumbsUp /></span>We encourage initiative and provide opportunity.</p>
                    <p className='flex items-center lg:gap-3 gap-2 lg:text-md text-sm my-2'><span className='text-[#fd3d57]'><FaRegThumbsUp /></span>We embrace change and creativity.</p>
                    <p className='flex items-center lg:gap-3 gap-2 lg:text-md text-sm my-2'><span className='text-[#fd3d57]'><FaRegThumbsUp/></span>We champion an environment of honesty.</p>
                </div>
            </div>
        </div>
    );
};

export default Vision;