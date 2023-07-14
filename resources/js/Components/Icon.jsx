import React from "react";
import * as icons from "@tabler/icons-react";
import { cn } from "@/lib/utils";

function Icon({ className, name, props }) {
    // dinamic tabler icons
    const IconComponent = icons[name];
    return (
        <IconComponent
            className={cn("w-5 h-5", className)}
            strokeWidth={1.5}
            {...props}
        />
    );
}

export default Icon;
