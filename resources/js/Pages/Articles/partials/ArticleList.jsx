import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Link, usePage } from "@inertiajs/react";
import { IconEdit, IconSearch } from "@tabler/icons-react";
import React, { Fragment } from "react";

function ArticleList({ articles }) {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-accent">
                    <TableHead>#</TableHead>
                    <TableHead>Judul</TableHead>
                    <TableHead>Topik</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Dilihat</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {articles.data.map((article, index) => (
                    <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell>{article.title}</TableCell>
                        <TableCell>
                            {article.topics.map((topic, index) => (
                                <span
                                    key={index}
                                    className="mr-1 px-2 py-1 bg-accent rounded-full"
                                >
                                    {topic.name}
                                </span>
                            ))}
                        </TableCell>
                        <TableCell>{article.published}</TableCell>
                        <TableCell>{article.views}</TableCell>
                        <TableCell>
                            <div className="flex gap-x-1 justify-center">
                                <Link href={`/article/${article.slug}/edit`}>
                                    <IconEdit className="w-4 text-blue-400 h-4" />
                                </Link>
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

export default ArticleList;
