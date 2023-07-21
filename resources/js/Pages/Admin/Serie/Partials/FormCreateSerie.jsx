import InputError from "@/Components/InputError";
import InputImage from "@/Components/InputImage";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { useForm, usePage } from "@inertiajs/react";
import React from "react";

import Select from "react-select";

function FormCreateSerie() {
    const topic = usePage().props.topic;
    const options = topic.series.map((topic) => ({
        value: topic.id,
        label: topic.name,
    }));

    const { data, setData, errors, post, processing } = useForm({
        title: "",
        thumbnail: "",
        topic: [],
        status: "draft",
        description: "",
    });

    return (
        <form className="space-y-6">
            <div className="space-y-1">
                <Label forInput="title">Judul</Label>
                <Input
                    name="title"
                    id="title"
                    type="text"
                    placeholder="Judul Serie"
                    className="w-full"
                />
            </div>
            <div className="space-y-1 ">
                <Label htmlFor="topic" value="">
                    Topik Artikel
                </Label>
                <Select
                    value={data.topic.map((id) => ({
                        value: id,
                        label: topic.series.find((topic) => topic.id === id)
                            .name,
                    }))}
                    onChange={(value) => {
                        const newValue = value.map((value) => value.value);
                        setData({ ...data, topic: newValue });
                    }}
                    placeholder="Pilih topik"
                    name="topic"
                    isClearable={true}
                    className="items-center justify-between w-full h-10 text-sm text-black border rounded-md border-input ring-offset-background placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    isMulti={true}
                    options={options}
                />
                <InputError errors={errors} fieldName={"topic"} />
            </div>
            <InputImage
                data={data}
                setData={setData}
                errors={errors}
                width={1280}
                height={720}
                name={"thumbnail"}
            />

            <div className="space-y-1">
                <Label forInput="description">Deskripsi</Label>
                <Textarea placeholder="Deskripsi serie" name="description" id="description" rows="3" >
                    
                </Textarea>
            </div>

            <div className="mt-6">
                <Button variant="secondary" size="lg" disabled={processing} type="submit">
                    {processing ? "Loading..." : "Buat Serie"}
                </Button>
            </div>
        </form>
    );
}

export default FormCreateSerie;
