import React from "react";
import { BookIcon, ClockIcon } from "../../../lib/Icon";
import { Link } from "@inertiajs/react";

function Serie({ serie }) {
    return (
        <Link
            href={`/serie/${serie.slug}`}
            className="space-y-2 rounded-lg font-poppins"
            key={serie.id}
        >
            {" "}
            <img className="mb-4 rounded-lg" src={serie.image} alt="" />
            <div className="flex gap-2 text-gray-500">
                {serie.topics.map((topic, i) => (
                    <div className="text-sm font-semibold text-blue-400 rounded-lg font-poppins ">
                        {topic.name}
                    </div>
                ))}
            </div>
            <h2 className="mb-2 text-sm font-semibold dark:text-slate-100 text-slate-800 ">
                {serie.title}
            </h2>
            <p className="mb-2 text-xs dark:text-slate-100 text-slate-700 line-clamp-2">
                {serie.description}
            </p>
            <div className="flex gap-2 mt-2 text-teal-600 dark:text-teal-200">
                <div className="flex items-center gap-1">
                    <ClockIcon />
                    <span className="text-xs">50 minutes</span>
                </div>
                <div className="flex items-center gap-1">
                    <BookIcon className="w-4 h-4" />
                    <span className="text-xs">50 Episode</span>
                </div>
            </div>
        </Link>
    );
}

export default Serie;
