import Jumbotron from "@/Components/Jumbotron";
import Serie from "@/Components/Item/Serie";
import TitleSection from "@/Components/Page/TitleSection";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import { Fragment } from "react";

export default function Home({ series }) {
    return (
        <Fragment>
            <Head title="Home"></Head>
            <Jumbotron />
            <section  className="relative md:container ">
                <div className="absolute inset-0 bgkeren"></div>
                <div className="absolute inset-0    bg-gradient-to-tr from-transparent to-50% to-primary"></div>

                <TitleSection
                    title="Baru baru ini di tambahkan."
                    desc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi"
                />
                <div className="relative grid gap-24 pb-12 md:grid-cols-3 ">
                    {series.map((serie, i) => (
                        <Serie serie={serie} />
                    ))}
                </div>
            </section>
        </Fragment>
    );
}

Home.layout = (page) => <PublicLayout children={page} />;
