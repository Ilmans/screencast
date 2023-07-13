import BadgeButton from "@/Components/BadgeButton";
import InputWithIcon from "@/Components/InputWithIcon";
import {
    ArticleCard,
    ArticleImage,
    ArticleTopics,
    AuthorSection,
    TitleDescSection,
} from "@/Components/Item/ArticleCard";
import GreetingPage from "@/Components/Page/GreetingPage";
import TitleSection from "@/Components/Page/TitleSection";
import PublicLayout from "@/Layouts/PublicLayout";
import React, { Fragment, useEffect, useRef } from "react";
import { SearchIcon } from "../../../lib/Icon";
import Popular from "./Popular";
import ArticleSkeleton from "@/Components/Item/ArticleSkeleton";
import { router } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";

function Index({ popularArticles, articleTopics }) {
    const listArticleRef = useRef(null);
    const firstRenderRef = useRef(true);
    const [listArticles, setListArticles] = React.useState(undefined);
    const [processLoadmore, setProcessLoadmore] = React.useState(false);

    const [selectedTopic, setSelectedTopic] = React.useState("");
    const [search, setSearch] = React.useState("");

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

    const loadMore = () => {
        router.reload({
            preserveScroll: true,
            preserveState: true,
            data: { page: listArticles.current_page + 1 },
            only: ["articles"],
            onSuccess: ({ props }) => {
                setProcessLoadmore(true);
                setTimeout(() => {
                    setListArticles({
                        ...props.articles,
                        data: [...listArticles.data, ...props.articles.data],
                    });
                    setProcessLoadmore(false);
                }, 500);
            },
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (listArticles === undefined) {
                            router.reload({
                                preserveScroll: true,
                                preserveState: true,

                                only: ["articles"],
                                onSuccess: ({ props }) => {
                                    setTimeout(() => {
                                        setListArticles(props.articles);
                                    }, 500);
                                },
                            });
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (listArticleRef.current) {
            observer.observe(listArticleRef.current);
        }
        return () => {
            if (listArticleRef.current) {
                observer.unobserve(listArticleRef.current);
            }
        };
    }, []);

    return (
        <Fragment>
            <GreetingPage
                variant="default"
                title={"Tutorial dan Artikel"}
                desc={
                    "Temukan tutorial pemrograman praktis dan tepat guna, serta informasi terbaru seputar teknologi."
                }
            ></GreetingPage>

            <div className="relative container bg-secondary/50">
                <TitleSection
                    title={"Artikel Pilihan"}
                    desc={"Beberapa artikel pilihan yang bisa anda baca"}
                />

                <Popular popularArticles={popularArticles} />

                <div ref={listArticleRef} className="flex py-12 mt-8 gap-x-8">
                    <div className="w-2/3 space-y-4">
                        {listArticles?.data.map((article) => (
                            <ArticleCard key={article.id} popular={false}>
                                <ArticleImage image={article.image} />
                                <div className="w-2/3">
                                    <ArticleTopics topics={article.topics} />
                                    <TitleDescSection
                                        title={article.title}
                                        desc={article.body}
                                    />
                                    <AuthorSection
                                        author={article.user}
                                        date={article.created_at}
                                    />
                                </div>
                            </ArticleCard>
                        ))}

                        {listArticles === undefined ||
                        processLoadmore ||
                        listArticles === null ? (
                            <ArticleSkeleton />
                        ) : (
                            ""
                        )}
                        {listArticles?.last_page >
                            listArticles?.current_page && (
                            <div className="flex justify-center">
                                <button
                                    onClick={loadMore}
                                    className="px-4 py-2 font-semibold dark:text-white bg-primary rounded-md hover:bg-primary/90"
                                >
                                    Load More
                                </button>
                            </div>
                        )}
                    </div>
                    <div className="w-1/3 space-y-4 ">
                        <p className="text-lg font-semibold font-poppins">
                            Temukan apa yang kamu cari disini
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            {articleTopics.map((topic) => (
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
                </div>
            </div>
        </Fragment>
    );
}

export default Index;
Index.layout = (page) => <PublicLayout children={page} />;
