import Navbar from "@/app/dashboard/navbar/navbar";

const DashboardPage = () => {
    return (
        <div>
            <Navbar />
            <main className="p-4">
                <h1 className="text-2xl font-bold">Welcome to the Dashboard</h1>
            </main>
        </div>
    );
};

export default DashboardPage;