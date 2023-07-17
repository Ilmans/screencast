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

function ConfirmDelete({
    text,
    urlDelete,
    openConfirmDelete,
    setOpenConfirmDelete,
}) {
    return (
        <Dialog open={openConfirmDelete}>
            <DialogContent setOpen={setOpenConfirmDelete}>
                <DialogHeader>
                    <DialogTitle>Konfirmasi Hapus</DialogTitle>
                    <DialogDescription className="text-lg">
                        {text}
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-x-4 md:justify-start w-full justify-center">
                    <Button
                        onClick={() => {
                            router.delete("/" + urlDelete, {
                                onSuccess: () => {
                                    setOpenConfirmDelete(false);
                                },
                            });
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
