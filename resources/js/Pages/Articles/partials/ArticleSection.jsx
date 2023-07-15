import { Link } from "@inertiajs/react";
import React from "react";
import ArticleBody from "./ArticleBody";

function ArticleSection({ article }) {
    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-2">
                <p className="text-lg font-medium text-foreground">
                    {article.topics.map((topic) => (
                        <a
                            key={topic.id}
                            href="#"
                            className="hover:underline text-blue-400"
                        >
                            {topic.name}
                        </a>
                    ))}
                </p>
                <h1 className="text-3xl font-bold text-accent-foreground font-poppins">
                    {article.title}
                </h1>
                {/* write By */}
                <Link className="font-poppins text-sm font-medium mt-2">
                    Ditulis oleh{" "}
                    <a
                        href="#"
                        className="hover:underline text-muted-foreground"
                    >
                        {article.user.name}
                    </a>
                </Link>
            </div>
            <div className="space-y-2 border-t border-border py-4 pt-12">
                <ArticleBody markdown={article.body} />
            </div>
        </div>
    );
}

export default ArticleSection;
