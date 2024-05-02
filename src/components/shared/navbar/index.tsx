import React from 'react';
import TopNavbar from './topNavbar';
import BottomNavbar from './bottomNavbar';

const Header = () => {
    return (
        <div className="sticky top-0 z-50">
            
            <TopNavbar/>
            <BottomNavbar/>
        </div>
    );
};

export default Header;



