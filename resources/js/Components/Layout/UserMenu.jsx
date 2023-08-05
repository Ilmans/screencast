import React, { Fragment } from "react";
import VerticalNavLink from "../VerticalNavLink";
import { cn } from "@/lib/utils";
import { usePage } from "@inertiajs/react";

function UserMenu({ open = false }) {
    const user = usePage().props.auth.user;
    return (
        <ul
            className={cn(
                !open
                    ? "translate-y-full duration-300 h-0 opacity-0 transition-all  md:p-0 md:translate-y-0 md:opacity-100 "
                    : "translate-y-0 duration-300 opacity-100 transition-all p-4 md:p-0",
                `text-sm gap-y-2 gap-x-2 space-y-2 mb-2 bg-muted md:bg-background  md:p-0 rounded-lg md:rounded-none`
            )}
        >
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
                    {user.is_admin ? (
                        <VerticalNavLink
                            href="/admin/dashboard"
                            icon="IconBrandAsana"
                            active={route().current("admin.dashboard")}
                        >
                            Admin Dashboard
                        </VerticalNavLink>
                    ) : (
                        ""
                    )}
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
