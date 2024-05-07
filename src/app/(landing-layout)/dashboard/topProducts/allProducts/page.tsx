import Sidebar from '@/components/dashboard/sidebar';
import TopAllProducts from '@/components/dashboard/topProducts/allProducts';

import React from 'react';

const AllProducts = () => {
    return (
        <div className='flex mx-10'>
        <div className='w-1/5'>
        <Sidebar/>
        </div>
        <div className='w-4/5'>
        <TopAllProducts/>
        </div>
        
    </div>
    );
};

export default AllProducts;