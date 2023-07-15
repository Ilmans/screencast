import React, { useEffect, useRef, useState } from "react";
import InputWithIcon from "@/Components/InputWithIcon";

import { IconSearch } from "@tabler/icons-react";
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
    const searchParams = params.get("search");
    const topicParams = params.get("topic");
    const [search, setSearch] = useState(searchParams || "");
    const [selectedTopic, setSelectedTopic] = React.useState("");
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const debounce = setTimeout(() => {
            router.reload({
                data: {
                    search: search,
                    topic: selectedTopic,
                },
            });
        }, 300);
        return () => clearTimeout(debounce);
    }, [search, selectedTopic]);

    return (
        <div className="flex justify-end mb-4">
            <div className="flex gap-x-2">
                <Select
                    defaultValue={topicParams || undefined}
                    onValueChange={(value) => setSelectedTopic(value)}
                >
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Berdasarkan Topik" />
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
                <InputWithIcon
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Cari artikel"
                    icon={<IconSearch className="w-4 h-4" />}
                />
            </div>
        </div>
    );
}

export default FormFilter;
