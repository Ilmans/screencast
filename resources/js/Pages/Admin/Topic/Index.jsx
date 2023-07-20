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
import { IconPlus } from "@tabler/icons-react";
import React from "react";

function Index({ topics }) {
    return (
        <div className="max-w-4xl">
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <div className="flex justify-between">
                        <div>
                            <CardTitle>Seluruh Topik</CardTitle>
                            <CardDescription>
                                Seluruh topik artikel dan serie
                            </CardDescription>
                        </div>
                        <Button
                            size="sm"
                            variant="secondary"
                            className="flex gap-x-1"
                        >
                            <IconPlus className="w-4 h-4" />
                            <span>Tambah Topik</span>
                        </Button>
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
                                                    src={topic.image}
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
