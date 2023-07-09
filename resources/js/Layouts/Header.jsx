import Logo from "@/Components/Logo";
import React, { useState } from "react";
import ThemeProvider from "../../lib/ThemeProvider";
import {
    ChevronDownIcon,
    HomeIcon,
    SearchIcon,
    UserIcon,
} from "../../lib/Icon";
import { Link, usePage } from "@inertiajs/react";
import InputWithIcon from "@/Components/InputWithIcon";
import MobileNav from "../Components/Layout/MobileNav";
import MobileNavButton from "@/Components/Layout/MobileNavButton";

const menu = [
    { name: "Dashboard", url: "/" },
    { name: "Topik", url: "/topics" },
    { name: "Artikel", url: "/articles" },
];
function Header() {
    

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
    return (
        <section className="flex items-center justify-between pt-4 pb-2 border-b dark:bg-slate-950 dark:border-slate-700">
            <Logo theme={theme} />
            <ul className="items-center hidden lg:flex">
                {menu.map((title, i) => (
                    <li key={i} className="inline-block p-4 ">
                        <Link
                            href={title.url}
                            className="text-sm font-bold text-slate-500 hover:text-slate-950 dark:text-slate-300 dark:hover:text-slate-100"
                        >
                            {title.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-2">
                <div className="hidden lg:block">
                    <InputWithIcon
                        placeholder="Cari video.."
                        icon={<SearchIcon />}
                    />
                </div>
                <ThemeProvider theme={theme} setTheme={setTheme} />
                <MobileNavButton />
            </div>
        </section>
    );
}

export default Header;
