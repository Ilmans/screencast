import { Link, router, usePage } from "@inertiajs/react";
import React, { useEffect, useRef } from "react";
import {
    BookIcon,
    HomeIcon,
    OutIcon,
    SignIcon,
    TopicIcon,
    UserPlusIcon,
} from "../../../lib/Icon";
import VerticalNavLink from "../VerticalNavLink";
import UserMenu from "./UserMenu";

function MobileNav({ show, setShow }) {
    const { user } = usePage().props.auth;
    const mobileNavRef = useRef(null);

    // useEffect(() => {
    //     function handleClickOutside(event) {
    //         if (
    //             mobileNavRef.current &&
    //             !mobileNavRef.current.contains(event.target)
    //         ) {
    //             setShow(false);
    //         }
    //     }

    //     if (show) {
    //         window.addEventListener("click", handleClickOutside);
    //     }

    //     return () => {
    //         window.removeEventListener("click", handleClickOutside);
    //     };
    // }, [show, setShow]);

    return (
        <div
            ref={mobileNavRef}
            className={`absolute  -right-6  z-50 w-64 ${
                show ? "scale-100" : "scale-0"
            } duration-100  transition-all ease-in-out lg:w-72  border rounded-lg bg-background shadow-sm text-foreground/80 lg:top-12 top-10  shadow-foreground/40 p-4`}
        >
            <ul className="flex flex-col mb-2 text-xs gap-y-1">
                <VerticalNavLink
                    href="/dashboard"
                    icon="IconDashboard"
                    active={route().current("dashboard")}
                >
                    Dashboard
                </VerticalNavLink>
                <VerticalNavLink
                    href="/"
                    icon="IconHomeEco"
                    active={route().current("home")}
                >
                    Halaman Utama
                </VerticalNavLink>
                <VerticalNavLink
                    href="/topics"
                    icon="IconBrandTidal"
                    active={route().current("topics")}
                >
                    Topik
                </VerticalNavLink>
                {/* Articles */}
                <VerticalNavLink
                    href="/articles"
                    icon="IconBook"
                    active={route().current("articles")}
                >
                    Artikel
                </VerticalNavLink>
            </ul>
            <hr className="border border-border/90" />
            <ul className="flex flex-col g">
                {user ? (
                    <button
                        className="py-2"
                        onClick={() => {
                            router.post("logout");
                        }}
                    >
                        <VerticalNavLink icon={"IconLogout"}>
                            Keluar
                        </VerticalNavLink>
                    </button>
                ) : (
                    <>
                        <VerticalNavLink href="/login" icon={"IconLogout"}>
                            Masuk
                        </VerticalNavLink>
                        <VerticalNavLink href="/register" icon={"IconUserPlus"}>
                            Daftar
                        </VerticalNavLink>
                    </>
                )}
            </ul>
        </div>
    );
}

function List({ url, active = false, children }) {
    return (
        <li>
            <Link
                href={url}
                className={`transition-all duration-200 ease-in-out ${
                    active && "text-slate-200"
                } hover:text-slate-100`}
            >
                <span className="flex items-center gap-2">{children}</span>
            </Link>
        </li>
    );
}

export default MobileNav;
