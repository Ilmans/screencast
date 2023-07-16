import Pagination from "@/Components/Page/Pagination";
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
import UserLayout from "@/Layouts/UserLayout";
import { Link } from "@inertiajs/react";
import React from "react";

function Index({ invoices }) {
    return (
        <div className="max-w-4xl">
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <CardTitle>Invoices</CardTitle>
                    <CardDescription>
                        Seluruh invoice anda akan ditampilkan disini
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader className="bg-accent">
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Deskripsi</TableHead>
                                <TableHead>Total</TableHead>

                                <TableHead>Status</TableHead>
                                <TableHead>Created At</TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {invoices.data.map((invoice, i) => (
                                <TableRow key={invoice.id}>
                                    <TableCell>
                                        {invoice.invoice_number}
                                    </TableCell>
                                    <TableCell>
                                        Paket {invoice.package_price.name}
                                    </TableCell>
                                    <TableCell className="font-mono">
                                        Rp {invoice.total.toLocaleString()}
                                    </TableCell>
                                    <TableCell>
                                        <span
                                            className={`${
                                                invoice.paid_at !== null
                                                    ? "bg-green-500 text-white"
                                                    : "bg-red-500 text-white"
                                            } px-2 py-1 rounded-full text-xs font-mono`}
                                        >
                                            {invoice.paid === 1
                                                ? "Paid"
                                                : "Unpaid"}
                                        </span>
                                    </TableCell>
                                    <TableCell>{invoice.created_at}</TableCell>
                                    <TableCell>
                                        <Link
                                            href={`/invoice/${invoice.id}`}
                                            className="text-accent bg-blue-600 px-2 py-1 rounded-full text-xs font-muted-foreground font-mono hover:text-muted hover:bg-blue-900"
                                        >
                                            Lihat
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <div className="mt-4">
                        <Pagination links={invoices.links} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Index;
Index.layout = (page) => <UserLayout children={page} needFull={true} />;
