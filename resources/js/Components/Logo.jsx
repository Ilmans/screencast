import { Link } from "@inertiajs/react";
import React from "react";

function Logo({}) {
    return (
        <>
            <Link href="/" className="hidden -mt-2 -ml-4 dark:block ">
                <img src="/images/logo.png" alt="" />
            </Link>

            <Link href="/" className="dark:hidden">
                <img
                    width={150}
                    height={150}
                    src="/images/logoDark.png"
                    alt=""
                />
            </Link>
        </>
    );
}

export default Logo;
