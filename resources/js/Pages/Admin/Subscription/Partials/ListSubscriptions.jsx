import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import React, { Fragment } from "react";
import SubscriptionListMenu from "./SubscriptionListMenu";
import ModalEditSubscription from "./ModalEditSubscription";
import ConfirmDelete from "@/Components/ConfirmDelete";

function ListSubscriptions({ subscriptions }) {
    const [selectedSubscription, setSelectedSubscription] =
        React.useState(null);
    const [openModalEdit, setOpenModalEdit] = React.useState(false);
    const [modalConfirmDelete, setModalConfirmDelete] = React.useState(false);
    return (
        <Fragment>
            {selectedSubscription && (
                <Fragment>
                    <ModalEditSubscription
                        open={openModalEdit}
                        setOpen={setOpenModalEdit}
                        subscription={selectedSubscription}
                    />
                    <ConfirmDelete
                        text={`Apakah anda yakin ingin menghapus langganan ${selectedSubscription.user.email} ?`}
                        urlDelete={`admin/subscriptions/${selectedSubscription.id}`}
                        openConfirmDelete={modalConfirmDelete}
                        setOpenConfirmDelete={setModalConfirmDelete}
                    />
                </Fragment>
            )}
            <Table>
                <TableHeader>
                    <TableRow className="bg-accent">
                        <TableHead>User</TableHead>
                        <TableHead> Paket </TableHead>
                        <TableHead> Status </TableHead>
                        <TableHead>Expired</TableHead>
                        <TableHead> Terakhir Diperbarui </TableHead>
                        <TableHead> Tanggal Mulai </TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {subscriptions.data.map((subscription) => (
                        <TableRow key={subscription.id}>
                            <TableCell>{subscription.user.name}</TableCell>
                            <TableCell>
                                {subscription.package_price.name}
                            </TableCell>
                            <TableCell>
                                <span
                                    className={`${
                                        subscription.is_active
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}
                                >
                                    {subscription.is_active
                                        ? "Aktif"
                                        : "Tidak Aktif"}
                                </span>
                            </TableCell>
                            <TableCell>{subscription.ends_at}</TableCell>
                            <TableCell>{subscription.updated_at}</TableCell>
                            <TableCell>{subscription.created_at}</TableCell>
                            <TableCell>
                                <SubscriptionListMenu
                                    subscription={subscription}
                                    setSelectedSubscription={
                                        setSelectedSubscription
                                    }
                                    setModalConfirmDelete={setModalConfirmDelete}
                                    setOpenModalEdit={setOpenModalEdit}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default ListSubscriptions;
