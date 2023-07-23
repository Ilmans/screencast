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
    IconTrash,
} from "@tabler/icons-react";
import React from "react";

function SubscriptionListMenu({ subscription,
    setSelectedSubscription,
    setOpenModalEdit,
    setModalConfirmDelete
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
                <DropdownMenuItem>
                    <button
                        className="flex items-center gap-x-2"
                        onClick={() => {
                            setSelectedSubscription(subscription);
                            setModalConfirmDelete(true);
                        }}
                    >
                        <IconTrash className="w-4 h-4" />
                        <span>Hapus</span>
                    </button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default SubscriptionListMenu;
