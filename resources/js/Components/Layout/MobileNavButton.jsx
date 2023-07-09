import { Link, usePage } from "@inertiajs/react";
import React, { Fragment, useState } from "react";
import MobileNav from "./MobileNav";
import {
    ChevronDownIcon,
    LeftBar,
    RightBar,
    UserIcon,
} from "../../../lib/Icon";

function MobileNavButton() {
    const { user } = usePage().props.auth;
    const [showNav, setShowNav] = useState(false);
    return (
        <Fragment>
            {user ? (
                <button
                    onClick={() => {
                        setShowNav(!showNav);
                    }}
                    className="relative text-center px-2 py-1.5 hover:bg-slate-700 duration-200 ease-in-out transition-all  bg-slate-800 rounded-lg text-xs border-slate-400 text-slate-400 hover:border-slate-300"
                >
                    {user.name.slice(1, 7)} ...
                    <span>
                        <ChevronDownIcon className="inline w-4 h-4" />
                    </span>
                    <MobileNav show={showNav} setShow={setShowNav} />
                </button>
            ) : (
                <>
                    <Link
                        href="/login"
                        className="relative hidden lg:block text-center px-2 py-1.5 hover:bg-slate-700 duration-200 ease-in-out transition-all  bg-slate-800 rounded-lg text-xs border-slate-400 text-slate-200 hover:border-slate-300"
                    >
                        Masuk
                    </Link>
                    <button
                        onClick={() => {
                            setShowNav(!showNav);
                        }}
                        className="relative lg:hidden   text-center px-2 py-1.5 hover:bg-slate-700 duration-200 ease-in-out transition-all  bg-slate-800 rounded-lg text-xs border-slate-400 text-slate-200 hover:border-slate-300"
                    >
                        {!showNav ? (
                            <RightBar className="w-4 h-4" />
                        ) : (
                            <LeftBar className="w-4 h-4" />
                        )}
                        <MobileNav show={showNav} setShow={setShowNav} />
                    </button>
                </>
            )}
        </Fragment>
    );
}

export default MobileNavButton;
