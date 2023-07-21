import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import FormManageVideos from "./Partials/FormManageVideos";

function ManageVideos({ serie, videos }) {
    return (
        <div className="max-w-4xl">
            <Card className="p-6 space-y-6 border-none">
                <CardHeader>
                    <CardTitle>Kelola Video</CardTitle>
                    <CardDescription>
                        Kelola video untuk seri <strong>{serie.title}</strong><br></br>
                        Drag and drop untuk mengurutkan video
                    </CardDescription>
                </CardHeader>
                <CardContent>
                  <FormManageVideos videos={videos} />
                </CardContent>
            </Card>
        </div>
    );
}

export default ManageVideos;
ManageVideos.layout = (page) => <AdminLayout children={page} needFull={false} />;
