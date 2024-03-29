import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { convertSecondsToMinutes } from "../../../../lib/Helper";
import LockIcon from "@/Components/Icons/LockIcon";
import UnlockIcon from "@/Components/Icons/UnlockIcon";

function VideoListInWatch({ serie, activeVideo }) {
    const isUserSubscribed = usePage().props.isUserSubscribed;

    return (
        <li className="max-h-[38rem] -mx-2 overflow-y-auto pl-4 pr-5">
            <ul role="list" className="-mx-4 space-y-1">
                {serie.videos.map((video, i) => (
                    <li>
                        <Link
                            className={`${
                                activeVideo.id === video.id && "bg-accent"
                            } text-foreground hover:bg-muted group flex justify-between pr-4 pl-3 py-2 items-center gap-x-3 lg:rounded-sm text-sm font-medium leading-6 tracking-tighter`}
                            href={route("serie.watch", [
                                serie.slug,
                                video.order_num,
                            ])}
                        >
                            <span className="flex items-center gap-x-4">
                                <span className="line-clamp-1 flex items-center gap-x-2">
                                    <span className="">{i + 1}.</span>
                                    <span> {video.title}</span>
                                </span>
                            </span>
                            <span className="flex items-center text-xs gap-x-2 [&>svg]:w-4 [&>svg]:h-4">
                                <span>
                                    {" "}
                                    {convertSecondsToMinutes(
                                        video.seconds_time
                                    )}
                                </span>
                                {!video.is_free && !isUserSubscribed ? (
                                    <LockIcon className="w-5 h-5" />
                                ) : (
                                    <UnlockIcon className="w-5 h-5" />
                                )}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default VideoListInWatch;
