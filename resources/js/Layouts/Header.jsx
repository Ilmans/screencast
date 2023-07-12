import Logo from "@/Components/Logo";
import React, { useState } from "react";
import ThemeProvider from "../Components/ThemeProvider";
import { SearchIcon } from "../../lib/Icon";
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
    return (
        <section className="flex container items-center  justify-between pt-4 pb-2 border-b ">
            <Logo />
            <ul className="items-center hidden lg:flex">
                {menu.map((title, i) => (
                    <li key={i} className="inline-block p-4 ">
                        <Link
                            href={title.url}
                            className="text-sm font-bold text-muted-foreground hover:text-foreground duration-100 ease-in-out transition-all"
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
                <ThemeProvider />
                <MobileNavButton />
            </div>
        </section>
    );
}

export default Header;
