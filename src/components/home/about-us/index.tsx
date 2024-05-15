import React from 'react';
import AboutBanner from './banner';
import Vision from './vision';
import History from './history';

const AboutUs = () => {
    return (
        <div>
            <AboutBanner />
            <History/>
            <Vision/>
        </div>
    );
};

export default AboutUs;