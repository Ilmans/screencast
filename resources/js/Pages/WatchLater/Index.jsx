import ConfirmDelete from "@/Components/ConfirmDelete";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import UserLayout from "@/Layouts/UserLayout";
import { Head, Link } from "@inertiajs/react";
import { IconEye, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";

function Index({ series }) {
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    return (
        <div className="max-w-4xl">
            <Head title="Watch Later" />

            <Card className="md:p-6 space-y-6 border-none">
                <CardHeader>
                    <CardTitle>Tonton Nanti</CardTitle>
                    <CardDescription>
                        Semua tontonan yang pernah kamu tonton akan tersimpan di
                    </CardDescription>
                </CardHeader>
            </Card>

            <ConfirmDelete
                text={`Apakah kamu yakin ingin menghapus serie ini dari daftar tontonan kamu?`}
                urlDelete={`watch_later/${selectedId}`}
                openConfirmDelete={openConfirmDelete}
                setOpenConfirmDelete={setOpenConfirmDelete}
            />

            <div className="mt-6 grid md:grid-cols-3 gap-4">
                {series.data.map((serie) => (
                    <Card key={serie.id} className="p-4 ">
                        <CardHeader>
                            <CardTitle className="text-xs font-poppins font-medium">
                                {serie.serie.title}
                            </CardTitle>
                            <CardDescription className="text-xs font-poppins">
                                Ditambahkan {serie.created_at}
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="flex gap-x-2">
                            <Link
                                href={`/serie/${serie.serie.slug}/${serie.serie.videos[0].order_num}`}
                                size="lg"
                                className="rounded-full py-0.5 text-xs flex w-fit items-center bg-muted px-4 hover:bg-accent justify-between gap-x-2"
                            >
                                <IconEye size={18} />
                                Tonton Sekarang
                            </Link>
                            <button
                                onClick={() => {
                                    setSelectedId(serie.id);
                                    setOpenConfirmDelete(true);
                                }}
                                size="lg"
                                className="rounded-full py-0.5 text-xs flex w-fit items-center text-red-500 px-4 hover:bg-accent justify-between gap-x-2"
                            >
                                <IconTrash size={18} />
                                Hapus
                            </button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Index;
Index.layout = (page) => <UserLayout children={page} needFull={true} />;
