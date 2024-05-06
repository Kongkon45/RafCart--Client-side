
import ScrollToTopComponent from "@/common/scrollToTop";
import Whatsapp from "@/common/whatsapp";
import FooterBottom from "@/components/shared/footer/footerBottom";
import FooterTop from "@/components/shared/footer/footerTop";
import Navbar from "@/components/shared/navbar";

const DashboardLayout = ({children}:any) => {
    return (
        <main>
            <Navbar/>
            {children}
            <FooterTop/>
            <FooterBottom />
            
            <div className="flex gap-10">
                <ScrollToTopComponent />
                <Whatsapp/>
            </div>
        </main>
    );
};

export default DashboardLayout;