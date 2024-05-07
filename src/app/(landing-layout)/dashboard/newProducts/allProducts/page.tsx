import NewAllProducts from '@/components/dashboard/newProducts/allProducts';
import Sidebar from '@/components/dashboard/sidebar';

import React from 'react';

const AllProducts = () => {
    return (
        <div className='flex mx-10'>
        <div className='w-1/5'>
        <Sidebar/>
        </div>
        <div className='w-4/5'>
        <NewAllProducts/>
        </div>
        
    </div>
    );
};

export default AllProducts;