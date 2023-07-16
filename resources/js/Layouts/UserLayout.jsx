import React from "react";
import Header from "./Header";
import Jumbotron from "@/Components/Jumbotron";
import Footer from "./Footer";
import VerticalNavLink from "@/Components/VerticalNavLink";
import { Card, CardContent } from "@/Components/ui/card";
import UserMenu from "@/Components/Layout/UserMenu";
import { cn } from "@/lib/utils";

function UserLayout({ children, header = true, needFull = false }) {
    return (
        <div className={` `}>
            {header && <Header />}
            <div className="container   py-8 grid grid-cols-5  mt-8 gap-x-4">
                <div className=" col-span-1  h-fit  rounded-lg">
                    <UserMenu />
                </div>
                <div
                    className={cn(
                        needFull ? "col-span-4" : "col-span-3",
                        "h-fit rounded-lg"
                    )}
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

export default UserLayout;
