import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/Components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import { IconDotsVertical, IconEye, IconVideo } from "@tabler/icons-react";
import React from "react";

function SerieListMenu({serie}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <IconDotsVertical className="w-5 h-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link
                        className="flex items-center gap-x-2"
                        href={`/admin/series/${serie.id}/manage/videos`}
                    >
                        <IconVideo className="w-4 h-4" />
                        <span>Kelola Video</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link
                        className="flex items-center gap-x-2"
                        href={`/admin/series/${serie.id}/manage/videos`}
                    >
                        <IconEye className="w-4 h-4" />
                        <span>Preview</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export default SerieListMenu;
