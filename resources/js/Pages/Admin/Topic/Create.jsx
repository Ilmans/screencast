import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import FormAddTopic from "./Partials/FormAddTopic";
import { Head } from "@inertiajs/react";

function Create() {
    return (
        <div className="max-w-4xl">
            <Head title="Add Topic" />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <CardTitle>Tambah Topik</CardTitle>
                    <CardDescription> Tambahkan topik baru</CardDescription>
                </CardHeader>
                <CardContent>
                    <FormAddTopic />
                </CardContent>
            </Card>
        </div>
    );
}

export default Create;
Create.layout = (page) => <AdminLayout children={page} needFull={false} />;
