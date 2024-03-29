import { Link, usePage } from "@inertiajs/react";
import React, { useEffect } from "react";
import { convertSecondsToMinutes } from "../../../lib/Helper";
import { LockIcon } from "../../../lib/Icon";
import { IconLockAccess, IconLockOpen } from "@tabler/icons-react";

function VideoList({ serie, activeVideo = null }) {
    const isUserSubscribed = usePage().props.isUserSubscribed;
    return (
        <ul className="relative divide-y divide-dashed">
            {serie.videos.map((video, i) => (
                <li key={i}>
                    <Link
                        className="flex py-3 [&_svg]:size-4 text-foreground hover:text-muted-foreground  items-center justify-between"
                        href={route("serie.watch", [
                            serie.slug,
                            video.order_num,
                        ])}
                    >
                        <span className="flex items-center text-sm sm:text-base">
                            <span className="mr-2 flex-shrink-0 text-muted-foreground print:hidden md:mr-3">
                                {i + 1}
                            </span>
                            <span className="line-clamp-1 block flex-none">
                                {activeVideo !== null
                                    ? video.title.slice(0, 28) + "..."
                                    : video.title}
                            </span>
                        </span>
                        <div className="flex items-center gap-x-2 text-muted-foreground">
                            {!video.is_free && !isUserSubscribed && (
                                <LockIcon className="w-5 h-5" />
                            )}
                            <div
                                data-orientation="vertical"
                                role="none"
                                className="shrink-0 bg-border w-[1px] ml-2 h-5"
                            />
                            <span className="w-8 text-right font-light group-hover:text-foreground lg:w-12">
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
