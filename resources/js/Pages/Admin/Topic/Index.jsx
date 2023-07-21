import ConfirmDelete from "@/Components/ConfirmDelete";
import Pagination from "@/Components/Page/Pagination";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import { IconEdit, IconPlus, IconTrash } from "@tabler/icons-react";
import React, { useState } from "react";

function Index({ topics }) {
    const [selectedTopic,setSelectedTopic] = useState(null)
    const [openConfirmDelete,setOpenConfirmDelete] = useState(false)
    return (
        <div className="max-w-4xl">
            <Head title="Topics" />
            <ConfirmDelete
                text={`Apakah anda yakin ingin menghapus topik "${selectedTopic?.name}" ?`}
                urlDelete={"admin/topics/" + selectedTopic?.id}
                openConfirmDelete={openConfirmDelete}
                setOpenConfirmDelete={setOpenConfirmDelete}
            />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <div className="flex justify-between">
                        <div>
                            <CardTitle>Seluruh Topik</CardTitle>
                            <CardDescription>
                                Seluruh topik artikel dan serie
                            </CardDescription>
                        </div>
                        <Link href={route("admin.topics.create")}>
                            <Button
                                size="sm"
                                variant="secondary"
                                className="flex gap-x-1"
                            >
                                <IconPlus className="w-4 h-4" />
                                <span>Tambah Topik</span>
                            </Button>
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader className="bg-accent">
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {topics.data.map((topic, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        {topic.image ? (
                                            <div>
                                                <img
                                                    src={"/images/topics/" + topic.image}
                                                    alt=""
                                                    className="w-10 h-10 rounded-full"
                                                />
                                            </div>
                                        ) : (
                                            "No image"
                                        )}
                                    </TableCell>
                                    <TableCell className={`font-mono`}>
                                        {topic.name}
                                    </TableCell>
                                    <TableCell
                                        className={` ${
                                            topic.type == "serie"
                                                ? "text-green-500"
                                                : "text-blue-500"
                                        }`}
                                    >
                                        {topic.type}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center justify-center gap-x-2">
                                            <Link href={route('admin.topics.edit',topic.id)} className="text-yellow-500">
                                                <IconEdit className="w-5 h-5" />
                                                
                                            </Link>
                                            <button
                                                onClick={() => {
                                                    setSelectedTopic(topic)
                                                    setOpenConfirmDelete(true)
                                                }}
                                            >
                                                <IconTrash className="w-5 h-5 text-red-400" />
                                            </button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="mt-6">
                        <Pagination links={topics.links} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Index;
Index.layout = (page) => <AdminLayout children={page} needFull={false} />;
