import React from "react";

function InputWithIcon({
    type = "text",
    placeholder = "",
    id = "",
    name = "",
    icon,
    ...props
}) {
    return (
        <div class="relative flex items-center">
            <input
                type={type}
                id={id}
                name={name}
                placeholder={placeholder}
                {...props}
                className="relative w-full h-9 pl-8 pr-4 text-sm font-thin transition-all duration-200 ease-in-out rounded-md outline-none text-muted-foreground bg-accent border dark:border-none   drop-shadow-sm focus:ring-1 focus:ring-slate-600 focus:drop-shadow-sm"
            />

            <span className="absolute w-4 h-4 transition-all duration-200 ease-in-out text-accent-foreground left-2 group-focus-within:text-slate-400">
                {icon}
            </span>
        </div>
    );
}

export default InputWithIcon;
