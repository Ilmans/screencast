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
import MDEditor from "@uiw/react-md-editor";

import React from "react";

function ModalAddPage({ openModal, setOpenModal }) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        content: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("admin.pages.store"), {
            onSuccess: () => {
                setOpenModal(false);
            },
        });
    };

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };
    return (
        <Dialog open={openModal}>
            <DialogContent setOpen={setOpenModal} className="">
                <DialogHeader>
                    <DialogTitle>Tambah halaman</DialogTitle>
                </DialogHeader>
                <form onSubmit={submit}>
                    <div className="space-y-1">
                        <Label className="text-sm">Judul </Label>
                        <Input
                            value={data.title}
                            onChange={onChange}
                            type="text"
                            name="title"
                            id="title"
                            className="w-full"
                        />
                        <InputError errors={errors} fieldName={"title"} />
                    </div>
                    <div className="space-y-1 ">
                        <Label className="text-sm">Konten </Label>
                        <MDEditor
                            preview={"edit"}
                            className=""
                            value={data.content}
                            onChange={(value) =>
                                setData({ ...data, content: value })
                            }
                        />
                        <InputError errors={errors} fieldName={"content"} />
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

export default ModalAddPage;
