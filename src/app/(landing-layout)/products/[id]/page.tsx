
import SingleProduct from '@/components/home/products/SingleProduct';
import React from 'react';

const ProductDetails = ({params}:any) => {
    return (
        <div>
            <h2 className='text-2xl font-bold text-center mt-4'>Single Product</h2>
            <SingleProduct id={params?.id} />
        </div>
    );
};

export default ProductDetails;