import ScrollToTopComponent from '@/common/scrollToTop';
import FooterBottom from '@/components/shared/footer/footerBottom';
import FooterTop from '@/components/shared/footer/footerTop';
import Header from '@/components/shared/navbar';
import React from 'react';

const AuthLayout = ({children}:any) => {
    return (
        <main>
            <Header />
            {children}
            <FooterTop />
            <FooterBottom />
            <ScrollToTopComponent/>
        </main>
    );
};

export default AuthLayout;