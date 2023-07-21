import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import FormCreateSerie from "./Partials/FormCreateSerie";

function Create() {
    return (
        <div className="max-w-4xl">
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <CardTitle>Buat Serie</CardTitle>
                    <CardDescription>Buat seri baru</CardDescription>
                </CardHeader>
                <CardContent>
                    <FormCreateSerie />
                </CardContent>
            </Card>
        </div>
    );
}

export default Create;
Create.layout = (page) => <AdminLayout children={page} needFull={false} />;
