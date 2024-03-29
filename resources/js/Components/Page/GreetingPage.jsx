import React, { Fragment } from "react";

function GreetingPage({ title, desc, children, variant = "default" }) {
    return (
        <section className="md:container relative bg-primary     lg:py-16">
            <div className="absolute inset-0 bgkeren"></div>
            <div className="absolute -top-4 inset-0    bg-gradient-to-b from-transparent to-60% to-primary"></div>

            <div className="relative py-12 space-y-6">
                <h1 className="text-xl font-semibold lg:text-2xl z-2 ">
                    {title}
                </h1>
                <p className="text-xs lg:text-sm lg:w-1/3">{desc}</p>
                {children}
            </div>
        </section>
    );
}

function variantLineDisplayInLeft() {
    return (
        <Fragment>
            <div className="absolute top-0 bottom-0 left-0 w-full bgkeren"></div>
            <div className="absolute inset-0   bg-gradient-to-br from-transparent to-70% to-primary"></div>
            <div className="absolute inset-0   bg-gradient-to-tr from-transparent to-90% to-primary"></div>
        </Fragment>
    );
}

function variantLineDisplayInRight() {
    return (
        <Fragment>
            <div className="absolute top-0 bottom-0 right-0 w-full bgkeren"></div>
            <div className="absolute inset-0   bg-gradient-to-tl from-transparent to-70% to-primary"></div>
            <div className="absolute inset-0   bg-gradient-to-bl from-transparent to-90% to-primary"></div>
        </Fragment>
    );
}

export default GreetingPage;
