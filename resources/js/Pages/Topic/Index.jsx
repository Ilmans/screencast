import Serie from "@/Components/Item/Serie";
import PublicLayout from "@/Layouts/PublicLayout";

import React, { Fragment } from "react";
import ListTopics from "@/Components/Item/ListTopics";
import FilterSeries from "@/Components/Page/FilterSeries";
import Pagination from "@/Components/Page/Pagination";
import GreetingPage from "@/Components/Page/GreetingPage";
import { Head } from "@inertiajs/react";
import { IconListSearch } from "@tabler/icons-react";

function Index({ topics, series }) {
    return (
        <Fragment>
            <Head title="Topics" />
            <GreetingPage
                variant="default"
                title={
                    <>
                        {" "}
                        Pilihan <span className="text-slate-400">
                            Vidoe
                        </span>{" "}
                        pemrograman
                    </>
                }
                desc=" Cari video yang ingin anda pelajari , jadikan ngodik asik
                    dengan mempelajari apa yang ingin anda pelajari"
            >
                <div className="flex flex-wrap items-center text-xs border-gray-600 rounded-md lg:text-sm lg:w-3/5 gap-x-4 font-poppins ">
                  
                    <ListTopics topics={topics} />
                </div>
            </GreetingPage>
            <section className="py-4 md:container">
                <FilterSeries />
                    {series.data.length === 0 && (
                        <div className="flex items-center justify-center w-full text-lg">
                            <div className="flex items-center text-sm font-poppins gap-x-2">
                                <IconListSearch className="w-5 h-5" />
                                <p>
                                    Tidak ada data atau pencarian tidak sesuai.
                                </p>
                            </div>
                        </div>
                    )}
                <div className="grid gap-24 md:grid-cols-3">
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
