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
                className="relative w-full h-10 pl-8 pr-4 text-sm font-thin transition-all duration-200 ease-in-out rounded-md outline-none text-slate-400 peer dark:bg-slate-950 drop-shadow-sm focus:ring-2 focus:ring-slate-400 focus:drop-shadow-sm"
            />

            <span className="absolute w-4 h-4 transition-all duration-200 ease-in-out text-slate-500 left-2 group-focus-within:text-slate-400">
                {icon}
            </span>
        </div>
    );
}

export default InputWithIcon;
