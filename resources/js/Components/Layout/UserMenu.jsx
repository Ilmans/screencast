import React, { Fragment } from "react";
import VerticalNavLink from "../VerticalNavLink";
import { cn } from "@/lib/utils";
import { usePage } from "@inertiajs/react";

function UserMenu({ dashboard = true }) {
    const user = usePage().props.auth.user;
    return (
        <ul
            className={cn(
                "flex flex-col ",
                dashboard ? "text-sm gap-y-2" : "gap-y-1 text-xs mb-2"
            )}
        >
            {/* only guest can access this menu, this menu show in nav mobile */}
            {!user && (
                <Fragment>
                    {/* home */}
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
                </Fragment>
            )}
            {/* only user login can access this menu, this menu show in dashboard & nav mobile */}
            {user && (
                <Fragment>
                    <VerticalNavLink
                        href="/dashboard"
                        icon="IconLayoutDashboard"
                        active={route().current("dashboard")}
                    >
                        Beranda
                    </VerticalNavLink>
                    <VerticalNavLink
                        href="/profile"
                        icon="IconUserCircle"
                        active={route().current("profile.edit")}
                    >
                        Informasi Profile
                    </VerticalNavLink>
                    <VerticalNavLink
                        href="/profile/password"
                        icon="IconCloudLockOpen"
                        active={route().current("profile.password")}
                    >
                        Ubah Password
                    </VerticalNavLink>
                    <VerticalNavLink
                        href="/my_articles"
                        icon="IconNews"
                        active={route().current("my_articles")}
                    >
                        Artikel Saya
                    </VerticalNavLink>
                    <VerticalNavLink
                        href="/watch_later"
                        icon="IconClock"
                        active={route().current("watch_later")}
                    >
                        Tonton Nanti
                    </VerticalNavLink>
                    <VerticalNavLink
                        href="/watch_histories"
                        icon="IconHistoryToggle"
                        active={route().current("watch_histories")}
                    >
                        Riwayat Menonton
                    </VerticalNavLink>
                    <VerticalNavLink
                        href="/subscription"
                        icon="IconRocket"
                        active={route().current("subscription")}
                    >
                        Langganan
                    </VerticalNavLink>
                    <VerticalNavLink
                        href="/invoices"
                        icon="IconFileInvoice"
                        active={route().current("invoices")}
                    >
                        Invoices
                    </VerticalNavLink>
                </Fragment>
            )}
        </ul>
    );
}

export default UserMenu;
