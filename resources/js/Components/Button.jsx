import React from 'react'

const color = {
    primary: "bg-blue-800 hover:bg-blue-600 text-slate-900 ",
    secondary: "bg-slate-300 hover:bg-white text-slate-950 text-sm  ",
};
function Button({ bg, ...props }) {
    return (
        <button
            {...props}
            className={`${color[bg]} px-6 py-1  hover:bg-blue-400 font-semibold  rounded-lg font-poppins`}
        >
            {props.children}
        </button>
    );
}

export default Button