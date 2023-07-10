import InputWithIcon from "@/Components/InputWithIcon";
import Serie from "@/Components/Page/Serie";
import React, { Fragment } from "react";
import { SearchIcon } from "../../../lib/Icon";
import PublicLayout from "@/Layouts/PublicLayout";
import { Link } from "@inertiajs/react";
import ListTopics from "@/Components/Page/ListTopics";
import FilterSeries from "@/Components/Page/FilterSeries";
import Pagination from "@/Components/Page/Pagination";

function Show({ currentTopic, topics, series }) {
    return (
        <Fragment>
            <section className="relative py-12 space-y-6 bg-white font-poppins dark:bg-grid-emerald-900/40 bg-grid-emerald-100 dark:bg-slate-950 lg:py-16">
                <h1 className="text-xl font-semibold lg:text-2xl z-2 ">
                    Belajar{" "}
                    <span className="text-slate-400">{currentTopic.name}</span>{" "}
                </h1>
                <p className="text-sm lg:w-1/3 lg:text-sm">
                    {currentTopic.description}
                </p>
                <div className="flex flex-wrap items-center text-sm border-gray-600 rounded-md shadow lg:w-3/5 gap-x-4 font-poppins ">
                    <ListTopics topics={topics} />
                </div>
            </section>

            <section className="py-4 border-t bg-slate-200 dark:bg-slate-950 border-slate-900">
                <FilterSeries />
                <div className="grid gap-16 lg:grid-cols-3">
                    {series.data.map((serie) => (
                        <Serie serie={serie} />
                    ))}
                </div>
                <div className="flex py-12 lg:justify-center">
                    <Pagination links={series.links} />
                </div>
            </section>
        </Fragment>
    );
}

export default Show;
Show.layout = (page) => <PublicLayout children={page} />;
