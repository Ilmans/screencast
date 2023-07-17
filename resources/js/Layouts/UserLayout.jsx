import React from "react";
import Header from "./Header";

import UserMenu from "@/Components/Layout/UserMenu";
import { cn } from "@/lib/utils";

function UserLayout({ children, header = true, needFull = false }) {
    return (
        <div className={` `}>
            {header && <Header />}
            <div className="md:container   py-8 md:grid  md:grid-cols-5  md:mt-8 gap-x-4">
                <div className="hidden md:block col-span-1  h-fit  rounded-lg">
                    <UserMenu />
                </div>
                <div
                    className={cn(
                        needFull ? "md:col-span-4" : "md:col-span-3",
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
