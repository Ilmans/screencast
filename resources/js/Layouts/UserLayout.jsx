import React from "react";
import Header from "./Header";
import Jumbotron from "@/Components/Jumbotron";
import Footer from "./Footer";
import VerticalNavLink from "@/Components/VerticalNavLink";
import { Card, CardContent } from "@/Components/ui/card";
import UserMenu from "@/Components/Layout/UserMenu";

function UserLayout({ children, header = true, footer = true }) {
    return (
        <div className={` `}>
            {header && <Header />}
            <div className="container   py-8 grid grid-cols-5 min-h-screen mt-8 gap-x-4">
                <div className=" col-span-1  h-fit  rounded-lg">
                    <UserMenu />
                </div>
                <div className="col-span-3">{children}</div>
            </div>

            {footer && <Footer />}
        </div>
    );
}

export default UserLayout;
