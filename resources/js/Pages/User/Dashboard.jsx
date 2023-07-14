import PublicLayout from "@/Layouts/PublicLayout";
import UserLayout from "@/Layouts/UserLayout";
import React from "react";

function Dashboard() {
    return <div>Dashboard</div>;
}

export default Dashboard;
Dashboard.layout = (page) => <UserLayout children={page} />;
