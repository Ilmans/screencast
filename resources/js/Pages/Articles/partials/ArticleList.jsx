import ConfirmDelete from "@/Components/ConfirmDelete";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Link, usePage } from "@inertiajs/react";
import { IconEdit, IconEye, IconSearch, IconTrash } from "@tabler/icons-react";
import React, { Fragment } from "react";

function ArticleList({ articles }) {
    const [openConfirmDelete, setOpenConfirmDelete] = React.useState(false);
    const [selectedArticle, setSelectedArticle] = React.useState(null);
    return (
        <Fragment>
            <ConfirmDelete
                text={`Apakah anda yakin ingin menghapus artikel "${selectedArticle?.title}" ?`}
                urlDelete={"article/" + selectedArticle?.slug}
                openConfirmDelete={openConfirmDelete}
                setOpenConfirmDelete={setOpenConfirmDelete}
            />

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
                                <div className="flex gap-x-1 justify-center ">
                                    <Link href={`/article/${article.slug}`}>
                                        <IconEye className="w-4 text-blue-400 h-4" />
                                    </Link>
                                    <Link
                                        href={`/article/${article.slug}/edit`}
                                    >
                                        <IconEdit className="w-4 text-yellow-400 h-4" />
                                    </Link>
                                    <button
                                        onClick={() => {
                                            setSelectedArticle(article);
                                            setOpenConfirmDelete(true);
                                        }}
                                    >
                                        <IconTrash className="w-4 text-red-400 h-4" />
                                    </button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Fragment>
    );
}

export default ArticleList;
