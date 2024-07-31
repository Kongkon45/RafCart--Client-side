"use client"
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';

const PaymentSuccessSinglePage = ({ params }: any) => {
    console.log(params);

    useEffect(() => {
        if (params) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Payment successfully.",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }, [params]);
    return (
        // <div className='h-screen flex justify-center items-center text-6xl font-bold'>
        //     Payment successfully
            
        // </div>
        <div>

        </div>
    );
};

export default PaymentSuccessSinglePage;