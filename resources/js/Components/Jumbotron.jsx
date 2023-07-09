import React from "react";
import Button from "./Button";

function Jumbotron() {
    return (
        <section className="relative px-4 py-12 space-y-6 text-center bg-white lg:px-48 font-poppins dark:bg-grid-emerald-900/40 bg-grid-emerald-100 dark:bg-slate-950 lg:py-32">
            <div className="absolute inset-0 grid grid-cols-12 overflow-hidden bg-gradient-to-b via-slate-950 to-white z-1"></div>
            <h1 className="text-3xl font-semibold z-2 ">
                Lorem <span className="text-slate-400">Ipsum</span> dolor sit,
                amet{" "}
            </h1>
            <p className="text-sm lg:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore sint sit, perspiciatis sed quibusdam omnis temporibus
                laboriosam tempora at laudantium possimus odio est praesentium
                consequatur sapiente incidunt iste rerum corrupti.
            </p>
            <div className="space-x-4">
                <Button bg={"primary"}>Jelajahi Video</Button>
                <Button bg={"secondary"}>Baca Artikel</Button>
            </div>
        </section>
    );
}

export default Jumbotron;
