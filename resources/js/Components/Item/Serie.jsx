import React from "react";
import { BookIcon, ClockIcon } from "../../../lib/Icon";
import { Link } from "@inertiajs/react";
import { convertSecondsToHours } from "../../../lib/Helper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/opacity.css";

function Serie({ serie }) {
    return (
        <Link
            href={`/serie/${serie.slug}`}
            className="space-y-2 rounded-lg  "
            key={serie.id}
        >
            <div className="">
                <LazyLoadImage
                    className="object-cover w-full h-full rounded-lg"
                    src={`${
                        serie.image.includes("https")
                            ? serie.image
                            : `/images/series/thumbnails/${serie.image}`
                    }`}
                    alt=""
                    effect="opacity"
                    delayTime={1000}
                />
            </div>
            <div className="flex gap-2 ">
                {serie.topics.map((topic, i) => (
                    <div
                        className="text-sm font-semibold text-blue-400 rounded-lg  "
                        key={i}
                    >
                        {topic.name}
                    </div>
                ))}
            </div>
            <h2 className="mb-2 text-sm font-semibold text-foreground ">
                {serie.title}
            </h2>
            <p className="mb-2 text-xs text-muted-foreground line-clamp-2">
                {serie.description}
            </p>
            <div className="flex gap-2 mt-2 text-teal-600 text-muted dark:text-teal-200">
                <div className="flex items-center gap-1">
                    <ClockIcon />
                    <span className="text-xs">
                        {convertSecondsToHours(serie.videos_sum_seconds_time)}{" "}
                    </span>
                </div>
                <div className="flex items-center gap-1">
                    <BookIcon className="w-4 h-4" />
                    <span className="text-xs">
                        {serie.videos_count} Episode
                    </span>
                </div>
            </div>
        </Link>
    );
}

export default Serie;
