import React, { Fragment } from "react";
import Logo from "@/Components/Logo";
import { Link, usePage } from "@inertiajs/react";

function Footer() {
    const website = usePage().props.website;
    const { topic } = usePage().props;

    return (
        <Fragment>
            <section className="py-12 md:container border-slate-900">
                <div className="flex flex-col justify-between gap-4 lg:flex-row wrapper">
                    <div className="lg:w-1/4">
                        <div className="py-2 -ml-2">
                            <Logo />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground font-poppins">
                            {website && website.about && website.about}
                        </p>
                    </div>
                    <LinkSection
                        title="Explore"
                        links={[
                            { name: "Home", href: "/" },
                            { name: "Series", href: "/series" },
                            { name: "Articles", href: "/articles" },
                            { name: "Pricing", href: "/pricing" },
                            {
                                name: "Kontak Kami",
                                href: "https://wa.me/62895354534986",
                            },
                        ]}
                    />

                    <LinkSection
                        title="Topics"
                        links={topic.series.map((topicc) => ({
                            name: topicc.name,
                            href: `/topic/${topicc.slug}`,
                        }))}
                    />


                    <LinkSection
                        title={"Socials"}
                        links={website && website.socials ? JSON.parse(website.socials).map((social) => ({
                            name: social.name,
                            href: social.link,
                        })) : []}
                    />
                    {/* legal */}
                    <LinkSection
                        title="Legal"
                        links={[
                            { name: "Terms", href: "/terms" },
                            { name: "Privacy", href: "/privacy" },
                        ]}
                    />
                </div>
            </section>
            <div className="flex flex-col items-center justify-center gap-2 p-8 border-t bg-primary">
                <p className="text-xs text-muted-foreground">
                    Coding asik adalah merek dagang dari Ilman Sunanuddin
                </p>
                <p className="text-xs text-center font-poppins">
                    <span className="font-semibold">
                        @Copyright 2023 CodingAsik.
                    </span>{" "}
                    All rights reserved, yes, all of them
                </p>
            </div>
        </Fragment>
    );
}

function LinkSection({ title, links }) {
    return (
        <div key={title}>
            <h1 className="mb-4 text-lg font-medium font-poppins">{title}</h1>
            <ul className="space-y-2 text-sm md:space-y-4 font-poppins">
                {links.map((link) => (
                    <li key={link.name}>
                        <Link
                            className="text-muted-foreground hover:text-accent-foreground"
                            href={link.href}
                        >
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Footer;
