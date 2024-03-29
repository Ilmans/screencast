import React from "react";
import VideoList from "../VideoList";
import LockIcon from "@/Components/Icons/LockIcon";

function VideoListWrapper({ serie }) {
    return (
        <div className="w-full lg:w-1/2">
            <div>
                <div className="mb-4">
                    <h4 className="mb-1 text-lg font-semibold leading-none text-foreground lg:text-xl">
                        Daftar Episode
                    </h4>
                    <p className="leading-relaxed text-muted-foreground">
                        {serie.videos_count} episode siap untuk dipelajari, jadi
                        bersiaplah untuk mulai sekarang.
                    </p>
                </div>
            </div>
            <VideoList serie={serie} />
        </div>
    );
}

export default VideoListWrapper;
