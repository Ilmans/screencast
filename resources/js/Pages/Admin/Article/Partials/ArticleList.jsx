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
                        <TableHead>User</TableHead>
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
                            <TableCell>{article.user.email}</TableCell>
                            <TableCell>{article.title}</TableCell>
                            <TableCell>
                                {article.topics.map((topic, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 mr-1 rounded-full bg-accent"
                                    >
                                        {topic.name}
                                    </span>
                                ))}
                            </TableCell>
                            <TableCell>
                                {article.published ? (
                                    <span className="px-2 py-1 text-xs text-white bg-green-500 rounded-full">
                                        Published
                                    </span>
                                ) : (
                                    <span className="px-2 py-1 text-xs text-white bg-gray-500 rounded-full">
                                        Draft
                                    </span>
                                )}
                            </TableCell>
                            <TableCell>{article.views}</TableCell>
                            <TableCell>
                                <div className="flex items-center justify-center gap-x-1">
                                    {!article.published ? (
                                        <Link
                                            method="post"
                                            href={route(
                                                "article.publish",
                                                article.id
                                            )}
                                            className="px-1 py-0.5 text-xs bg-blue-700 rounded-lg"
                                        >
                                            publish
                                        </Link>
                                    ) : (
                                        <Link
                                            method="post"
                                            href={route(
                                                "article.unpublish",
                                                article.id
                                            )}
                                            className="px-1 py-0.5 text-xs bg-gray-700 rounded-lg"
                                        >
                                            unpublish
                                        </Link>
                                    )}
                                    <Link href={`/article/${article.slug}`}>
                                        <IconEye className="w-4 h-4 text-blue-400" />
                                    </Link>

                                    <button
                                        onClick={() => {
                                            setSelectedArticle(article);
                                            setOpenConfirmDelete(true);
                                        }}
                                    >
                                        <IconTrash className="w-4 h-4 text-red-400" />
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
