import ShareSosmed from "@/Components/ShareSosmed";
import { Link, router } from "@inertiajs/react";
import { IconCheck, IconChevronRight } from "@tabler/icons-react";
import React, { Fragment } from "react";

function SerieInfo({ serie, isSavedWatchLater }) {
    const wachLater = (serie_id) => {
        if (isSavedWatchLater) {
            return;
        }
        router.post(
            "/watch_later",
            { serie_id: serie_id },
            {
                preserveScroll: true,
                preserveState: true,
            }
        );
    };
    return (
        <div className="relative w-full overflow-hidden lg:w-1/2 md:top-10 md:sticky rounded-t-xl md:rounded-t-3xl">
            <div
                className="w-full h-full lg:rotate-[-180deg] inset-0 md:block hidden absolute bg-center bg-cover z-0"
                style={{
                    backgroundImage: `url(${serie.image})`,
                }}
            />
            <div className="flex flex-col h-full md:p-6 lg:p-12 gap-y-3 md:gap-y-6 md:backdrop-blur-3xl bg-gradient-to-b from-transparent via-white/80 to-white dark:from-transparent dark:via-slate-950/60 dark:to-slate-950">
                <div className="LazyLoad is-visible">
                    <img
                        className="z-10 rounded-lg md:rounded-2xl md:shadow-xl"
                        src={serie.image}
                        style={{
                            opacity: 1,
                            transform: "none",
                        }}
                    />
                </div>
                <h1 className="text-xl font-bold tracking-tight text-slate-800 dark:text-slate-100 md:text-3xl">
                    {serie.title}
                </h1>
                <p className="text-sm text-slate-800 dark:text-slate-100 sm:text-tiny">
                    {serie.videos_count} episode, terakhir diperbarui tanggal{" "}
                    {serie.updated_at}
                </p>
                <div className="flex overflow-x-auto whitespace-nowrap gap-x-1.5">
                    <Link
                        className="transition duration-200 ease-in group inline-flex items-center rounded-full px-4 py-1.5 font-medium transition bg-slate-900 hover:bg-slate-700 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-800"
                        href={`/serie/${serie.slug}/${serie.videos[0].order_num}`}
                    >
                        Mulai
                        <IconChevronRight className="w-4 h-4 mt-0.5 ml-2 -mr-1 stroke-current stroke-[1.5]" />
                    </Link>
                    <button
                        onClick={() => wachLater(serie.id)}
                        className="transition duration-200 ease-in group inline-flex items-center rounded-full px-4 py-1.5 font-medium transition dark:bg-white/20 text-slate-800 dark:text-white dark:hover:bg-white/30 bg-slate-300 hover:bg-slate-200"
                    >
                        {isSavedWatchLater ? (
                            <Fragment>
                                <span>Telah Disimpan</span>
                                <IconCheck className="w-4 h-4 mt-0.5 ml-2 -mr-1 stroke-current stroke-[1.5]" />
                            </Fragment>
                        ) : (
                            <Fragment>
                                <span>Tonton nanti</span>
                                <IconChevronRight className="w-4 h-4 mt-0.5 ml-2 -mr-1 stroke-current stroke-[1.5]" />
                            </Fragment>
                        )}
                    </button>
                    {/* <a
                                        className="transition duration-200 ease-in group inline-flex items-center rounded-full px-4 py-1.5 font-medium transition dark:bg-white/20 text-slate-800 dark:text-white dark:hover:bg-white/30 bg-slate-300 hover:bg-slate-200"
                                        href="/login"
                                    >
                                        <span className="hidden mr-1 sm:inline">
                                            Source
                                        </span>{" "}
                                        code
                                        <ChevronRight />
                                    </a> */}
                </div>
                <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                    {serie.description}
                </p>
                <div className="flex overflow-x-auto gap-x-2 whitespace-nowrap">
                    {serie.topics.map((topic, i) => (
                        <Link
                            key={i}
                            className="text-slate-800 dark:text-slate-100 transition duration-200 ease-in rounded-full bg-slate-300 hover:bg-slate-200 dark:bg-white/20 dark:hover:bg-white/30 px-3.5 py-1  text-sm font-medium"
                            href={`/topic/${topic.slug}`}
                        >
                            {topic.name}
                        </Link>
                    ))}
                </div>
                <ShareSosmed />
            </div>
        </div>
    );
}

export default SerieInfo;
