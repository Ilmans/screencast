import React from "react";
import Header from "./Header";
import Jumbotron from "@/Components/Jumbotron";
import Footer from "./Footer";
import VerticalNavLink from "@/Components/VerticalNavLink";
import { Card, CardContent } from "@/Components/ui/card";

function UserLayout({ children, header = true, footer = true }) {
    return (
        <div className={` `}>
            {header && <Header />}
            <div className="container   py-8 grid grid-cols-5 min-h-screen mt-8 gap-x-4">
                <div className=" col-span-1  h-fit  rounded-lg">
                    <ul className="flex flex-col gap-y-1">
                        <VerticalNavLink
                            href="/dashboard"
                            icon="IconDashboard"
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
                        <VerticalNavLink href="/dashboard" icon="IconDashboard">
                            Dashboard
                        </VerticalNavLink>
                    </ul>
                </div>
                <div className="col-span-3">{children}</div>
            </div>

            {footer && <Footer />}
        </div>
    );
}

export default UserLayout;
