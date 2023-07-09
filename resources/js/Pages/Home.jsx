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
            <section className=" bg-slate-100">
                <div className="px-8 py-4 text-black font-poppins">
                    <h2 className="text-lg font-bold">
                        Baru baru ini di tambahkan.
                    </h2>
                    <p className="text-xs text-slate-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nisi
                    </p>
                </div>
                <div className="grid gap-4 lg:grid-cols-3">
                    {series.data.map((serie, i) => (
                        <Serie serie={serie} />
                    ))}
                </div>
            </section>
        </Fragment>
    );
}

Home.layout = (page) => <PublicLayout children={page} />;
