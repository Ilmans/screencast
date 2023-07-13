import React, { Fragment, useEffect, useState } from "react";
import { PlayIcon } from "../../../lib/Icon";
import { convertSecondsToMinutes } from "../../../lib/Helper";
import ReactPlayer from "react-player/youtube";
import { needLogin, FakeVideoPlayer } from "@/Components/Page/FakeVideoPlayer";
import { usePage } from "@inertiajs/react";

function Player({ video, canWatch }) {
    const { user } = usePage().props.auth;

    const [play, setPlay] = useState(false);
    useEffect(() => {
        setPlay(false);
    }, [video]);

    return (
        <div className="relative w-full overflow-hidden rounded-lg aspect-video">
            {play ? (
                <ReactPlayer
                    height="100%"
                    width="100%"
                    url={
                        "https://www.youtube.com/watch?v=" +
                        video.unique_video_id
                    }
                    playing={play}
                />
            ) : (
                <FakeVideoPlayer
                    disabledPlay={!canWatch}
                    video={video}
                    setPlay={setPlay}
                    center={
                        user === null && video.is_free === 1
                            ? needLogin({
                                  title: "Login to watch",
                                  desc: "You need to login to watch this video",
                                  needLogin: true,
                              })
                            : !canWatch
                            ? needLogin({
                                  title: "Subscribe to watch",
                                  desc: "You need to subscribe to watch this video",
                                  needLogin: user === null,
                              })
                            : false
                    }
                />
            )}
        </div>
    );
}

export default Player;
