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
import { IconPlus } from "@tabler/icons-react";
import React from "react";
import ModalAddPayment from "./Partials/ModalAddPayment";

function Index({ paymentMethods }) {
    const [modalAdd, setModalAdd] = React.useState(false);
    
    return (
        <div className="max-w-4xl">
            
            <Head title="Payment Methods" />
            <ModalAddPayment openModal={modalAdd} setOpenModal={setModalAdd} />
            <Card className="p-6 space-y-6">
                <CardHeader className="">
                    <div className="flex items-center justify-between">
                        <CardTitle> Metode Pembayaran</CardTitle>
                        <Button
                            onClick={() => setModalAdd(true)}
                            
                        variant="secondary" className="flex items-center gap-x-1">
                            <IconPlus className="w-4 h-4" />
                            <span>Tambah Metode Pembayaran</span>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Nama Bank</TableHead>
                                <TableHead>Atas Nama</TableHead>
                                <TableHead>No. Rekening</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {paymentMethods.map((paymentMethod, index) => (
                                <TableRow key={paymentMethod.id}>
                                    <TableCell>
                                        <img className="rounded-lg" src={`/images/payment-methods/${paymentMethod.logo}`} alt="logo" />
                                    </TableCell>
                                    <TableCell>
                                        {" "}
                                        {paymentMethod.bank_name}
                                    </TableCell>
                                    <TableCell>
                                        {" "}
                                        {paymentMethod.account_name}
                                    </TableCell>
                                    <TableCell>
                                        {" "}
                                        {paymentMethod.account_number}
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
