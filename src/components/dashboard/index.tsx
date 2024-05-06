import React from 'react';
import Sidebar from './sidebar';
import AllProducts from './topProducts/allProducts';

const DashboardPage = () => {
    return (
        <div className='flex'>
            <div className='w-1/5'>
                <Sidebar/>
            </div>
            <div className='w-4/5'>
                <AllProducts/>
            </div>
        </div>
    );
};

export default DashboardPage;