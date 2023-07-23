import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/Components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import {
    IconDotsVertical,
    IconPencil,
} from "@tabler/icons-react";
import React from "react";

function SubscriptionListMenu({ subscription,
    setSelectedSubscription,
    setOpenModalEdit,
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <IconDotsVertical className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <button
                        className="flex items-center gap-x-2"
                        onClick={() => {
                            setSelectedSubscription(subscription);
                            setOpenModalEdit(true);
                        }}
                    >
                        <IconPencil className="w-4 h-4" />
                        <span>Edit</span>
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default SubscriptionListMenu;
