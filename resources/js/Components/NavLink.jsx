import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import React from "react";

function NavLink({ active, ...props }) {
    return (
        <Link
            className={cn(
                "text-sm inline-block p-4 font-bold text-muted-foreground hover:text-foreground duration-100 ease-in-out transition-all",
                active && "text-foreground"
            )}
            {...props}
        />
    );
}

export default NavLink;
