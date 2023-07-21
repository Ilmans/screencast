import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import FormAddTopic from "./Partials/FormAddTopic";
import { Head } from "@inertiajs/react";
import FormEditTopic from "./Partials/FormEditTopic";

function Edit({topic}) {
    return (
        <div className="max-w-4xl">
            <Head title="Edit Topic" />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <CardTitle>Edit Topik</CardTitle>
                    <CardDescription> Edit topik {topic.name} </CardDescription>
                </CardHeader>
                <CardContent>
                    <FormEditTopic topic={topic} />
                </CardContent>
            </Card>
        </div>
    );
}

export default Edit;
Edit.layout = (page) => <AdminLayout children={page} needFull={false} />;
