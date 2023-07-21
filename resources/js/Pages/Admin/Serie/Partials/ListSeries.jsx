import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { IconDotsVertical } from "@tabler/icons-react";
import React, { Fragment } from "react";
import SerieListMenu from "./SerieListMenu";
import { Label } from "@/Components/ui/label";
import { Switch } from "@/Components/ui/switch";
import { router } from "@inertiajs/react";

function ListSeries({ series }) {
    
    return (
        <Fragment>
            <Table>
                <TableHeader>
                    <TableRow className="bg-accent">
                        <TableHead>Thumbnail</TableHead>
                        <TableHead>Judul</TableHead>
                        <TableHead>Total Video</TableHead>
                        <TableHead>Topik</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Created At</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {series.data.map((serie) => (
                        <TableRow key={serie.id}>
                            <TableCell>
                                <img
                                    src={serie.image}
                                    alt={serie.title}
                                    className="w-16 h-16 rounded-lg"
                                />
                            </TableCell>
                            <TableCell>{serie.title}</TableCell>
                            <TableCell>{serie.videos_count}</TableCell>
                            <TableCell>
                                {serie.topics
                                    .map((topic) => topic.name)
                                    .join(", ")}
                            </TableCell>
                            <TableCell>
                                <div className="flex items-center space-x-2">
                                    <Switch onClick={()=> {

                                        router.post(route('admin.series.toggle-status', serie.id))
                                    }}  checked={serie.status === 'published'} id={`status-${serie.id}`} />
                                    <Label htmlFor={`status-${serie.id}`}>
                                        {serie.status === 'published' ? 'Published' : 'Drafted'}
                                    </Label>
                                </div>
                            </TableCell>
                            <TableCell>{serie.created_at}</TableCell>
                            <TableCell>
                                <SerieListMenu serie={serie} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default ListSeries;
