import React from 'react';

const History = () => {
    return (
        <div className='lg:flex justify-center items-center w-full gap-20 lg:px-28 px-12 lg:py-10 py-5'>
            <div className='lg:w-1/2 w-full'>
                <h4 className='text-[#fd3d57] lg:text-xl text-md font-semibold lg:mb-4 mb-2'>OUR HISTORY</h4>
                <h2 className='lg:text-2xl md:text-xl text-md font-semibold text-black lg:my-4 my-2'>CREATIVE AND NEW FASHION <br />
                    TRENDS COLLECTION</h2>
                <p className='lg:text-md text-sm text-justify lg:my-4 my-2'>Fashion is a potent visual marker of our times,” says Caroline Stevenson, head of cultural and ... “Trend analysis of any given era will reveal society&apos;s values and aspirations.” ... The urge to creative expression runs deep</p>
                <div className='flex lg:gap-20 gap-10 lg:mt-6 mt-4'>
                    <div>
                        <h3 className='text-[#fd3d57] lg:text-4xl text-2xl font-semibold'>12</h3>
                        <p className='lg:text-md text-sm'>Years Exprience</p>
                    </div>
                    <div>
                        <h3 className='text-[#fd3d57] lg:text-4xl text-2xl font-semibold'>20K</h3>
                        <p className='lg:text-md text-sm'>Happy Customer</p>
                    </div>
                    <div>
                        <h3 className='text-[#fd3d57] lg:text-4xl text-2xl font-semibold'>100%</h3>
                        <p className='lg:text-md text-sm'>Clients Satisfaction</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-1/2 w-full lg:mt-0 mt-6'>
                <img className='w-full h-[400px]' src='https://i.ibb.co/svCdNqG/about-img.jpg' alt='history image' />
            </div>
        </div>
    );
};

export default History;