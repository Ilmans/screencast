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
import { Tab } from "@headlessui/react";
import { Head } from "@inertiajs/react";
import React from "react";
import ModalAddPackage from "./Partials/ModalAddPackage";
import { Button } from "@/Components/ui/button";

function Index({ packagePrices }) {
    const [showAddModal, setShowAddModal] = React.useState(false);
    return (
        <div className="max-w-4xl">
            <Head title="Packages" />
            <ModalAddPackage
                openModal={showAddModal}
                setOpenModal={setShowAddModal}
            />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Daftar harga</CardTitle>
                            <CardDescription>
                                Daftar harga langganan
                            </CardDescription>
                        </div>
                        <div>
                            <Button
                                size="lg"
                                onClick={() => setShowAddModal(true)}
                            >
                                Tambah Paket
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-accent">
                                <TableHead>Nama</TableHead>
                                <TableHead>Harga</TableHead>
                                <TableHead>Durasi (bulan)</TableHead>
                                <TableHead>Deskripsi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {packagePrices.map((packagePrice) => (
                                <TableRow key={packagePrice.id}>
                                    <TableCell>{packagePrice.name}</TableCell>
                                    <TableCell>{packagePrice.price}</TableCell>
                                    <TableCell>
                                        {packagePrice.duration_months}
                                    </TableCell>
                                    <TableCell>
                                        {packagePrice.description}
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
