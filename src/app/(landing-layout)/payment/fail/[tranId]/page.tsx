import React from 'react';

const PaymentFailPage = ({ params }: any) => {
    console.log(params.tranId);
    return (
        <div className='h-screen flex justify-center items-center text-6xl font-bold'>
            <h2>Payment Fail ! Tay Again?</h2>
        </div>
    );
};

export default PaymentFailPage;