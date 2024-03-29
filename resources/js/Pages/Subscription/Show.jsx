import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import UserLayout from "@/Layouts/UserLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";

function Show({ subscription }) {
    return (
        <div className="max-w-4xl space-y-6 md:p-6">
            <Head title="My Subscription" />
            <div className="space-y-1">
                <CardTitle>Langganan </CardTitle>
                <CardDescription>Informasi langganan anda</CardDescription>
            </div>

            {subscription !== null && (
                <Card className="p-6">
                    <CardContent>
                        <ul className="  text-muted-foreground">
                            <li className="grid grid-cols-4 border-b border-t border-border py-4 items-center">
                                <span className="col-span-1 text-sm font-medium">
                                    Paket
                                </span>
                                <span className="font-medium col-start-3 col-span-1 bg-accent rounded-full p-2 w-fit text-xs font-mono">
                                    {subscription.package_price.name}
                                </span>
                            </li>
                            <li className="grid grid-cols-4 border-b border-t border-border py-4 items-center">
                                <span className="col-span-1 text-sm font-medium">
                                    Dimulai
                                </span>
                                <span className="font-medium col-start-3 col-span-1  text-xs font-mono">
                                    {subscription.created_at}
                                </span>
                            </li>
                            <li className="grid grid-cols-4 border-b border-t border-border py-4 items-center">
                                <span className="col-span-1 text-sm font-medium">
                                    Berakhir pada
                                </span>
                                <span className="font-medium col-start-3 col-span-1  text-xs font-mono">
                                    {subscription.ends_at}
                                </span>
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            )}
            {subscription === null && (
                <div className=" text-muted-foreground  border border-border/90 p-4 rounded-lg">
                    Anda belum pernah berlangganan, langganan anda akan di
                    tampilkan disini jika anda sudah berlangganan. untuk
                    berlangganan anda bisa
                    <Link
                        className="  font-medium text-sm mx-1 px-2 py-1 bg-accent rounded-lg"
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
