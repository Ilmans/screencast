import React from "react";

function Logo({}) {
    return (
        <>
            <div className="-mt-2 -ml-4 hidden dark:block ">
                <img src="/images/logo.png" alt="" />
            </div>

            <div className="dark:hidden">
                <img
                    width={150}
                    height={150}
                    src="/images/logoDark.png"
                    alt=""
                />
            </div>
        </>
    );
}

export default Logo;
