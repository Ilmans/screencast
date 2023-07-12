import PublicLayout from "@/Layouts/PublicLayout";
import React from "react";
import { convertSecondsToMinutes } from "../../../lib/Helper";
import ShareSosmed from "@/Components/ShareSosmed";
import { Link } from "@inertiajs/react";
import VideoList from "./VideoList";
import { ChevronRight } from "../../../lib/Icon";

function Show({ serie }) {
    console.log(serie);
    return (
        <div className="container relative py-8 bg-primary   lg:py-20">
            <div className="grid grid-cols-12 mx-auto max-w-screen-2xl">
                <section className="col-span-12 ">
                    <div className="relative flex flex-col items-start gap-12 md:flex-row">
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
                                    {serie.videos_count} episode, terakhir
                                    diperbarui tanggal {serie.updated_at}
                                </p>
                                <div className="flex overflow-x-auto whitespace-nowrap gap-x-1.5">
                                    <a
                                        className="transition duration-200 ease-in group inline-flex items-center rounded-full px-4 py-1.5 font-medium transition bg-slate-900 hover:bg-slate-700 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-800"
                                        href="/series/ui-laravel-dan-react-nqp6j/1"
                                    >
                                        Mulai
                                        <ChevronRight />
                                    </a>
                                    <a
                                        className="transition duration-200 ease-in group inline-flex items-center rounded-full px-4 py-1.5 font-medium transition dark:bg-white/20 text-slate-800 dark:text-white dark:hover:bg-white/30 bg-slate-300 hover:bg-slate-200"
                                        href="/login"
                                    >
                                        <span>Tonton nanti</span>
                                        <ChevronRight />
                                    </a>
                                    <a
                                        className="transition duration-200 ease-in group inline-flex items-center rounded-full px-4 py-1.5 font-medium transition dark:bg-white/20 text-slate-800 dark:text-white dark:hover:bg-white/30 bg-slate-300 hover:bg-slate-200"
                                        href="/login"
                                    >
                                        <span className="hidden mr-1 sm:inline">
                                            Source
                                        </span>{" "}
                                        code
                                        <ChevronRight />
                                    </a>
                                </div>
                                <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                                    {serie.description}
                                </p>
                                <div className="flex overflow-x-auto gap-x-2 whitespace-nowrap">
                                    {serie.topics.map((topic, i) => (
                                        <a
                                            key={i}
                                            className="text-slate-800 dark:text-slate-100 transition duration-200 ease-in rounded-full bg-slate-300 hover:bg-slate-200 dark:bg-white/20 dark:hover:bg-white/30 px-3.5 py-1  text-sm font-medium"
                                            href="/topics/reactjs"
                                        >
                                            {topic.name}
                                        </a>
                                    ))}
                                </div>
                                <ShareSosmed />
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div>
                                <div className="mb-4">
                                    <h4 className="mb-1 text-lg font-semibold leading-none dark:text-white text-slate-900 lg:text-xl">
                                        Daftar episode
                                    </h4>
                                    <p className="leading-relaxed text-slate-500 dark:text-slate-400">
                                        {serie.videos_count} episode siap untuk
                                        dipelajari, jadi bersiaplah untuk mulai
                                        sekarang.
                                    </p>
                                </div>
                                <VideoList serie={serie} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Show;
Show.layout = (page) => <PublicLayout children={page} />;
