import { Switch } from "@/Components/ui/switch";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import React, { Fragment } from "react";

function ListInvoice({ invoices }) {
    console.log(invoices);
    return (
        <Fragment>
            <Table>
                <TableHeader>
                    <TableRow className="bg-accent">
                        <TableHead>Invoice Number</TableHead>
                        <TableHead>User</TableHead>
                        <TableHead>Package</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead> </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {invoices.data.map((invoice) => (
                        <TableRow key={invoice.id}>
                            <TableCell>{invoice.invoice_number}</TableCell>
                            <TableCell>{invoice.user.email}</TableCell>
                            <TableCell>{invoice.package_price.name}</TableCell>
                            <TableCell>
                                {invoice.total.toLocaleString()}
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center gap-x-1">
                                    <Switch
                                        onClick={() => {}}
                                        checked={invoice.status === "paid"}
                                        id={`status-${invoice.id}`}
                                    />
                                    <span
                                        className={`${
                                            invoice.status === "paid"
                                                ? "text-green-500"
                                                : "text-red-500"
                                        }`}
                                    >
                                        {invoice.status}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell>{invoice.created_at}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default ListInvoice;
