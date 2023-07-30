import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogContent,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { useForm } from "@inertiajs/react";

import React from "react";

function ModalAddPackage({ openModal, setOpenModal }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        price: "",
        duration_months: "",
        description: "",
    });
    const submit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <Dialog open={openModal}>
            <DialogContent setOpen={setOpenModal} className="">
                <DialogHeader>
                    <DialogTitle>Tambah Pakckage</DialogTitle>
                </DialogHeader>
                <form onSubmit={submit}>
                    <div className="space-y-1">
                        <Label className="text-sm">Nama </Label>
                        <Input
                            value={data.name}
                            onChange={onChange}
                            type="text"
                            name="name"
                            id="name"
                            className="w-full"
                        />
                        <InputError errors={errors} fieldName={"name"} />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-sm">Harga</Label>
                        <Input
                            value={data.price}
                            onChange={onChange}
                            type="number"
                            name="price"
                            id="price"
                            className="w-full"
                        />
                        <InputError errors={errors} fieldName={"price"} />
                    </div>

                    <div className="space-y-1 ">
                        <Label className="text-sm">Durasi (Bulan)</Label>
                        <Input
                            value={data.duration_months}
                            onChange={onChange}
                            type="text"
                            name="duration_months"
                            id="duration_months"
                            min="1"
                            max="12"
                            className="w-full"
                        />
                        <InputError
                            errors={errors}
                            fieldName={"duration_months"}
                        />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-sm">Deskripsi</Label>
                        <Textarea
                            value={data.description}
                            onChange={onChange}
                            name="description"
                            id="description"
                            className="w-full"
                        >
                            {data.description}
                        </Textarea>
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

export default ModalAddPackage;
