import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import General from "./Partials/General";
import Socials from "./Partials/Socials";

function Index({website}) {
    return (
        <div className="max-w-4xl space-y-4">
            <CardHeader>
                <CardTitle>Setting Website</CardTitle>
                <CardDescription>Pengaturan website andaa</CardDescription>
            </CardHeader>
            <div className="grid grid-cols-2 gap-x-1">
                <General website={website} />
                <Socials website={website} />
            </div>
        </div>
    );
}

export default Index;
Index.layout = (page) => <AdminLayout children={page} needFull={true} />;
