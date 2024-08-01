"use client"
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const PaymentFailPage = ({ params }: any) => {
    console.log(params.tranId);

    useEffect(()=>{
        if(params){
            Swal.fire({
                icon: "error",
                title: "Payment Fail ! Tay Again?",
                text: "Something went wrong!",
              });
        }
    }, [params])
    return (
        <div className='h-screen flex justify-center items-center text-2xl font-bold'>
            <h2>Payment Fail ! Tay Again?</h2>
        </div>
    );
};

export default PaymentFailPage;