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
import Popular from "./partials/Popular";
import ArticleSkeleton from "@/Components/Item/ArticleSkeleton";
import { Head, Link, router } from "@inertiajs/react";
import FormFilterLazy from "./partials/FormFilterLazy";

function Index({ popularArticles }) {
    const listArticleRef = useRef(null);

    const [listArticles, setListArticles] = React.useState(undefined);
    const [processLoadmore, setProcessLoadmore] = React.useState(false);

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
            <Head title="Tutorial dan Artikel"></Head>
            <GreetingPage
                variant="default"
                title={"Tutorial dan Artikel"}
                desc={
                    "Temukan tutorial pemrograman praktis dan tepat guna, serta informasi terbaru seputar teknologi."
                }
            ></GreetingPage>

            <div className="relative md:container bg-secondary/50">
                <TitleSection
                    title={"Artikel Pilihan"}
                    desc={"Beberapa artikel pilihan yang bisa anda baca"}
                />

                <Popular popularArticles={popularArticles} />

                <div ref={listArticleRef} className="flex py-12 mt-8 gap-x-8">
                    {popularArticles.length === 0 || listArticles?.data.length === 0 ? (
                        <div className="w-2/3">Belum ada artikel/keyword pencarian tidak di temukan.</div>
                    ) : (
                        <div className="w-2/3 space-y-4">
                            {listArticles?.data.map((article) => (
                                <Link
                                    key={article.id}
                                    href={`/article/${article.slug}`}
                                >
                                    <ArticleCard
                                        key={article.id}
                                        popular={false}
                                    >
                                        <ArticleImage image={article.image} />
                                        <div className="w-2/3">
                                            <ArticleTopics
                                                topics={article.topics}
                                            />
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
                                </Link>
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
                                        className="px-4 py-2 font-semibold rounded-md dark:text-white bg-primary hover:bg-primary/90"
                                    >
                                        Load More
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    <FormFilterLazy setListArticles={setListArticles} />
                </div>
            </div>
        </Fragment>
    );
}

export default Index;
Index.layout = (page) => <PublicLayout children={page} />;
