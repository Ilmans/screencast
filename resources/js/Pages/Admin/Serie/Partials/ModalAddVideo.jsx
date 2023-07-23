import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/Components/ui/select";
import { useForm } from "@inertiajs/react";
import MDEditor from "@uiw/react-md-editor";

import "@uiw/react-md-editor/dist/mdeditor.css";
import "./../../../../../css/md-custom.css";

import React from "react";

function ModalAddVideo({ serie, openModal, setOpenModal }) {
    const { data, setData, processing, errors, post } = useForm({
        serie_id: serie.id,
        title: "",
        description: "",
        unique_video_id: "",
        is_free: false,
    });

    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setData({ ...data, [key]: value });
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.videos.store"));
    };
    return (
        <Dialog open={openModal}>
            <DialogContent setOpen={setOpenModal} className="">
                <DialogHeader>
                    <DialogTitle>Edit Video</DialogTitle>
                </DialogHeader>
                <form onSubmit={submit}>
                    <div className="space-y-1">
                        <Label className="text-sm">Judul Video</Label>
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
                    <div className="space-y-1">
                        <Label className="text-sm">Youtube Video ID</Label>
                        <Input
                            value={data.unique_video_id}
                            onChange={onChange}
                            type="text"
                            name="unique_video_id"
                            id="unique_video_id"
                            className="w-full"
                        />
                        <InputError errors={errors} fieldName={"unique_video_id"} />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-sm">Jenis Video</Label>
                        <Select
                            onValueChange={(value) => {
                                setData({ ...data, is_free: value === "free" });
                            }}
                            defaultValue={data.is_free ? "free" : "premium"}
                        >
                            <SelectTrigger>
                                {data.is_free ? "Free" : "Premium"}
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="free">Free</SelectItem>
                                <SelectItem value="premium">Premium</SelectItem>
                            </SelectContent>
                        </Select>
                        <InputError errors={errors} fieldName={"is_free"} />
                    </div>
                    
                    <div className="space-y-1 ">
                        <Label className="text-sm">Deskripsi Video</Label>
                        <MDEditor
                            preview={"edit"}
                            className=""
                            value={data.description}
                            onChange={(value) =>
                                setData({ ...data, description: value })
                            }
                        />
                        <InputError errors={errors} fieldName={"description"} />
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

export default ModalAddVideo;
