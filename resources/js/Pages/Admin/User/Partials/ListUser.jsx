import { Input } from "@/Components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import React, { Fragment, useEffect } from "react";
import UserListMenu from "./UserListMenu";
import ModalEditUser from "./ModalEditUser";

function ListUser({ users }) {
    const [selectedUser, setSelectedUser] = React.useState(null);
    const [openModalEditUser, setOpenModalEditUser] = React.useState(false);

    useEffect(() => {
        if (selectedUser) {
            setOpenModalEditUser(true);
        }
    }, [selectedUser]);
    return (
        <Fragment>
            {selectedUser && (
                <ModalEditUser
                    user={selectedUser}
                    open={openModalEditUser}
                    setOpen={setOpenModalEditUser}
                />
            )}
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
                            <TableCell className="font-mono">
                                {user.articles_count}
                            </TableCell>
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
        </Fragment>
    );
}

export default ListUser;
