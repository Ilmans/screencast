import InputWithIcon from "@/Components/InputWithIcon";
import Serie from "@/Components/Page/Serie";
import PublicLayout from "@/Layouts/PublicLayout";

import React, { Fragment } from "react";
import { SearchIcon } from "../../../lib/Icon";
import ListTopics from "@/Components/Page/ListTopics";
import FilterSeries from "@/Components/Page/FilterSeries";

function Index({ topics, series }) {
    return (
        <Fragment>
            <section className="relative py-12 space-y-6 bg-white font-poppins dark:bg-grid-emerald-900/40 bg-grid-emerald-100 dark:bg-slate-950 lg:py-16">
                <h1 className="text-2xl font-semibold z-2 ">
                    Pilihan <span className="text-slate-400">Vidoe</span>{" "}
                    pemrograman
                </h1>
                <p className="w-1/3 text-sm lg:text-sm">
                    Cari video yang ingin anda pelajari , jadikan ngodik asik
                    dengan mempelajari apa yang ingin anda pelajari
                </p>
                <div className="flex flex-wrap items-center w-3/5 text-sm border-gray-600 rounded-md shadow gap-x-4 font-poppins ">
                    <ListTopics topics={topics} />
                </div>
            </section>

            <section className="py-4 border-t bg-slate-200 dark:bg-slate-950 border-slate-900">
                <FilterSeries />
                <div className="grid grid-cols-3 gap-16">
                    {series.data.map((serie) => (
                        <Serie serie={serie} />
                    ))}
                </div>
            </section>
        </Fragment>
    );
}

export default Index;

Index.layout = (page) => <PublicLayout children={page} />;
