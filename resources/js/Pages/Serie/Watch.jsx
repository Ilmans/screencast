import PublicLayout from "@/Layouts/PublicLayout";
import React, { useState } from "react";
import BadgeButton from "@/Components/BadgeButton";
import Player from "./Player";
import { Head, usePage } from "@inertiajs/react";
import VideoListInWatch from "./Partials/VideoListInWatch";
import DoubleArrowLeftIcon from "@/Components/Icons/DoubleArrowLeftIcon";
import DoubleArrowRightIcon from "@/Components/Icons/DoubleArrowRightIcon";
import Comment from "./Partials/Video/Comment";
import PlaylistIcon from "@/Components/Icons/PlaylistIcon";
import ListVideoSidebar from "@/Components/Layout/ListVideoSidebar";

function Watch({ serie, video }) {
    const [showInMobile, setShowInMobile] = useState(false);
    const { user } = usePage().props.auth;
    return (
        <>
            <ListVideoSidebar
                showInMobile={showInMobile}
                setShowInMobile={setShowInMobile}
                title={serie.title}
                description={serie.description}
            >
                <VideoListInWatch serie={serie} activeVideo={video} />
            </ListVideoSidebar>

            <div className="flex lg:flex-row flex-col gap-x-0 -mx-4 lg:-mx-0  lg:gap-x-6">
                <div className="hidden lg:block w-1/4 shrink-0">
                    <ul
                        role="list"
                        className="flex flex-col sticky top-24 gap-y-4"
                    >
                        <li className="-mx-2 relative z-10 overflow-hidden rounded-md p-px">
                            <div className="bg-card rounded-sm ring-1 ring-foreground/10 overflow-hidden relative">
                                <div className="space-y-2 p-4">
                                    <div className="font-semibold">
                                        {serie.title}
                                    </div>
                                    <div className="text-sm justify-between flex text-muted-foreground items-center">
                                        <span>
                                            {serie.videos_count} Total videos
                                        </span>
                                        <span>
                                            <a
                                                className="hover:text-foreground transition"
                                                href="https://parsinta.com/series/tags/filament"
                                            >
                                                Should be category here
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <VideoListInWatch serie={serie} activeVideo={video} />
                        <li className="-mx-6 mt-auto pt-4" />
                    </ul>
                </div>
                <main className="w-full">
                    <div className="mt-2 flex relative flex-col gap-y-4 px-4 pb-4 lg:mt-0 lg:gap-y-6">
                        {user && user.is_admin && (
                            <div className="absolute z-40 right-0 left-0  text-white px-4 py-2 text-xs bg-blue-400 ">
                                admin Preview mode
                            </div>
                        )}
                        <Player video={video} />
                        <div className="flex items-center justify-between lg:hidden">
                            <button
                                onClick={() => setShowInMobile(true)}
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 bg-accent text-foreground hover:bg-muted h-10 px-4 py-2"
                            >
                                <PlaylistIcon className="w-5 h-5 mr-2" />
                                Buka playlist
                            </button>
                            <div className="flex justify-end gap-x-2">
                                <span
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 bg-accent text-foreground hover:bg-muted size-9 opacity-50"
                                    disabled=""
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="square"
                                            strokeWidth={2}
                                            d="m14 16-4-4 4-4"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-4 p-4">
                        <div className="rounded-lg border bg-card text-card-foreground rounded-b-none border-b-0 shadow-none">
                            <div className="flex flex-col p-6">
                                <div className="flex flex-col items-start justify-between sm:flex-row">
                                    <div>
                                        <h3 className="text-xl font-bold leading-6 tracking-tighter lg:text-4xl lg:leading-10">
                                            {video.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-2 sm:text-base lg:text-xl">
                                            {serie.teaser}
                                        </p>
                                    </div>
                                    <div className="mt-4 hidden w-full sm:mt-0 sm:w-auto sm:justify-end sm:gap-x-1 lg:flex">
                                        <span
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 bg-secondary border dark:border-zinc-700 text-secondary-foreground hover:bg-secondary/80 size-9 opacity-30"
                                            disabled=""
                                        >
                                            <DoubleArrowLeftIcon className="w-5 h-5" />
                                        </span>
                                        <a
                                            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 bg-secondary border dark:border-zinc-700 text-secondary-foreground hover:bg-secondary/80 size-9"
                                            href="https://parsinta.com/series/belajar-laravel-filament-dari-awal/2"
                                        >
                                            <DoubleArrowRightIcon className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 pt-0">
                                <div className="prose max-w-4xl dark:prose-invert hover:prose-a:underline prose-code:bg-accent prose-code:text-accent-foreground prose-pre:border prose-pre:bg-accent/40">
                                    <p>{video.description}</p>
                                </div>
                            </div>
                        </div>
                        {/* <Comment /> */}
                    </div>
                </main>
            </div>
        </>
    );
}

export default Watch;
Watch.layout = (page) => <PublicLayout children={page} footer={false} />;
