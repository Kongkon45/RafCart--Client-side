import React from 'react';
import Shipping from './shipping';
import NewsLetter from './newsletter';
import Offer1 from './offer1'
import NewProduct from './new-product';
import TobSellingProducts from './top-selling-products';

const HomePage = () => {
    return (
        <div>
            <Shipping/>
            <NewProduct/>
            <Offer1/>
            <TobSellingProducts/>
            <NewsLetter/>
        </div>
    );
};

export default HomePage;