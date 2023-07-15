import { AuthorSection } from "@/Components/Item/ArticleCard";
import PublicLayout from "@/Layouts/PublicLayout";
import React from "react";
import ArticleSection from "./partials/ArticleSection";

function Show({ article }) {
    return (
        <div className="container  py-12 grid grid-cols-5 items-center">
            <div className="col-span-1"></div>
            <div className="col-span-3">
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
                        <p className="font-poppins text-sm font-medium mt-2">
                            Ditulis oleh{" "}
                            <a
                                href="#"
                                className="hover:underline text-muted-foreground"
                            >
                                {article.user.name}
                            </a>
                        </p>
                    </div>
                    <div className="space-y-2 border-t border-border py-4 pt-12">
                        <ArticleSection markdown={article.body} />
                    </div>
                </div>
            </div>
            <div className="col-span-1"></div>
        </div>
    );
}

export default Show;
Show.layout = (page) => <PublicLayout children={page} />;
