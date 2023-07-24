
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

import { useForm } from "@inertiajs/react";

import React from "react";
import InputImage from "@/Components/InputImage";
import InputError from "@/Components/InputError";

function ModalAddPayment({  openModal, setOpenModal }) {
    const { data, setData, processing, errors, post ,reset} = useForm({
        logo : null,
        bank_name: "",
        account_name: "",
        account_number: "",
    });

    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setData({ ...data, [key]: value });
    };

    const submit = (e) => {
        e.preventDefault();
         post(route("admin.payment_methods.store"),{
            onSuccess : () => {
                setOpenModal(false);
                reset();
            }
         });
    };
    return (
        <Dialog open={openModal}>
            <DialogContent setOpen={setOpenModal} className="">
                <DialogHeader>
                    <DialogTitle>Tambah Metode Pembayaran</DialogTitle>
                </DialogHeader>
                <form onSubmit={submit}>
                    <div className="space-y-1">
                        
                        <InputImage
                            width={50}
                            height={50}
                            data={data}
                            setData={setData}
                            name="logo"
                            label="Logo"
                            errors={errors}
                        />

                      
                    </div>
                    <div className="space-y-1">
                        <Label className="text-sm">Nama Bank</Label>
                        <Input
                            value={data.bank_name}
                            onChange={onChange}
                            type="text"
                            name="bank_name"
                            id="bank_name"
                            className="w-full"
                        />
                        <InputError
                            errors={errors}
                            fieldName={"bank_name"}
                        />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-sm">Atas Nama</Label>
                        <Input
                            value={data.account_name}
                            onChange={onChange}
                            type="text"
                            name="account_name"
                            id="account_name"
                            className="w-full"
                        />
                        <InputError errors={errors} fieldName={"account_name"} />
                    </div>

                    <div className="space-y-1 ">
                        <Label className="text-sm">No. Rekening</Label>
                        <Input
                            value={data.account_number}
                            onChange={onChange}
                            type="text"
                            name="account_number"
                            id="account_number"
                            className="w-full"
                        />
                        <InputError  errors={errors} fieldName={"account_number"} />
                    </div>
                    <div className="mt-4">
                        <Button
                            type="submit"
                            size="sm"
                            disabled={processing}
                            variant="secondary"
                        >
                            {processing ? "Loading..." : "Simpan"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default ModalAddPayment;
