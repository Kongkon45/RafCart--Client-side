import React from 'react';
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { Ri24HoursFill } from "react-icons/ri";

const Shipping = () => {
    return (
        <div className='lg:flex justify-center items-center gap-6 py-8'>
      <div className='lg:w-1/4 w-full flex justify-center items-center gap-5 py-4 px-10 rounded-md border border-[#fd3d57]'>
          <div className='text-4xl text-[#fd3d57]'>
          <MdOutlineLocalShipping />
          </div>
          <div>
              <h3 className='text-xl font-semibold'>Free Shipping</h3>
              <p className='text-md'>Order over $200</p>
          </div>
      </div>

      <div className='lg:w-1/4 w-full my-6 flex justify-center items-center gap-5 py-4 px-10 rounded-md border border-[#fd3d57]'>
          <div className='text-4xl text-[#fd3d57]'>
          <FaHandHoldingDollar />
          </div>
          <div>
              <h3 className='text-xl font-semibold'>Money Returns</h3>
              <p className='text-md'>30 Days money return</p>
          </div>
      </div>

      <div className='lg:w-1/4 w-full flex justify-center items-center gap-5 py-4 px-10 rounded-md border border-[#fd3d57]'>
          <div className='text-4xl text-[#fd3d57]'>
          <Ri24HoursFill />
          </div>
          <div>
              <h3 className='text-xl font-semibold'>24/7 Support</h3>
              <p className='text-md'>Customer support</p>
          </div>
      </div>
    </div>
    );
};

export default Shipping;