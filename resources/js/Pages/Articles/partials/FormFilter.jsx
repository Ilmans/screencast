import React, { useEffect, useRef, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { router, usePage } from "@inertiajs/react";

function FormFilter() {
    const { topic } = usePage().props;
    const params = new URLSearchParams(window.location.search);

    const topicParams = params.get("topic");
    const currentUrl = new URL(window.location.href);

    const [selectedTopic, setSelectedTopic] = React.useState(topicParams || "");
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        params.set("topic", selectedTopic);
        router.replace(currentUrl.pathname + "?" + params.toString());
       
    }, [ selectedTopic]);

    useEffect(() => {
        setSelectedTopic(topicParams || "");
    } ,[topicParams])


    return (
        <Select
            value={selectedTopic}
            onValueChange={(value) => setSelectedTopic(value)}
        >
            <SelectTrigger  className="w-[180px]">
                <SelectValue  placeholder="Berdasarkan Topik" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="">Semua Topik</SelectItem>
                {topic.articles.map((t, i) => (
                    <SelectItem key={i} value={t.slug}>
                        {t.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default FormFilter;
