import React from "react";

function Logo({ theme }) {
    return (
        <>
            {theme === "dark" ? (
                <div className="-mt-2 -ml-4 ">
                    <img src="/images/logo.png" alt="" />
                </div>
            ) : (
                <div className="">
                    <img
                        width={150}
                        height={150}
                        src="/images/logoDark.png"
                        alt=""
                    />
                </div>
            )}
        </>
    );
}

export default Logo;
