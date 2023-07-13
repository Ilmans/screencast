import {
    ArticleCard,
    ArticleTopics,
    AuthorSection,
    TitleDescSection,
} from "@/Components/Item/ArticleCard";
import React from "react";

function Popular({ popularArticles }) {
    return (
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
    );
}

export default Popular;
