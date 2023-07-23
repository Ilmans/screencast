import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import React from "react";
import UserListMenu from "./UserListMenu";

function ListUser({ users ,
    setSelectedUser,
}) {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-accent">
                    <TableCell>#</TableCell>
                    <TableCell>Nama</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Langganan</TableCell>
                    <TableCell>Total Artikel</TableCell>
                    <TableCell>Created at</TableCell>
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
                        <TableCell>{user.created_at}</TableCell>
                        <TableCell>
                            <UserListMenu 
                                user={user}
                                setSelectedUser={setSelectedUser}
                             />
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default ListUser;
