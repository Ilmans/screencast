import InputWithIcon from "@/Components/InputWithIcon";
import Serie from "@/Components/Video/Serie";
import React, { Fragment } from "react";
import { SearchIcon } from "../../../lib/Icon";
import PublicLayout from "@/Layouts/PublicLayout";
import { Link } from "@inertiajs/react";

function Show({ currentTopic, topics, series }) {
    return (
        <Fragment>
            <section className="relative py-12 space-y-6 bg-white font-poppins dark:bg-grid-emerald-900/40 bg-grid-emerald-100 dark:bg-slate-950 lg:py-16">
                <h1 className="text-2xl font-semibold z-2 ">
                    Belajar{" "}
                    <span className="text-slate-400">{currentTopic.name}</span>{" "}
                </h1>
                <p className="w-1/3 text-sm lg:text-sm">
                    {currentTopic.description}
                </p>
                <div className="flex flex-wrap items-center w-3/5 text-sm border-gray-600 rounded-md shadow gap-x-4 font-poppins ">
                    {topics.map((topic, i) => (
                        <Link
                            href={`/topic/${topic.slug}`}
                            key={i}
                            className="flex items-center py-2 font-semibold rounded-lg gap-x-2 hover:text-blue-400"
                        >
                            <img
                                className="rounded-lg"
                                width={25}
                                height={25}
                                src={topic.image}
                                alt=""
                            />
                            <p>{topic.name}</p>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="py-4 border-t bg-slate-200 dark:bg-slate-950 border-slate-900">
                <div className="flex items-center justify-between mb-8">
                    <select
                        id="countries"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option selected>Terbaru</option>
                    </select>
                    <InputWithIcon
                        icon={<SearchIcon />}
                        placeholder="Cari video"
                    />
                </div>
                <div className="grid grid-cols-3 gap-16">
                    {series.data.map((serie) => (
                        <Serie serie={serie} />
                    ))}
                </div>
            </section>
        </Fragment>
    );
}

export default Show;
Show.layout = (page) => <PublicLayout children={page} />;
