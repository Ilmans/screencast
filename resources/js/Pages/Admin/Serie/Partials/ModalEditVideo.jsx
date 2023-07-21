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

import React from "react";

function ModalEditVideo({video,openModal,setOpenModal}) {
 
    const { data, setData, processing, errors } = useForm({
        title: video?.title,
        description: video?.description,
        unique_video_id: video?.unique_video_id,
        is_free: video?.is_free === 1 ? "free" : "premium" 
    });

    const onChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setData({ ...data, [key]: value });
    };
    return (
        <Dialog  open={openModal} >
            <DialogContent  setOpen={setOpenModal} className="">
                <DialogHeader>
                    <DialogTitle>Edit Video</DialogTitle>
                </DialogHeader>
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
                    <InputError errors={errors} fieldName={"title"} />
                </div>
                <div className="space-y-1">
                    <Label className="text-sm">Jenis Video</Label>
                    <Select
                    onValueChange={(value) => {
                        setData({ ...data, is_free: value === "free" });
                        
                    }}
                    defaultValue={data.is_free ? "free" : "premium"}>
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
                <div className="space-y-1">
                    <Label className="text-sm">Deskripsi Video</Label>
                    <MDEditor
                    preview={"edit"}
                    className="w-full h-96 "
                    value={data.description}
                    onChange={(value) => setData({ ...data, description: value })}
                />
                <InputError errors={errors} fieldName={"description"} />
                </div>
                <div className="mt-4">
                  <Button size="sm" disabled={processing} variant="secondary" >
                      Simpan
                  </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ModalEditVideo;
