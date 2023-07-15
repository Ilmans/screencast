import PublicLayout from "@/Layouts/PublicLayout";
import React from "react";
import TablesOfContent from "./partials/TablesOfContent";
import ArticleSection from "./partials/ArticleSection";
import ShareSosmed from "@/Components/ShareSosmed";
import { Link } from "@inertiajs/react";

function Show({ article }) {
    return (
        <div className="container  py-12 grid grid-cols-5 gap-x-4">
            <div className="col-span-1 ">
                {/* sticky div */}
                <div className="sticky top-20 hidden w-72 max-h-96 overflow-y-auto rounded-lg md:block mt-4">
                    <ShareSosmed vertical={false} />
                </div>
            </div>
            <div className="col-span-3">
                <ArticleSection article={article} />
                {/* related articles */}
              
            </div>
            <div className="col-span-1">
                <TablesOfContent markdown={article.body} />
            </div>
        </div>
    );
}

export default Show;
Show.layout = (page) => <PublicLayout children={page} />;
