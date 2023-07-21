import InputError from "@/Components/InputError";
import InputImage from "@/Components/InputImage";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/Components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

function FormEditTopic({topic}) {
   
    const { data, setData, processing, errors, post, recentlySuccessful } =
        useForm({
            name: topic.name,
            image: null,
            description: topic.description,
            type : topic.type
        });
;
    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("admin.topics.update", topic.id));
    };

   

    return (
        <form onSubmit={submit} className="space-y-6" encType="multipart/form-data">
            <div className="space-y-1">
                <Label htmlFor="name">Nama Topik</Label>
                <Input
                    onChange={onChange}
                    value={data.name}
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Nama Topik"
                />
                <InputError errors={errors} fieldName="name" />
            </div>
            <div className="space-y-1">
                <Label htmlFor="type">Tipe</Label>
                <Select name="type "  onValueChange={(value) => {
                    setData({ ...data, type: value });
                }} defaultValue={data.type}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Pilih Tipe" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem  value="serie">Serie</SelectItem>
                        <SelectItem value="article">Artikel</SelectItem>
                    </SelectContent>
                </Select>
                <InputError errors={errors} fieldName="type" />
            </div>
           <InputImage defaultimage={topic.image} data={data} setData={setData} errors={errors} />
            <div className="space-y-1">
                <Label htmlFor="description">Deskripsi</Label>
                <Textarea
                    value={data.description}
                    onChange={onChange}
                    id="description"
                    name="description"
                    placeholder="Deskripsi Topik"
                />
                <InputError errors={errors} fieldName="description" />
            </div>
            <div className="mt-4">
                <Button
                    size="lg"
                    variant="secondary"
                    type="submit"
                    disabled={processing}
                >
                    {processing ? "Loading..." : "Update Topik"}
                </Button>

                {recentlySuccessful && (
                    <span>Berhasil ditambahkan</span>
                )}
            </div>
        </form>
    );
}

export default FormEditTopic;
