import PublicLayout from "@/Layouts/PublicLayout";
import React from "react";
import SerieInfo from "./Partials/SerieInfo";
import VideoListWrapper from "./Partials/VideoListWrapper";

function Show({ serie, isSavedWatchLater }) {
    return (
        <div className="relative py-8 lg:container  lg:py-20">
            <div className="grid grid-cols-12 mx-auto max-w-screen-2xl">
                <section className="col-span-12 ">
                    <div className="relative flex flex-col items-start gap-12 md:flex-row">
                        <SerieInfo
                            serie={serie}
                            isSavedWatchLater={isSavedWatchLater}
                        />
                        <VideoListWrapper serie={serie} />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Show;
Show.layout = (page) => <PublicLayout children={page} />;
