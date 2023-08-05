import React, { useState } from "react";
import { Button } from "./ui/button";

function Jumbotron() {
    return (
        <section className="relative px-4 py-12 space-y-6 overflow-hidden text-center isolate bg-background md:container lg:px-48 font-poppins lg:py-32 ">
            <div className="absolute inset-0 bgkeren"></div>
            <div className="absolute inset-0    bg-gradient-to-bl from-transparent to-70% to-primary"></div>
            <div className="absolute inset-0  -top-6   bg-gradient-to-bl from-primary to-60% to-transparent"></div>
            <div
                className="absolute w-full mb-40 dark:-z-0 -z-10 transform-gpu blur-3xl "
                aria-hidden="true"
            >
                <div
                    className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-violet-500 to-blue-600 opacity-30"
                    style={{
                        clipPath:
                            "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
                    }}
                />
            </div>
            <p className="relative text-3xl font-semibold ">
                Mari asik ngoding bersama <span className="text-slate-400">CodingAsik</span> 
            </p>

            <p className="relative text-sm lg:text-lg">
                Belajar pemrograman lebih mudah dan asik dengan mengedepankan studi kasus dan dengan stack stack terbaru yang di butuhkan oleh industri.
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
