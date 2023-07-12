import React from "react";

function BadgeButton({ children, className = "" }) {
    return (
        <div
            className={`${className} flex items-center border justify-center px-4 py-2 text-xs text-center transition-all duration-200 ease-in-out rounded-lg lg:block hover:bg-slate-200  dark:hover:bg-muted-foreground bg-accent hover:text-foreground dark:text-foreground`}
        >
            {children}
        </div>
    );
}

export default BadgeButton;
