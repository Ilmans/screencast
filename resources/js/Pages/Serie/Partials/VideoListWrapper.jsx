import React from "react";
import VideoList from "../VideoList";

function VideoListWrapper({ serie }) {
    return (
        <div className="w-full lg:w-1/2">
            <div>
                <div className="mb-4">
                    <h4 className="mb-1 text-lg font-semibold leading-none dark:text-white text-slate-900 lg:text-xl">
                        Daftar episode
                    </h4>
                    <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                        {serie.videos_count} episode siap untuk dipelajari, jadi
                        bersiaplah untuk mulai sekarang.
                    </p>
                </div>
                <VideoList serie={serie} />
            </div>
        </div>
    );
}

export default VideoListWrapper;
