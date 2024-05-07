import Sidebar from '@/components/dashboard/sidebar';
import TopCreateProduct from '@/components/dashboard/topProducts/createProduct';

import React from 'react';

const CreateProduct = () => {
    return (
        <div className='flex mx-10'>
            <div className='w-1/5'>
            <Sidebar/>
            </div>
            <div className='w-4/5'>
            <TopCreateProduct/>
            </div>
            
        </div>
    );
};

export default CreateProduct;