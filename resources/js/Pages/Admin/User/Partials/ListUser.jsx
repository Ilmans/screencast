import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import React from "react";

function ListUser({ users }) {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-accent">
                    <TableCell>#</TableCell>
                    <TableCell>Nama</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Langganan</TableCell>
                    <TableCell>Total Artikel</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.data.map((user, index) => (
                    <TableRow key={user.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                            <span
                                className={`${
                                    user.isHaveActiveSubscription
                                        ? "text-green-500"
                                        : "text-red-500"
                                }`}
                            >
                                {user.isHaveActiveSubscription
                                    ? "Aktif"
                                    : "Tidak Aktif"}
                            </span>
                        </TableCell>
                        <TableCell className="font-mono">{user.articles_count}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default ListUser;
