import FooterBottom from "@/components/shared/footer/footerBottom";
import FooterTop from "@/components/shared/footer/footerTop";
import Navbar from "@/components/shared/navbar";

const DashboardLayout = ({children}:any) => {
    return (
        <main>
            <Navbar/>
            {children}
            <FooterTop/>
            <FooterBottom/>
            
        </main>
    );
};

export default DashboardLayout;