import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import ListSubscriptions from "./Partials/ListSubscriptions";
import Pagination from "@/Components/Page/Pagination";

function Index({subscriptions}) {
    return (
        <div className="max-w-4xl">
            <Head title="Subscriptions" />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <CardTitle>Langganan pengguna</CardTitle>
                    <CardDescription>
                        Seluruh langganan pengguna
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ListSubscriptions subscriptions={subscriptions} />
                    <div className="mt-4">
                        <Pagination links={subscriptions.links} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Index;
Index.layout = (page) => <AdminLayout children={page} needFull={true} />;
