import React from 'react';

const PaymentSuccessSinglePage = ({ params }: any) => {
    console.log(params);
    return (
        <div className='h-screen flex justify-center items-center text-6xl font-bold'>
            Payment successfully
        </div>
    );
};

export default PaymentSuccessSinglePage;