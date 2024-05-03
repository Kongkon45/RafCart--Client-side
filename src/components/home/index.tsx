import React from 'react';
import Shipping from './shipping';
import NewsLetter from './newsletter';
import Category from './categories';
import Offer1 from './offer1'
import Offer2 from './offer2'
import Offer3 from './offer3'
import NewProduct from './new-product';
import TobSellingProducts from './top-selling-products';
import Brands from './brands';

const HomePage = () => {
    return (
        <div>
            <Offer1/>
            <Shipping/>
            <Category/>
            <NewProduct/>
            <Offer2/>
            <TobSellingProducts/>
            <Offer3/>
            <Brands/>
            <NewsLetter/>
        </div>
    );
};

export default HomePage;