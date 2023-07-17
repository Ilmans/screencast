import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import UserLayout from "@/Layouts/UserLayout";
import { Head } from "@inertiajs/react";
import { IconClock, IconTrash } from "@tabler/icons-react";
import React from "react";
import UnpaidSection from "./Partials/UnpaidSection";
import ConfirmDelete from "../../Components/ConfirmDelete";

function Show({ invoice, paymentMethods }) {
    const [openConfirmDelete, setOpenConfirmDelete] = React.useState(false);
    return (
        <div className="max-w-4xl">
            <Head title={invoice.invoice_number} />
            <ConfirmDelete
                invoice={invoice}
                openConfirmDelete={openConfirmDelete}
                setOpenConfirmDelete={setOpenConfirmDelete}
            />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <CardTitle className="flex items-center">
                        Invoice {invoice.invoice_number}
                        {invoice.paid_at === null && (
                            <button
                                onClick={() => setOpenConfirmDelete(true)}
                                className="ml-1 text-red-400"
                            >
                                <IconTrash size={20} />
                            </button>
                        )}
                    </CardTitle>
                    <CardDescription>
                        {invoice.paid_at === null
                            ? `Tagihan untuk invoice ini belum dibayar, silahkan lakukan pembayaran sebelum tanggal ${invoice.expired_at}`
                            : `Invoice ini sudah dibayar pada tanggal ${invoice.paid_at}`}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Card className="p-6">
                        <div className="mb-6">
                            <span className="text-sm text-muted-foreground">
                                Total
                            </span>
                            <strong className="block text-xl font-semibold">
                                Rp 448.350
                            </strong>
                        </div>
                        <div className="mb-6">
                            <span className="text-sm text-muted-foreground">
                                Paket
                            </span>
                            <strong className="block text-xl font-semibold">
                                {invoice.package_price.name}
                            </strong>
                        </div>
                        <div className="mb-6">
                            <span className="text-sm text-muted-foreground">
                                Dibayar Pada
                            </span>
                            <strong className="block text-xl font-semibold">
                                <span
                                    className={`${
                                        invoice.paid_at === null
                                            ? "text-red-500"
                                            : "text-green-500"
                                    }`}
                                >
                                    {invoice.paid_at === null
                                        ? "Belum Dibayar"
                                        : invoice.paid_at}
                                </span>
                            </strong>
                        </div>
                        {invoice.paid_at === null && (
                            <UnpaidSection
                                paymentMethods={paymentMethods}
                                invoice={invoice}
                            />
                        )}
                    </Card>
                </CardContent>
            </Card>
        </div>
    );
}

export default Show;
Show.layout = (page) => <UserLayout children={page} needFull={true} />;
