import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import UserLayout from "@/Layouts/UserLayout";
import { Link } from "@inertiajs/react";
import React from "react";

function Show({ subscription }) {
    return (
        <div className="max-w-4xl space-y-6 p-6">
            <div className="space-y-1">
                <CardTitle>Langganan </CardTitle>
                <CardDescription>Informasi langganan anda</CardDescription>
            </div>
            {subscription === null && (
                <div className=" text-muted-foreground  border border-border/90 p-4 rounded-lg">
                    Anda belum pernah berlangganan, langganan anda akan di
                    tampilkan disini jika anda sudah berlangganan. untuk
                    berlangganan anda bisa
                    <Link
                        className="font-poppins font-medium text-sm mx-1 px-2 py-1 bg-accent rounded-lg"
                        href="/pricing"
                    >
                        kunjungi halaman ini
                    </Link>{" "}
                    dan pilih paket yang anda inginkan.
                </div>
            )}
        </div>
    );
}

export default Show;
Show.layout = (page) => <UserLayout children={page} />;
