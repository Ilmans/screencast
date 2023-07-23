import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import React, { Fragment } from "react";

function ListSubscriptions({ subscriptions }) {
    return (
        <Fragment>
            <Table>
                <TableHeader>
                    <TableRow className="bg-accent">
                        <TableHead>User</TableHead>
                        <TableHead> Paket </TableHead>
                        <TableHead> Status </TableHead>
                        <TableHead>Expired</TableHead>
                        <TableHead> Terakhir Diperbarui </TableHead>
                        <TableHead> Tanggal Mulai </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {subscriptions.data.map((subscription) => (
                        <TableRow key={subscription.id}>
                            <TableCell>{subscription.user.name}</TableCell>
                            <TableCell>{subscription.package_price.name}</TableCell>
                            <TableCell>
                                <span className={`${subscription.is_active ? "text-green-500" : "text-red-500"}`}>
                                    {subscription.is_active ? "Aktif" : "Tidak Aktif"}
                                </span>
                            </TableCell>
                            <TableCell>{subscription.ends_at}</TableCell>
                            <TableCell>{subscription.updated_at}</TableCell>
                            <TableCell>{subscription.created_at}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default ListSubscriptions;
