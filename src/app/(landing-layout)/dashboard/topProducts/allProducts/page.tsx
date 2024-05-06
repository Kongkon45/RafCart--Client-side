import Sidebar from '@/components/dashboard/sidebar';
import AllProducts from '@/components/dashboard/topProducts/allProducts';
import React from 'react';

const TopAllProducts = () => {
    return (
        <div className='flex mx-10'>
        <div className='w-1/5'>
        <Sidebar/>
        </div>
        <div className='w-4/5'>
        <AllProducts/>
        </div>
        
    </div>
    );
};

export default TopAllProducts;