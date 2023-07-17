import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import PublicLayout from "@/Layouts/PublicLayout";
import UserLayout from "@/Layouts/UserLayout";
import { Head } from "@inertiajs/react";
import {
    IconArticle,
    IconClockDown,
    IconEyeCog,
    IconFileInvoice,
    IconGraph,
    IconGrillSpatula,
    IconRocket,
} from "@tabler/icons-react";
import React from "react";

function Dashboard({ data }) {
    return (
        <div className="max-w-4xl space-y-4">
            <Head title="My Dashboard" />
            <Card className="shadow-none border-none p-6">
                <CardHeader>
                    <CardTitle>Dashboard</CardTitle>
                    <CardDescription>
                        Semua statistik yang berhubungan dengan akun anda
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="p-6 pt-0 grid grid-cols-3 gap-4">
                <CardDashboard
                    title={"Langganan saya"}
                    value={data.subscription}
                    icon={<IconRocket />}
                />
                <CardDashboard
                    title={"Pengalaman saya"}
                    value={data.experience}
                    icon={<IconGraph />}
                />
                <CardDashboard
                    title={"Tagihan saya"}
                    value={data.invoices}
                    icon={<IconFileInvoice />}
                />
                <CardDashboard
                    title="Artikel saya"
                    value={data.articles_count}
                    icon={<IconArticle />}
                />
                <CardDashboard
                    title="Artikel dilihat"
                    value={data.viewer_articles}
                    icon={<IconEyeCog />}
                />
                <CardDashboard
                    title="Ditambahkan ke tonton nanti"
                    value={data.watch_later}
                    icon={<IconClockDown />}
                />
            </div>
        </div>
    );
}

function CardDashboard({ title, value, icon }) {
    return (
        <div className="rounded-lg text-card-foreground relative border-0 bg-slate-200 p-4 shadow-none dark:bg-slate-900">
            <h4 className="font-mono text-xl">{value}</h4>
            <small className="mt-4 block text-muted-foreground">{title}</small>
            <span className="absolute right-4 top-4 grid h-9 w-10 place-content-center rounded-lg border-t border-transparent bg-accent/50 dark:border-slate-800 dark:shadow">
                {icon}
            </span>
        </div>
    );
}

export default Dashboard;
Dashboard.layout = (page) => <UserLayout children={page} />;
