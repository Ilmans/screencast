import React from "react";
import { PlayIcon } from "../../../lib/Icon";
import { convertSecondsToMinutes } from "../../../lib/Helper";
import { Button } from "../ui/button";
import { router } from "@inertiajs/react";

function FakeVideoPlayer({
    center = false,
    video,
    setPlay,
    disabledPlay = false,
}) {
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
            <h2 className="font-bold font-poppins">{title}</h2>
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
