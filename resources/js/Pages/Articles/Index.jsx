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
import React, { Fragment } from "react";
import { SearchIcon } from "../../../lib/Icon";

function Index({ popularArticles, articles, articleTopics }) {
    console.log(popularArticles);
    return (
        <Fragment>
            <GreetingPage
                variant="right"
                title={"Tutorial dan Artikel"}
                desc={
                    "Temukan tutorial pemrograman praktis dan tepat guna, serta informasi terbaru seputar teknologi."
                }
            ></GreetingPage>

            {/* artikel pilihan */}
            <div className="relative container bg-secondary/50">
                <TitleSection
                    title={"Artikel Pilihan"}
                    desc={"Beberapa artikel pilihan yang bisa anda baca"}
                />

                <div className="grid gap-8  lg:grid-cols-3">
                    {popularArticles.map((article) => (
                        <ArticleCard key={article.id} popular={true}>
                            <ArticleTopics topics={article.topics} />
                            <TitleDescSection
                                title={article.title}
                                desc={article.synopsis}
                            />
                            <AuthorSection
                                author={article.user}
                                date={article.created_at}
                            />
                        </ArticleCard>
                    ))}
                </div>

                <div className="flex  py-12 mt-8 gap-x-8">
                    <div className="w-2/3 space-y-4">
                        {articles.data.map((article) => (
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
                    </div>
                    <div className="w-1/3 space-y-4 ">
                        <p className="text-lg font-semibold font-poppins">
                            Temukan apa yang kamu cari disini
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            {articleTopics.map((topic) => (
                                <BadgeButton>
                                    <a
                                        key={topic.id}
                                        href="#"
                                        className="text-sm font-medium text-foreground hover:underline"
                                    >
                                        {topic.name}
                                    </a>
                                </BadgeButton>
                            ))}
                        </div>
                        <div className="space-y-2">
                            <p>Cari :</p>
                            <InputWithIcon
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
