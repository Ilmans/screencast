import InputWithIcon from "@/Components/InputWithIcon";
import Serie from "@/Components/Page/Serie";
import PublicLayout from "@/Layouts/PublicLayout";

import React, { Fragment } from "react";
import { SearchIcon } from "../../../lib/Icon";
import ListTopics from "@/Components/Page/ListTopics";
import FilterSeries from "@/Components/Page/FilterSeries";
import { Link } from "@inertiajs/react";
import Pagination from "@/Components/Page/Pagination";

function Index({ topics, series }) {

    return (
        <Fragment>
            <section className="relative bg-white font-poppins dark:bg-grid-emerald-900/40 bg-grid-emerald-100 dark:bg-slate-950 lg:py-16">
                <div className="absolute top-0 bottom-0 left-0 w-full bgkeren"></div>
                <div className="absolute inset-0   bg-gradient-to-br from-transparent to-70% to-white dark:to-slate-950"></div>
                <div className="absolute inset-0   bg-gradient-to-tr from-transparent to-90% to-white dark:to-slate-950"></div>
              

                <div className="relative py-12 space-y-6">
                    <h1 className="text-xl font-semibold lg:text-2xl z-2 ">
                        Pilihan <span className="text-slate-400">Vidoe</span>{" "}
                        pemrograman
                    </h1>
                    <p className="text-xs lg:text-sm lg:w-1/3">
                        Cari video yang ingin anda pelajari , jadikan ngodik
                        asik dengan mempelajari apa yang ingin anda pelajari
                    </p>
                    <div className="flex flex-wrap items-center text-xs border-gray-600 rounded-md lg:text-sm lg:w-3/5 gap-x-4 font-poppins ">
                        <ListTopics topics={topics} />
                    </div>
                </div>
            </section>

            <section className="py-4 bg-slate-100 dark:bg-slate-950 border-slate-900">
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

export default Index;

Index.layout = (page) => <PublicLayout children={page} />;
