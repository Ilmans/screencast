import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/Components/ui/dropdown-menu";
import { Link } from "@inertiajs/react";
import {
    IconDotsVertical,
    IconEye,
    IconTrash,
    IconVideo,
} from "@tabler/icons-react";
import React from "react";

function SerieListMenu({ serie, setSelectedSerie, setConfirmDelete }) {
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
                        href={`/serie/${serie.slug}/watch`}
                    >
                        <IconEye className="w-4 h-4" />
                        <span>Preview</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <button
                        className="flex items-center gap-x-2"
                        onClick={() => {
                            setSelectedSerie(serie);
                            setConfirmDelete(true);
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

export default SerieListMenu;
