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
import { Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import ModalAddVideo from "./Partials/ModalAddVideo";

function ManageVideos({ serie, videos }) {
    const [modalFormVideo, setModalFormVideo] = React.useState(false);
    
    return (
        <div className="max-w-4xl">
            <Head title="Manage Video" />

            <ModalAddVideo serie={serie} openModal={modalFormVideo} setOpenModal={setModalFormVideo} />
            <Card className="p-6 space-y-6 border-none">
                <CardHeader>
                    <div className="flex items-center justify-between w-full gap-x-2">
                        <div>
                            <CardTitle>Kelola Video</CardTitle>
                            <CardDescription>
                                Kelola video untuk seri{" "}
                                <strong>{serie.title}</strong>
                                <br></br>
                                Drag and drop untuk mengurutkan video
                            </CardDescription>
                        </div>
                        <Button
                            onClick={() => setModalFormVideo(true)}
                        size="lg" variant="secondary">
                            Tambah Video
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <FormManageVideos videos={videos} />
                </CardContent>
            </Card>
        </div>
    );
}

export default ManageVideos;
ManageVideos.layout = (page) => (
    <AdminLayout children={page} needFull={false} />
);
