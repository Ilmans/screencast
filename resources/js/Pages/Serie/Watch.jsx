import PublicLayout from "@/Layouts/PublicLayout";
import React, { useState } from "react";
import VideoList from "./VideoList";
import { DoubleArrowRight } from "../../../lib/Icon";
import BadgeButton from "@/Components/BadgeButton";
import Player from "./Player";
import ListVideoSidebar from "@/Components/Layout/ListVideoSidebar";
import { usePage } from "@inertiajs/react";

function Watch({ serie, video, canWatch }) {
    const [showInMobile, setShowInMobile] = useState(false);

    return (
        <div className="relative  lg:px-4 lg:flex   lg:gap-x-4">
            {/* List video */}
            <ListVideoSidebar
                showInMobile={showInMobile}
                setShowInMobile={setShowInMobile}
                title={serie.title}
                description={`${serie.videos_count} Episode`}
            >
                <VideoList serie={serie} activeVideo={video.order_num} />
            </ListVideoSidebar>

            {/* show sidebar button */}
            <button
                className="px-2 text-xs py-2 lg:hidden"
                onClick={() => {
                    setShowInMobile(true);
                }}
            >
                <BadgeButton className="w-fit">
                    <DoubleArrowRight className="w-4 h-4" />
                </BadgeButton>
            </button>

            <div className="lg:w-3/4    lg:p-4">
                {/* Video Player */}

                <div className="p-2.5 relative ">
                    <div className="absolute inset-0 bgkeren"></div>
                    <Player video={video} canWatch={canWatch} />
                </div>

                {/* Video Title & description */}
                <h2 className="px-4 py-8 text-3xl font-semibold font-poppins">
                    {video.title}
                </h2>
                <div className="p-4 border-t border-border ">
                    <h3 className="text-lg font-semibold">Deskripsi Video</h3>
                    <p className="mt-2 text-sm">{video.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Watch;
Watch.layout = (page) => <PublicLayout children={page} footer={false} />;
