import React from "react";

function BadgeButton({ children, className = "" }) {
    return (
        <div
            className={`${className} flex items-center border border-slate-800 dark:border-none justify-center px-4 py-2 text-xs text-center transition-all duration-200 ease-in-out rounded-lg lg:block dark:hover:bg-slate-700 dark:bg-slate-800 dark:text-slate-200 `}
        >
            {children}
        </div>
    );
}

export default BadgeButton;
