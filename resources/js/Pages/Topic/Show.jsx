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
            <section className="container relative bg-primary font-poppins   lg:py-16">
                <div className="absolute top-0 bottom-0 left-0 w-full bgkeren"></div>
                <div className="absolute inset-0   bg-gradient-to-br from-transparent to-70% to-primary"></div>
                <div className="absolute inset-0   bg-gradient-to-tr from-transparent to-90% to-primary"></div>

                <div className="relative py-12 space-y-6">
                    <h1 className="text-xl font-semibold lg:text-2xl z-2 ">
                        Belajar Pemrograman
                        <span className="text-slate-400">
                            {currentTopic.name}
                        </span>{" "}
                    </h1>
                    <p className="text-xs lg:text-sm lg:w-1/3">
                        {currentTopic.description}
                    </p>
                    <div className="flex flex-wrap items-center text-xs border-gray-600 rounded-md lg:text-sm lg:w-3/5 gap-x-4 font-poppins ">
                        <ListTopics topics={topics} />
                    </div>
                </div>
            </section>

            <section className="py-4 border-t container">
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
