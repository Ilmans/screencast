import React from "react";
import Button from "./Button";

function Jumbotron() {
    return (
        <div className="px-48 mt-4 space-y-6 text-center py-28 font-poppins">
            <h1 className="text-3xl font-semibold ">
                Lorem <span className="text-slate-400">Ipsum</span> dolor sit,
                amet{" "}
            </h1>
            <p className="text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore sint sit, perspiciatis sed quibusdam omnis temporibus
                laboriosam tempora at laudantium possimus odio est praesentium
                consequatur sapiente incidunt iste rerum corrupti.
            </p>
            <div className="space-x-4">
                <Button bg={"primary"}>Jelajahi artikel</Button>
                <Button bg={"secondary"}>Baca Artikel</Button>
            </div>
        </div>
    );
}

export default Jumbotron;
