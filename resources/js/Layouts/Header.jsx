import Logo from "@/Components/Logo";
import React from "react";

function Header() {
    return (
        <header className="flex items-center justify-between pt-4 pb-2 border-b wrapper border-slate-700">
            <Logo />
            <ul>
                {["Beranda", "Topik", "Artikel"].map((title, i) => (
                    <li className="inline-block p-4 ">
                        <a
                            href=""
                            className="text-sm font-bold text-slate-300 hover:text-slate-100"
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-2">
                <button className="p-2 border rounded-lg border-slate-400">
                    <svg
                        onClick={() => handleThemeChange("light")}
                        className="w-6 h-6 text-white cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
                </button>
                <input
                    type="text"
                    placeholder="search"
                    className="bg-transparent rounded-lg "
                />
            </div>
        </header>
    );
}

export default Header;
