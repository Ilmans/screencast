import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { router } from "@inertiajs/react";
import React from "react";

function ConfirmDelete({ invoice, openConfirmDelete, setOpenConfirmDelete }) {
    return (
        <Dialog open={openConfirmDelete}>
            <DialogContent setOpen={setOpenConfirmDelete}>
                <DialogHeader>
                    <DialogTitle>Konfirmasi Hapus</DialogTitle>
                    <DialogDescription className="text-lg">
                        Apakah anda akan menghapus invoice{" "}
                        {invoice.invoice_number} ?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-x-4 justify-start">
                    <Button
                        onClick={() => {
                            router.delete("/invoice/" + invoice.id, {}, {});
                        }}
                        size="lg"
                        className="rounded-full"
                    >
                        Konfirmasi
                    </Button>
                    <Button
                        onClick={() => setOpenConfirmDelete(false)}
                        variant="secondary"
                        size="lg"
                        className="rounded-full"
                    >
                        Cancel
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ConfirmDelete;
