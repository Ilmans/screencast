import Logo from "@/Components/Logo";
import React, { useState } from "react";
import ThemeProvider from "../Components/ThemeProvider";
import MobileNavButton from "@/Components/Layout/MobileNavButton";
import NavLink from "@/Components/NavLink";
import { Toaster } from "@/Components/ui/toaster";
import { Link } from "@inertiajs/react";

function Header() {
    return (
        <nav className="relative border-foreground/10 py-2 bg-background sticky top-0 max-w-screen-2xl transition duration-500 ease-in-out  border-y mx-auto z-30 sm:px-6 lg:px-8 md:block">
            <div className="flex items-center justify-between">
                <div className="flex h-14 shrink-0 items-center">
                    <Link
                        data-state="closed"
                        className="focus:outline-none focus:ring-0"
                        href="/"
                    >
                        <div className="text-foreground font-semibold text-2xl tracking-tighter">
                            CodingAsik_
                        </div>
                        <span className="sr-only">CodingAsik_</span>
                    </Link>
                </div>
                <div className="flex items-center  ">
                    <ul className="md:flex hidden items-center gap-x-2">
                        <li>
                            <Link
                                className="text-muted-foreground hover:text-secondary-foreground block px-3 py-1 text-[0.9rem] font-medium rounded-full tracking-tight transition relative"
                                href="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-muted-foreground hover:text-secondary-foreground block px-3 py-1 text-[0.9rem] font-medium rounded-full tracking-tight transition relative"
                                href={route("topics")}
                            >
                                Topik
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-muted-foreground hover:text-secondary-foreground block px-3 py-1 text-[0.9rem] font-medium rounded-full tracking-tight transition relative"
                                href={route("articles")}
                            >
                                Artikel
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="text-muted-foreground hover:text-secondary-foreground block px-3 py-1 text-[0.9rem] font-medium rounded-full tracking-tight transition relative"
                                href={"/pricing"}
                            >
                                Premium
                            </Link>
                        </li>
                    </ul>
                    <div className="flex items-center  gap-4">
                        {/* <div className="hidden lg:block">
                    <InputWithIcon

                        placeholder="Cari video.."
                        icon={<SearchIcon />}
                    />
                </div> */}
                        <ThemeProvider />
                        <MobileNavButton />
                    </div>
                    {/* <div
                        data-orientation="vertical"
                        role="none"
                        className="shrink-0 w-[1px] ml-6 mr-4 h-8 bg-zinc-500/20"
                    />
                    <div className="mr-4 flex items-center gap-x-2">
                        <button
                            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-9 rounded-full [&_svg]:size-5 [&_svg]:text-muted-foreground [&_svg]:hover:text-foreground"
                            type="button"
                            data-state="closed"
                        >
                            <span className="sr-only">Pencarian cepat...</span>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="m20.25 20.25-4.123-4.123m0 0A7.25 7.25 0 1 0 5.873 5.873a7.25 7.25 0 0 0 10.253 10.253Z"
                                    />
                                </svg>
                            </span>
                        </button>
                        <div className="relative">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 hover:text-accent-foreground size-9 [&_svg]:text-muted-foreground [&_svg]:transition [&_svg]:duration-200 hover:bg-transparent [&_svg]:hover:text-foreground">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="dark:block hidden size-5"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10q0-.102-.002-.204a.75.75 0 0 0-1.183-.597 5.75 5.75 0 0 1-8.014-8.014.75.75 0 0 0-.597-1.183z"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="dark:hidden block size-5"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M21.248 11.811a6.5 6.5 0 0 1-9.06-9.06 9.25 9.25 0 1 0 9.06 9.06"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <a
                        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-4"
                        href="https://parsinta.com/login"
                    >
                        Login
                    </a> */}
                </div>
            </div>
        </nav>
    );
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
