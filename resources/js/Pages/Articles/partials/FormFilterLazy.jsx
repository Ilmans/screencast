import InputWithIcon from "@/Components/InputWithIcon";
import { Button } from "@/Components/ui/button";
import { router, usePage } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";
import { SearchIcon } from "../../../../lib/Icon";

function FormFilterLazy({ setListArticles }) {
    const { topic } = usePage().props;
    const params = new URLSearchParams(window.location.search);
    const searchParams = params.get("search");
    const topicParams = params.get("topic");
    const firstRenderRef = useRef(true);
    const [selectedTopic, setSelectedTopic] = React.useState(topicParams || "");
    const [search, setSearch] = React.useState(searchParams || "");

    const handleFilter = () => {
        router.reload({
            preserveScroll: true,
            preserveState: true,
            data: { topic: selectedTopic, search: search },
            only: ["articles"],
            onSuccess: ({ props }) => {
                setListArticles(props.articles);
            },
        });
    };

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false;
            return;
        }

        const debounce = setTimeout(() => {
            handleFilter();
        }, 50);
        return () => {
            clearTimeout(debounce);
        };
    }, [selectedTopic, search]);

    return (
        <div className="w-1/3 space-y-4 ">
            <p className="text-lg font-semibold font-poppins">
                Temukan apa yang kamu cari disini
            </p>
            <div className="flex gap-4 flex-wrap">
                {topic.articles.map((topic) => (
                    <Button
                        onClick={() => {
                            setSelectedTopic(topic.slug);
                        }}
                        className={`${
                            selectedTopic === topic.slug
                                ? "bg-border dark:bg-accent/50"
                                : "bg-accent/90"
                        } font-semibold text-sm  hover:bg-border dark:hover:bg-accent/50`}
                        variant="secondary"
                        size="sm"
                        key={topic.id}
                    >
                        {topic.name}
                    </Button>
                ))}
            </div>
            <div className="space-y-2">
                <p>Cari :</p>
                <InputWithIcon
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Cari artikel"
                    icon={<SearchIcon />}
                />
            </div>
        </div>
    );
}

export default FormFilterLazy;
