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
            role="dialog"
            id="radix-:r2j:"
            aria-describedby="radix-:r2l:"
            aria-labelledby="radix-:r2k:"
            data-state="close"
            className={`fixed ${
                !showInMobile && "hidden"
            } z-50 gap-4   bg-background shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm w-[90%] p-0`}
            tabIndex={-1}
            style={{ pointerEvents: "auto" }}
        >
            <div className="border-b bg-accent/50 px-4 py-4">
                <div className="flex flex-col p-0">
                    <h3 className="text-xl font-semibold leading-6 tracking-tighter">
                        {title}
                    </h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">
                        {description}
                    </p>
                </div>
            </div>
            <div className="p-4 overflow-y-auto h-full pb-24 hide-scroll">
                {children}
            </div>
            <button
                onClick={() => setShowInMobile(false)}
                type="button"
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                    className="size-4"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth={2}
                        d="m5 5 14 14m0-14L5 19"
                    />
                </svg>
                <span className="sr-only">Close</span>
            </button>
        </div>
    );



export default ListVideoSidebar;
