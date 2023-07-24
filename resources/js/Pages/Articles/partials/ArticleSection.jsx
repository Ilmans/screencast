import { Link, usePage } from "@inertiajs/react";
import React, { Fragment } from "react";
import ArticleBody from "./ArticleBody";

function ArticleSection({ article }) {
    const { user } = usePage().props.auth;
    return (
        <Fragment>
            <div className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-2">
                    <p className="flex items-center text-lg font-medium text-foreground gap-x-2">
                        {article.topics.map((topic) => (
                            <a
                                key={topic.id}
                                href="#"
                                className="text-blue-400 hover:underline"
                            >
                                {topic.name}
                            </a>
                        ))}
                    </p>
                    <h1 className="flex items-center text-3xl font-bold text-accent-foreground font-poppins gap-x-1">
                        {article.title}
                        {/* is preview mode */}
                        {!article.is_published &&
                            (user?.id === article.user_id ||
                                user?.is_admin) && (
                                <span className="px-4 py-1 text-sm bg-gray-400 rounded-lg">
                                    Preview Mode
                                </span>
                            )}
                    </h1>
                    {/* write By */}
                    <Link className="mt-2 text-sm font-medium font-poppins">
                        Ditulis oleh{" "}
                        <a
                            href="#"
                            className="hover:underline text-muted-foreground"
                        >
                            {article.user.name}
                        </a>
                    </Link>
                </div>
                <div className="py-4 pt-12 space-y-2 border-t border-border">
                    <ArticleBody markdown={article.body} />
                </div>
            </div>
        </Fragment>
    );
}

export default ArticleSection;
