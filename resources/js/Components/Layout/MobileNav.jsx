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

function MobileNav({ show, setShow }) {
    const { user } = usePage().props.auth;
    const mobileNavRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                mobileNavRef.current &&
                !mobileNavRef.current.contains(event.target)
            ) {
                setShow(false);
            }
        }

        if (show) {
            window.addEventListener("click", handleClickOutside);
        }

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, [show, setShow]);

    return (
        <div
            ref={mobileNavRef}
            className={`absolute right-0 z-50 w-64 ${
                show ? "scale-100" : "scale-0"
            } duration-100  transition-all ease-in-out lg:w-72  border rounded-lg shadow-sm text-foreground/80 lg:top-12 top-10 bg-primary/80 shadow-foreground/40 `}
        >
            <ul className="items-start px-4 py-4 space-y-2 text-sm text-start font-poppins">
                <List>
                    <HomeIcon className="inline-block w-4 h-4" /> Beranda
                </List>
                <List>
                    <TopicIcon className="inline-block w-4 h-4" /> Topik
                </List>
                <List>
                    <BookIcon className="inline-block w-4 h-4" /> Artikel
                </List>
            </ul>
            <hr className="border border-border/90" />
            <ul className="items-start px-4 py-4 space-y-2 text-sm text-start font-poppins">
                {user ? (
                    <button
                        onClick={() => {
                            router.post("logout");
                        }}
                    >
                        <OutIcon className="inline-block w-4 h-4" /> Keluar
                    </button>
                ) : (
                    <>
                        <List url={"/login"}>
                            <SignIcon className="inline-block w-4 h-4" /> Masuk
                        </List>
                        <List url={"/register"}>
                            <UserPlusIcon className="inline-block w-4 h-4" />{" "}
                            Register
                        </List>
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
                className="transition-all duration-200 ease-in-out hover:text-slate-100"
            >
                <span className="flex items-center gap-2">{children}</span>
            </Link>
        </li>
    );
}

export default MobileNav;
