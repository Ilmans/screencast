import React, { Fragment, useEffect, useRef, useState } from "react";

import ReactPlayer from "react-player/youtube";
import { needLogin, FakeVideoPlayer } from "@/Components/Page/FakeVideoPlayer";
import { usePage } from "@inertiajs/react";
import axios from "axios";

function Player({ video, canWatch }) {
    const { user } = usePage().props.auth;
    const [play, setPlay] = useState(false);
    const [prevWatchTime, setPrevWatchTime] = useState(0); // [seconds, setSeconds
    const [currentTime, setCurrentTime] = useState(0);

    const intervalRef = useRef(null);

    useEffect(() => {
        // save each 10 seconds
        if (currentTime - prevWatchTime > 10 && play) {
            saveWatchTime(currentTime);
        }
    }, [currentTime]);

    const saveWatchTime = (time) => {
        setPrevWatchTime(time);

        axios
            .post("/save-watch-progress", {
                video_id: video.id,
                secondsTime: time,
            })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        setPlay(false);
    }, [video]);

    const handleContextMenu = (event) => {
        event.preventDefault();
        // You can add custom behavior here if needed
      };
    return (
        <div onContextMenu={handleContextMenu} className="relative w-full overflow-hidden rounded-lg aspect-video">
            {play ? (
                <ReactPlayer
                
                    onProgress={(e) => {
                        setCurrentTime(e.playedSeconds);
                    }}
                    //show controls
                    controls={true}
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
