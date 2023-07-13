import React, { useState } from "react";
import { Button } from "./ui/button";

function Jumbotron() {
    return (
        <section className="relative container  px-4 py-12 space-y-6 text-center lg:px-48 font-poppins dark:bg-primary  lg:py-32 bg-primary">
            <div className="absolute inset-0 bgkeren"></div>
            <div className="absolute inset-0    bg-gradient-to-bl from-transparent to-70% to-primary"></div>
            <div className="absolute inset-0  -top-6   bg-gradient-to-bl from-primary to-60% to-transparent"></div>


            <p className="relative  text-3xl font-semibold  ">
                Lorem <span className="text-slate-400">Ipsums</span> dolor sit,
                amet{" "}
            </p>

            <p className="relative text-sm lg:text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore sint sit, perspiciatis sed quibusdam omnis temporibus
                laboriosam tempora at laudantium possimus odio est praesentium
                consequatur sapiente incidunt iste rerum corrupti.
            </p>
            <div className="relative space-x-4">
                <Button variant={"default"} size="lg">
                    Jelajahi Video
                </Button>
                <Button variant={"outline"} size="lg">
                    Baca Artikel
                </Button>
            </div>
        </section>
    );
}

export default Jumbotron;
