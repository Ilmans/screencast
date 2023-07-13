import Logo from "@/Components/Logo";
import React, { useState } from "react";
import ThemeProvider from "../Components/ThemeProvider";
import { SearchIcon } from "../../lib/Icon";
import { Link, usePage } from "@inertiajs/react";
import InputWithIcon from "@/Components/InputWithIcon";
import MobileNav from "../Components/Layout/MobileNav";
import MobileNavButton from "@/Components/Layout/MobileNavButton";
import NavLink from "@/Components/NavLink";

const menu = [
    { name: "Dashboard", url: "/" },
    { name: "Topik", url: "/topics" },
    { name: "Artikel", url: "/articles" },
];
function Header() {
    return (
        <nav className="flex container items-center  justify-between pt-4 pb-2 border-b border-border/60 ">
            <Logo />
            <div className="items-center hidden lg:flex">
                <NavLink
                    active={route().current("home")}
                    key={"home"}
                    href={"/"}
                >
                    {" "}
                    Home{" "}
                </NavLink>
                <NavLink
                    active={route().current("topics")}
                    key={"topik"}
                    href={"/topics"}
                >
                    {" "}
                    Topik{" "}
                </NavLink>
            </div>
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
        </nav>
    );
}

export default Header;
