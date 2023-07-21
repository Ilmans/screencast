import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import React, { Fragment } from "react";

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
                        <TableHead>Published</TableHead>
                        <TableHead>Created At</TableHead>
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
                                {serie.published ? "Yes" : "No"}
                            </TableCell>
                            <TableCell>{serie.created_at}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default ListSeries;
