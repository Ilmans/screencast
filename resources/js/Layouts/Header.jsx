import Logo from "@/Components/Logo";
import React, { useState } from "react";
import ThemeProvider from "../Components/ThemeProvider";
import { SearchIcon } from "../../lib/Icon";
import InputWithIcon from "@/Components/InputWithIcon";
import MobileNavButton from "@/Components/Layout/MobileNavButton";
import NavLink from "@/Components/NavLink";
import { Toaster } from "@/Components/ui/toaster";

function Header() {
    return (
        <nav className="flex items-center justify-between pt-4 pb-2 border-b lg:container border-border/60 ">
            <Logo />
            <div className="items-center hidden lg:flex">
                <Toaster />
                <NavLink
                    active={route().current("home")}
                    key={"home"}
                    href={"/"}
                >
                    {" "}
                    Home{" "}
                </NavLink>
                <NavLink
                    active={
                        route().current("topics") ||
                        route().current("topic.show")
                    }
                    key={"topik"}
                    href={"/topics"}
                >
                    {" "}
                    Topik{" "}
                </NavLink>
                <NavLink
                    active={route().current("articles")}
                    key={"articles"}
                    href={"/articles"}
                >
                    {" "}
                    Articles{" "}
                </NavLink>
            </div>
            <div className="flex items-center gap-2">
                {/* <div className="hidden lg:block">
                    <InputWithIcon

                        placeholder="Cari video.."
                        icon={<SearchIcon />}
                    />
                </div> */}
                <ThemeProvider />
                <MobileNavButton />
            </div>
        </nav>
    );
}

export default Header;
