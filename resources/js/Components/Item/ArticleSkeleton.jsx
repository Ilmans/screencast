import React from "react";
import { ArticleCard } from "./ArticleCard";
import { Skeleton } from "../ui/skeleton";

function ArticleSkeleton() {
    return new Array(3).fill(0).map(() => (
        <ArticleCard popular={false}>
            <Skeleton className="w-1/3 h-40 rounded-lg" />
            <div className="w-2/3">
                <Skeleton className="w-16 h-4 rounded-lg" />
                <Skeleton className="w-full h-6 rounded-lg mt-4" />
                <Skeleton className="w-full h-3 rounded-lg mt-4" />
                <Skeleton className="w-full h-3 rounded-lg mt-2" />
                <div className="flex items-center">
                    <Skeleton className="w-12 h-12 rounded-full mt-4" />
                    <Skeleton className="w-16 h-4 rounded-lg mt-4 ml-4" />
                </div>
            </div>
        </ArticleCard>
    ));
}

export default ArticleSkeleton;
