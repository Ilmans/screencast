import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import UserLayout from "@/Layouts/UserLayout";
import { Head, usePage } from "@inertiajs/react";
import React from "react";
import FormArticle from "./partials/FormArticle";

function Create() {

    return (
        <div className="max-w-4xl  sm:px-6 lg:px-8 space-y-6 border-border/90 ">
            <Head title="Create Article" />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <CardTitle>Buat Artikel</CardTitle>
                    <CardDescription>
                        Buat artikel baru untuk dibagikan kepada pengguna lain.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FormArticle />
                </CardContent>
            </Card>
        </div>
    );
}

export default Create;
Create.layout = (page) => <UserLayout children={page} />;
