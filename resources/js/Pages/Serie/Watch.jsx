import PublicLayout from "@/Layouts/PublicLayout";
import React, { useState } from "react";
import VideoList from "./VideoList";
import { DoubleArrowRight } from "../../../lib/Icon";
import BadgeButton from "@/Components/BadgeButton";
import Player from "./Player";
import ListVideoSidebar from "@/Components/Layout/ListVideoSidebar";
import { Head, usePage } from "@inertiajs/react";
import VideoListInWatch from "./Partials/VideoListInWatch";
import DoubleArrowLeftIcon from "@/Components/Icons/DoubleArrowLeftIcon";
import DoubleArrowRightIcon from "@/Components/Icons/DoubleArrowRightIcon";
import Comment from "./Partials/Video/Comment";

function Watch({ serie, video }) {
    const [showInMobile, setShowInMobile] = useState(false);
    const { user } = usePage().props.auth;
    return (
        <div className="flex lg:flex-row flex-col lg:gap-x-6">
            <div className="hidden lg:block w-1/4 shrink-0">
                <ul role="list" className="flex flex-col sticky top-24 gap-y-4">
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
                <div className="mt-2 flex flex-col gap-y-4 px-4 pb-4 lg:mt-0 lg:gap-y-6">
                    {user && user.is_admin && (
                        <div className="absolute z-40 w-fit px-4 py-2 mx-2 font-mono text-xs bg-blue-800 rounded-lg">
                            Anda sedang menonton sebagai admin mode atau preview
                            mode, progress menonton tidak akan di simpan.
                        </div>
                    )}
                    <Player video={video} />
                    <div className="flex items-center justify-between lg:hidden">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                fill="none"
                                viewBox="0 0 24 24"
                                className="mr-2"
                            >
                                <path
                                    fill="currentColor"
                                    d="M6 8.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M6 12a1 1 0 1 0 2 0 1 1 0 0 0-2 0m0 3.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0"
                                />
                                <path
                                    fill="currentColor"
                                    fillRule="evenodd"
                                    d="M2 5.75C2 4.784 2.784 4 3.75 4h16.5c.966 0 1.75.784 1.75 1.75v12.5A1.75 1.75 0 0 1 20.25 20H3.75A1.75 1.75 0 0 1 2 18.25zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h6.75v-13z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Buka playlist
                        </button>
                        <div className="flex justify-end gap-x-2">
                            <span
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 bg-primary text-primary-foreground hover:bg-primary/90 size-9 opacity-50"
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
                            <a
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 bg-primary text-primary-foreground hover:bg-primary/90 size-9"
                                href="https://parsinta.com/series/belajar-laravel-filament-dari-awal/2"
                            >
                                <span className="sr-only">
                                    Video selanjutnya: Filament Overview
                                </span>
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
                                        d="m10 16 4-4-4-4"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="-mt-4 p-4">
                    <div className="rounded-lg border bg-card text-card-foreground rounded-b-none border-b-0 shadow-none">
                        <div className="flex flex-col p-6">
                            <div className="flex flex-col items-start justify-between sm:flex-row">
                                <div>
                                    <h3 className="text-xl font-bold leading-6 tracking-tighter lg:text-4xl lg:leading-10">
                                        {serie.title}
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
                                <p>{serie.description}</p>
                            </div>
                        </div>
                    </div>
                    <Comment />
                </div>
            </main>
        </div>
    );
}

export default Watch;
Watch.layout = (page) => <PublicLayout children={page} footer={false} />;
