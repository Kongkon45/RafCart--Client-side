import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

const DashboardLayout = ({children}:any) => {
    return (
        <main>
            <Navbar/>
            {children}
            <Footer/>
        </main>
    );
};

export default DashboardLayout;