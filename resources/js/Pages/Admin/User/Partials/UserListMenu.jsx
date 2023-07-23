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
    IconTrash,
} from "@tabler/icons-react";
import React from "react";

function UserListMenu({ user,
    setSelectedUser,
    setOpenModalEditUser,
    setOpenConfirmDelete,
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
                          setOpenModalEditUser(true);
                            
                        }}
                    className="flex items-center gap-x-1">
                        <IconPencil className="w-5 h-5" />
                        Edit
                    </button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <button
                        onClick={() => { 
                            setSelectedUser(user);
                            setOpenConfirmDelete(true);
                        }}
                        className="flex items-center gap-x-1"
                    >
                        <IconTrash className="w-5 h-5" />
                        Hapus
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default UserListMenu;
