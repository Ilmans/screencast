import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/Components/ui/dropdown-menu";
import {
    IconDotsVertical,
    IconPencil,
} from "@tabler/icons-react";
import React from "react";

function UserListMenu({ user,
    setSelectedUser
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
                        onClick={() => {
                            setSelectedUser(user);
                        }}
                    className="flex items-center gap-x-1">
                        <IconPencil className="w-5 h-5" />
                        Edit
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserListMenu;
