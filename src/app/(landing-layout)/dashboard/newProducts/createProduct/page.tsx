import Sidebar from '@/components/dashboard/sidebar';
import CreateProduct from '@/components/dashboard/topProducts/createProduct';
import React from 'react';

const TopCreateProduct = () => {
    return (
        <div className='flex mx-10'>
            <div className='w-1/5'>
            <Sidebar/>
            </div>
            <div className='w-4/5'>
            <CreateProduct/>
            </div>
            
        </div>
    );
};

export default TopCreateProduct;