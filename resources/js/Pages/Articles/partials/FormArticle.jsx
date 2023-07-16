import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import MDeditor from "@uiw/react-md-editor";
import "@uiw/react-md-editor/dist/mdeditor.css";
import "./../../../../css/md-custom.css";
import Select from "react-select";
import { Textarea } from "@/Components/ui/textarea";
import { router, useForm, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { Button } from "@/Components/ui/button";
import InputError from "@/Components/InputError";

function FormArticle() {
    const topic = usePage().props.topic;
    const options = topic.articles.map((topic) => ({
        value: topic.id,
        label: topic.name,
    }));

    const { data, setData, processing, errors, post, recentlySuccessful } =
        useForm({
            topic: [],
            title: "",
            synopsis: "",
            body: "",
            image: null,
        });

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post("/article", {
            preserveScroll: true,
        });
    };

    return (
        <form onSubmit={onSubmit} action="" className="space-y-6">
            <div className="space-y-1">
                <Label htmlFor="title" value="">
                    Judul
                </Label>
                <Input
                    placeholder={"Judul artikel"}
                    name="title"
                    onChange={onChange}
                    value={data.title}
                />
                <InputError errors={errors} fieldName={"title"} />
            </div>
            <div className="space-y-1">
                <Label htmlFor="synopsis" value="">
                    Sinopsis
                </Label>
                <Textarea
                    placeholder={"Sinopsis artikel"}
                    name="synopsis"
                    onChange={onChange}
                    value={data.synopsis}
                />
                <InputError errors={errors} fieldName={"synopsis"} />
            </div>
            <div className="space-y-1 ">
                <Label htmlFor="topic" value="">
                    Topik Artikel
                </Label>
                <Select
                    value={data.topic.map((id) => ({
                        value: id,
                        label: topic.articles.find((topic) => topic.id === id)
                            .name,
                    }))}
                    onChange={(value) => {
                        const newValue = value.map((value) => value.value);
                        setData({ ...data, topic: newValue });
                    }}
                    placeholder="Pilih topik"
                    name="topic"
                    isClearable={true}
                    className=" h-10 w-full items-center justify-between rounded-md border border-input bg-transparent  text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    isMulti={true}
                    options={options}
                />
                <InputError errors={errors} fieldName={"topic"} />
            </div>
            <div className="space-y-1">
                <Label htmlFor="body" value="">
                    {" "}
                    Konten utama{" "}
                </Label>
                <MDeditor
                    className="w-full h-96 "
                    value={data.body}
                    onChange={(value) => setData({ ...data, body: value })}
                />
                <InputError errors={errors} fieldName={"body"} />
            </div>
            <div className="space-y-1">
                <Button type="submit" size="lg">
                    {processing ? "Loading..." : "Buat Artikel"}
                </Button>
            </div>
        </form>
    );
}

export default FormArticle;
