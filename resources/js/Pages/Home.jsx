import Button from "@/Components/Button";
import Jumbotron from "@/Components/Jumbotron";
import Serie from "@/Components/Page/Serie";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import { Fragment } from "react";

export default function Home({ series }) {
    return (
        <Fragment>
            <Head>
                <title>CodingAsik</title>
            </Head>
            <Jumbotron />
            <section className="relative bg-slate-100/50 dark:bg-slate-950">
                <div className="absolute inset-0 bgkeren"></div>
                <div className="absolute inset-0    bg-gradient-to-tr from-transparent to-50% to-white dark:to-slate-950"></div>

                <div className="relative py-4 pt-8 mb-8 dark:text-white font-poppins">
                    <h2 className="text-lg font-bold">
                        Baru baru ini di tambahkan.
                    </h2>
                    <p className="text-xs text-slate-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi
                    </p>
                </div>
                <div className="relative grid gap-12 lg:grid-cols-3 ">
                    {series.data.map((serie, i) => (
                        <Serie serie={serie} />
                    ))}
                </div>
            </section>
        </Fragment>
    );
}

Home.layout = (page) => <PublicLayout children={page} />;
