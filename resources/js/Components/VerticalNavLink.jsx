import { cn } from "@/lib/utils";
import { Link } from "@inertiajs/react";
import React from "react";
import * as icons from "@tabler/icons-react";
import Icon from "./Icon";

function VerticalNavLink({ icon, active, ...props }) {
    return (
        <li className="-mx-2">
            <Link
                className={cn(
                    "flex items-center gap-x-2 rounded-lg px-2 py-2  font-medium    transition-all ease-in-out duration-100 ",

                    active
                        ? "bg-accent/80 text-accent-foreground font-medium"
                        : "text-foreground hover:bg-accent hover:text-accent-border"
                )}
                {...props}
            >
                <Icon name={icon} />
                {props.children}
            </Link>
        </li>
    );
}

export default VerticalNavLink;
