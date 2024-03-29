import React from "react";
import { PlayIcon, UserIcon } from "../../../lib/Icon";
import { convertSecondsToMinutes } from "../../../lib/Helper";
import { Button } from "../ui/button";
import { Link, router, usePage } from "@inertiajs/react";
import PlayerIcon from "../Icons/PlayerIcon";

function FakeVideoPlayer({ center = false, video, setPlay }) {
    const { isUserSubscribed } = usePage().props;
    const { user } = usePage().props.auth;
    const disabledPlay = !user || (!video.is_free && !isUserSubscribed);
    return (
        <div
            className="z-20 overflow-hidden rounded-md bg-muted ring-1 ring-input"
            style={{ position: "absolute", inset: 0 }}
        >
            <div className="flex   h-full flex-col justify-between bg-background">
                <div className="relative flex h-full flex-1 items-center justify-center">
                    <div className="z-10 max-w-xl space-y-4">
                        {disabledPlay && (
                            <>
                                <div className="flex flex-col p-0">
                                    <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                                        {!user && video.is_free
                                            ? "Perlu Login"
                                            : "  Premium content"}
                                    </h3>
                                    <p className="mt-1.5 text-sm text-muted-foreground">
                                        Nikmati semua video berbayar dengan
                                        menjadi member premium. Kami menyediakan
                                        lebih dari 1000 video dan artikel
                                        premium yang bisa kamu nikmati.
                                    </p>
                                </div>
                                <div>
                                    <Link
                                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 bg-black dark:bg-foreground text-primary hover:bg-primary/90 h-10 px-4 py-2"
                                        href={route("login")}
                                    >
                                        <UserIcon className="w-4 h-4" />
                                        {!user ? "Login" : "Langganan "}
                                    </Link>
                                </div>
                            </>
                        )}
                    </div>

                    {!disabledPlay && (
                        <button
                            onClick={() => {
                                setPlay(true);
                            }}
                            className="items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 bg-primary  px-4 py-2 size-12 overflow-hidden grid group place-content-center rounded-full z-10 shadow-md shadow-background/20"
                        >
                            <PlayerIcon className="w-12 h-12" />
                        </button>
                    )}
                </div>
                <div className="flex items-center border-t justify-between gap-x-4 p-2 lg:p-4">
                    <div className="text-sm text-muted-foreground">
                        {convertSecondsToMinutes(video.seconds_time)}
                    </div>
                    <div className="h-1 sm:h-3 bg-foreground/20 w-full rounded-full overflow-hidden">
                        <div className="w-20 sm:w-32 bg-foreground h-full" />
                    </div>
                    <div className="sm:flex hidden items-center [&_svg]:!text-foreground gap-x-1">
                        <button
                            onClick={() => {
                                if (disabledPlay) return false;
                                setPlay(true);
                            }}
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 bg-secondary border dark:border-zinc-700 text-secondary-foreground hover:bg-secondary/80 size-9 rounded-full"
                        >
                            <PlayerIcon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    return (
        <div className="relative flex flex-col w-full h-full overflow-hidden  bg-black shadow-xl shadow-slate-900/70 lg:rounded-lg bg-grid-white/5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-black to-black"></div>
            <div className="flex items-center justify-center flex-1">
                {center === false ? (
                    <button
                        onClick={() => {
                            setPlay(true);
                        }}
                        className="relative flex items-center justify-center w-12 h-12 transition duration-200 ease-in bg-blue-600 rounded-full hover:bg-blue-700"
                    >
                        <PlayIcon />
                    </button>
                ) : (
                    center
                )}
            </div>
            <div className="relative px-4">
                <div className="relative w-full h-1 overflow-hidden rounded-full bg-blue-700/40">
                    <div className="absolute inset-0 w-8 bg-blue-200"></div>
                </div>
            </div>
            <div className="relative flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black to-primary-900/10 via-black">
                <div className="flex gap-x-1">
                    <button
                        disabled={disabledPlay}
                        onClick={() => {
                            if (disabledPlay) return;
                            setPlay(true);
                        }}
                        className={`[&amp;>svg]:w-5 [&amp;>svg]:h-5 [&amp;>svg]:stroke-1 relative focus:outline-none items-center fade px-4 py-2 rounded-lg text-foreground bg-slate-700 hover:bg-slate-600 inline-flex gap-x-1 text-[13px] font-medium
                        ${disabledPlay ? "opacity-50 cursor-not-allowed" : ""}
                        `}
                    >
                        <PlayIcon />
                    </button>
                </div>
                <span className="relative font-mono text-xs font-semibold tracking-tighter">
                    {convertSecondsToMinutes(video.seconds_time)}
                </span>
            </div>
        </div>
    );
}

function needLogin({ title, desc, needLogin = false }) {
    return (
        <div className="relative z-50 text-white">
            <h2 className="font-bold  ">{title}</h2>
            <p className="mt-2 text-sm ">
                {" "}
                {desc} <br />
            </p>
            {needLogin ? (
                <Button
                    onClick={() => {
                        router.get("/login");
                    }}
                    variant=""
                    size="lg"
                    className="mt-4"
                >
                    Login
                </Button>
            ) : (
                <Button
                    onClick={() => {
                        router.get("/pricing");
                    }}
                    variant=""
                    size="lg"
                    className="mt-4 rounded-full hover:bg-accent"
                >
                    Berlangganan
                </Button>
            )}
        </div>
    );
}

export { FakeVideoPlayer, needLogin };
