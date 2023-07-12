import PublicLayout from "@/Layouts/PublicLayout";
import React, { useEffect, useRef, useState } from "react";
import VideoList from "./VideoList";
import ReactPlayer from "react-player";
import { DoubleArrowRight, PlayIcon, RightBar } from "../../../lib/Icon";
import BadgeButton from "@/Components/BadgeButton";
import { convertSecondsToMinutes } from "../../../lib/Helper";
import Player from "./Player";

function Watch({ serie, video }) {
    const [showMobileList, setShowMobileList] = useState(false);

    return (
        <div className="relative min-h-screen lg:px-4 lg:flex   lg:gap-x-4">
            {/* List video */}
            <div
                className={`fixed lg:static top-0  ${
                    showMobileList ? "" : "-translate-x-full lg:translate-x-0"
                } z-10 p-4  duration-200 ease-in-out border-r rounded-lg transiton-all   lg:rounded-none lg:sticky lg:w-1/4 border-slate-200 dark:border-slate-800`}
            >
                <div className="absolute right-0 p-4 lg:hidden dark:text-slate-400">
                    <button
                        onClick={() => {
                            setShowMobileList(false);
                        }}
                    >
                        x
                    </button>
                </div>
                <div className="px-2">
                    <h2 className="text-lg font-semibold font-poppins ">
                        {serie.title}
                    </h2>
                    <p className="text-sm">
                        {serie.videos_count} Episode -{" "}
                        {serie.topics.map((topic, i) => (
                            <span key={i} className="text-sm font-slate-500">
                                {topic.name}
                                {" ,"}
                            </span>
                        ))}
                    </p>

                    <div className="max-h-screen mt-4 overflow-y-auto scrollbar-thin scrollbar-none">
                        <VideoList
                            serie={serie}
                            activeVideo={video.order_num}
                        />
                    </div>
                </div>
            </div>

            {/* Video Player */}
            <div className="lg:w-3/4   lg:p-4">
                <div className="px-4 py-2 lg:hidden">
                    <button
                        onClick={() => {
                            setShowMobileList(true);
                        }}
                    >
                        <BadgeButton className="w-fit">
                            <DoubleArrowRight className="w-4 h-4" />
                        </BadgeButton>
                    </button>
                </div>

                {/* Video Player */}
                <div className="relative p-2">
                    <div className="absolute inset-0 bgkeren"></div>

                    <Player video={video} />
                </div>

                <h2 className="px-4 py-8 text-3xl font-semibold font-poppins">
                    {video.title}
                </h2>
                <div className="p-4 mt-4 text-white bg-slate-900">
                    <h3 className="text-lg font-semibold">Deskripsi Video</h3>
                    <p className="mt-2 text-sm">{video.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Watch;
Watch.layout = (page) => <PublicLayout children={page} footer={false} />;
