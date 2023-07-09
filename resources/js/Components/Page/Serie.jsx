import React from "react";
import { BookIcon, ClockIcon } from "../../../lib/Icon";

function Serie({ serie }) {
    return (
        <div className="space-y-2 rounded-lg  font-poppins" key={serie.id}>
            {" "}
            <img className="mb-4 rounded-lg" src={serie.image} alt="" />
            <div className="flex gap-2 text-gray-500">
                {serie.topics.map((topic, i) => (
                    <div className="text-sm font-semibold text-blue-400 rounded-lg font-poppins ">
                        {topic.name}
                    </div>
                ))}
            </div>
            <h2 className="mb-2 text-sm font-semibold text-slate-100 ">
                {serie.title}
            </h2>
            <p className="mb-2 text-xs text-gray-400 line-clamp-2">
                {serie.description}
            </p>
            <div className="flex gap-2 mt-2 text-teal-200">
                <div className="flex items-center gap-1">
                    <ClockIcon />
                    <span className="text-xs">50 minutes</span>
                </div>
                <div className="flex items-center gap-1">
                    <BookIcon className="w-4 h-4" />
                    <span className="text-xs">50 Episode</span>
                </div>
            </div>
        </div>
    );
}

export default Serie;
