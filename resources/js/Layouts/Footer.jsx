import React, { Fragment } from "react";

function Footer() {
    return (
        <Fragment>
            <section className="py-12 border-t dark:bg-slate-950 border-slate-900">
                <div className="flex flex-col justify-between gap-4 lg:flex-row wrapper">
                    <div className="lg:w-1/4">
                        <img
                            className="mb-4 -ml-6"
                            src="/images/logo.png"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Aliquid, pariatur alias asperiores ad dolorem
                            ratione possimus laboriosam tempore consequatur
                            doloremque, sint dolores totam neque reiciendis
                            quas, reprehenderit rem quis veritatis.
                        </p>
                    </div>
                    <div>
                        <h1 className="mb-4 font-semibold">Ready To Binge</h1>
                        <ul className="space-y-4">
                            <li>asdfsafdsadfa</li>
                            <li>asdfsafdsadfa</li>
                            <li>asdfsafdsadfa</li>
                            <li>asdfsafdsadfa</li>
                            <li>asdfsafdsadfa</li>
                            <li>asdfsafdsadfa</li>
                        </ul>
                    </div>
                    <div>
                        <h1 className="mb-4 font-semibold">Ready To Binge</h1>
                        <ul className="space-y-4">
                            <li>asdfsafdsadfa</li>
                            <li>asdfsafdsadfa</li>
                            <li>asdfsafdsadfa</li>
                            <li>asdfsafdsadfa</li>
                            <li>asdfsafdsadfa</li>
                            <li>asdfsafdsadfa</li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className="flex flex-col items-center justify-center gap-2 p-8 border-t bg-slate-950 border-slate-700">
                <p className="text-xs font-slate-500">
                    Coding asik adalah merek dagang dari Ilman Sunanuddin
                </p>
                <p className="text-sm text-center">
                    <span className="font-semibold">
                        @Copyright 2023 CodingAsik.
                    </span>{" "}
                    All rights reserver, yes,all of them
                </p>
            </div>
        </Fragment>
    );
}

export default Footer;
