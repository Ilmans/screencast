import React from "react";
import Header from "./Header";
import AdminMenu from "@/Components/Layout/AdminMenu";
import { cn } from "@/lib/utils";
import { IconMenu2 } from "@tabler/icons-react";

function AdminLayout({ header = true, children, needFull = false }) {
    const [openMobileMenu, setOpenMobileMenu] = React.useState(false);
    return (
        <div className={` `}>
            {header && <Header />}
            <div className="py-8 md:container md:grid md:grid-cols-5 md:mt-8 gap-x-4">
                <div className="col-span-1 rounded-lg h-fit">
                    <button
                        onClick={() => setOpenMobileMenu(!openMobileMenu)}
                    className="flex items-center justify-center w-full py-2 mb-2 text-xs rounded-lg gap-x-2 hover:bg-accent lg:hidden bg-muted">
                        <IconMenu2 className="w-4 h-4" />
                        <span>Admin menu</span>
                    </button>
                    <AdminMenu
                        open={openMobileMenu}
                    />
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

export default AdminLayout;
