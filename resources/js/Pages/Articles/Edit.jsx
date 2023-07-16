import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import UserLayout from "@/Layouts/UserLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import FormEditArticle from "./partials/FormEditArticle";

function Edit({ article }) {
    return (
        <div className="max-w-4-xl">
            <Head title="Edit Artikel" />

            <Card className="p-6 space-y-6">
                <CardHeader>
                    <CardTitle>Edit Artikel</CardTitle>
                    <CardDescription>
                        Anda sedang mengedit artikel{" "}
                        <span className="font-semibold">{article.title}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <FormEditArticle article={article} />
                </CardContent>
            </Card>
        </div>
    );
}

export default Edit;
Edit.layout = (page) => <UserLayout children={page} />;
