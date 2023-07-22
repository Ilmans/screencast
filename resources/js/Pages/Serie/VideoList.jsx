import { Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import { convertSecondsToMinutes } from "../../../lib/Helper";
import { LockIcon } from "../../../lib/Icon";
import { IconLockAccess, IconLockOpen } from "@tabler/icons-react";

function VideoList({ serie, activeVideo = null }) {
    const isUserSubscribed = usePage().props.isUserSubscribed;
    return (
        <ul className="relative divide-y dark:divide-slate-800">
            {serie.videos.map((video, i) => (
                <li
                    key={i}
                    className={`px-2 rounded-lg ${
                        activeVideo === video.order_num &&
                        "dark:bg-slate-900 shadow-sm bg-slate-200"
                    } hover:bg-slate-200 dark:hover:bg-slate-800`}
                >
                    <Link
                        preserveScroll={true}
                        preserveState={true}
                        className="flex items-center text-slate-800 dark:text-slate-50 dark:hover:text-primary-400 justify-between hover:text-primary-500 py-3.5 font-medium fade group"
                        href={route('serie.watch', [serie.slug, video.order_num])}
                    >
                        <span className="flex">
                            <span className="flex-shrink-0 mr-2 print:hidden md:mr-3 group-hover:text-slate-500 text-slate-500">
                                {i + 1}.
                            </span>
                            <span>
                                <span className="mb-0.5 block text-sm line-clamp-1 md:text-tiny">
                                    {activeVideo !== null
                                        ? video.title.slice(0, 28) + "..."
                                        : video.title}
                                </span>
                            </span>
                        </span>
                        <div className="flex items-center gap-x-2">
                            {!video.is_free && !isUserSubscribed ? (
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
                                    <LockIcon />
                                </div>
                            ) : (
                                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300">
                                    <IconLockOpen />
                                </div>
                            )}
                            <span className="w-8 text-xs text-right ">
                                {convertSecondsToMinutes(video.seconds_time)}
                            </span>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default VideoList;
