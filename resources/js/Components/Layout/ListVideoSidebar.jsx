import React, { useState } from "react";

function ListVideoSidebar({
    children,
    showInMobile,
    setShowInMobile,
    title,
    description,
}) {
    return (
        <div
            className={`fixed z-20 inset-0 w-2/3  lg:max-h-screen lg:static top-0 bg-primary  ${
                showInMobile ? "" : "-translate-x-full lg:translate-x-0"
            } z-10 p-4  duration-200 ease-in-out border-r rounded-lg transiton-all   lg:rounded-none lg:sticky lg:w-1/4 border-slate-200 dark:border-slate-800`}
        >
            <div className="">
                <ButtonCloseSidebar setShowMobileList={setShowInMobile} />
            </div>

            <div className="z-20 px-2 bg-primary">
                <h2 className="text-lg font-semibold   ">{title}</h2>
                <p className="text-sm">{description} </p>
            </div>

            <div className="absolute inset-0 overflow-y-scroll top-20 scrollbar-thin scrollbar-none">
                {children}
            </div>
        </div>
    );
}

function ButtonCloseSidebar({ setShowMobileList }) {
    return (
        <div className="absolute right-0 p-4 lg:hidden dark:text-slate-400">
            <button
                onClick={() => {
                    setShowMobileList(false);
                }}
            >
                x
            </button>
        </div>
    );
}

export default ListVideoSidebar;
