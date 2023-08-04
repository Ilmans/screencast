import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";
import ModalAddPage from "./Partials/ModalAddPage";
import ConfirmDelete from "@/Components/ConfirmDelete";
import { IconTrash } from "@tabler/icons-react";

function Index({ pages }) {
    const [showModalAddPage, setShowModalAddPage] = useState(false);
    const [selectedPage, setSelectedPage] = useState(null);
    const [modalConfirmDelete, setModalConfirmDelete] = useState(false);
    return (
        <div className="max-w-4xl">
            <Head title="pages" />

            {selectedPage && (
                <ConfirmDelete
                    text={`Anda yaking ingin menghapus page yang dipilih ( ${selectedPage.title} ) ?`}
                    urlDelete={`admin/pages/${selectedPage.id}`}
                    openConfirmDelete={modalConfirmDelete}
                    setOpenConfirmDelete={setModalConfirmDelete}
                />
            )}

            <ModalAddPage
                openModal={showModalAddPage}
                setOpenModal={setShowModalAddPage}
            />
            <Card className="p-6 space-y-6">
                <CardHeader className="">
                    <div className="flex items-center justify-between">
                        <CardTitle>Halaman</CardTitle>
                        <Button
                            onClick={() => setShowModalAddPage(true)}
                            size="lg"
                            variant="secondary"
                        >
                            Tambah halaman
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-accent">
                                <TableHead>Judul</TableHead>
                                <TableHead>Created at</TableHead>
                                <TableHead>#</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pages.map((page) => (
                                <TableRow key={page.id}>
                                    <TableCell>{page.title}</TableCell>
                                    <TableCell>{page.created_at}</TableCell>
                                    <TableCell>
                                        <button onClick={() => {
                                            setSelectedPage(page)
                                            setModalConfirmDelete(true)
                                        }}>
                                                <IconTrash className="w-4 h-4 text-red-500" />
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

export default Index;
Index.layout = (page) => <AdminLayout children={page} />;
