import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import {
    IconBook,
    IconCashBanknote,
    IconCashOff,
    IconRss,
    IconUser,
    IconVideo,
} from "@tabler/icons-react";
import React from "react";

function Dashboard({ data }) {
    return (
        <div className="max-w-4xl space-y-4">
            <Head title="Admin Dashboard" />
            <Card className="border-none shadow-none md:p-6 ">
                <CardHeader>
                    <CardTitle>Admin Dashboard</CardTitle>
                    <CardDescription>semua statistik</CardDescription>
                </CardHeader>
            </Card>

            <div className="grid gap-4 pt-0 md:p-6 md:grid-cols-3">
                <CardDashboard
                    title={"Total User"}
                    value={data.total_users}
                    icon={<IconUser />}
                />
                <CardDashboard
                    title={"Total Serie"}
                    value={data.total_series}
                    icon={<IconVideo />}
                />
                <CardDashboard
                    title={"Total Artikel"}
                    value={data.total_articles}
                    icon={<IconBook />}
                />
                <CardDashboard
                    title={"Invoice Paid"}
                    value={data.invoice_paid}
                    icon={<IconCashBanknote />}
                />
                <CardDashboard
                    title={"Invoice Unpaid"}
                    value={data.invoice_unpaid}
                    icon={<IconCashOff />}
                />
                <CardDashboard
                    title={"Langganan Aktif User"}
                    value={data.total_subscription}
                    icon={<IconRss />}
                />
            </div>
        </div>
    );
}

function CardDashboard({ title, value, icon }) {
    return (
        <div className="relative p-4 border-0 rounded-lg shadow-none text-card-foreground bg-slate-200 dark:bg-slate-900">
            <h4 className="font-mono text-xl">{value}</h4>
            <small className="block mt-4 text-muted-foreground">{title}</small>
            <span className="absolute grid w-10 border-t border-transparent rounded-lg right-4 top-4 h-9 place-content-center bg-accent/50 dark:border-slate-800 dark:shadow">
                {icon}
            </span>
        </div>
    );
}

export default Dashboard;
Dashboard.layout = (page) => <AdminLayout children={page} />;
