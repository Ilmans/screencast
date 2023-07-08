import Logo from "@/Components/Logo";
import React, { useState } from "react";
import ThemeProvider from "../../lib/ThemeProvider";
import { UserIcon } from "../../lib/Icon";
import { Link } from "@inertiajs/react";

function Header() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    return (
        <header className="flex items-center justify-between pt-4 pb-2 border-b dark:bg-slate-950 wrapper dark:border-slate-700">
            <Logo theme={theme} />
            <ul>
                {["Beranda", "Topik", "Artikel"].map((title, i) => (
                    <li className="inline-block p-4 ">
                        <a
                            href=""
                            className="text-sm font-bold text-slate-500 hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100"
                        >
                            {title}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-2">
                <ThemeProvider theme={theme} setTheme={setTheme} />
                <input
                    type="text"
                    placeholder="search"
                    className="bg-transparent rounded-lg "
                />
                <Link
                    href="/login"
                    className="p-2 border rounded-lg border-slate-500 hover:border-slate-300"
                >
                    <UserIcon className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
