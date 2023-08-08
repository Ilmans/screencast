import {
    ArticleCard,
    ArticleTopics,
    AuthorSection,
    TitleDescSection,
} from "@/Components/Item/ArticleCard";
import { Link } from "@inertiajs/react";
import React from "react";

function Popular({ popularArticles }) {
    return (
        <div className="grid gap-8 lg:grid-cols-3">
            {popularArticles.map((article) => (
                <Link key={article.id} href={`/article/${article.slug}`}>
                <ArticleCard  popular={true}>
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
                </Link>
            ))}
        </div>
    );
}

export default Popular;
