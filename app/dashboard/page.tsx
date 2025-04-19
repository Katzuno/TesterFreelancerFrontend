import Navbar from "@/app/dashboard/navbar/navbar";
import FirstCallToAction from "@/app/dashboard/firstCallToAction/firstCallToAction";
import Footer from "@/app/dashboard/footer/footer";

const DashboardPage = () => {
    return (
        <div>
            <Navbar />
            <FirstCallToAction />
            <Footer />
        </div>
    );
};

export default DashboardPage;