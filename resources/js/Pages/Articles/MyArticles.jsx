import { Button } from "@/Components/ui/button";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import UserLayout from "@/Layouts/UserLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import { IconBookUpload, IconSearch } from "@tabler/icons-react";
import React from "react";
import ArticleList from "./partials/ArticleList";
import Pagination from "@/Components/Page/Pagination";
import Searching from "@/Components/Searching";
import SelectFiltering from "@/Components/SelectFiltering";

function MyArticles({ articles }) {
    const {topic} =usePage().props;
    const filterOptions = topic.articles.map((topic) => ({ name: topic.name, value: topic.slug }));
         
    return (
        <div className="">
            <Head title="My Articles" />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <div className="grid grid-cols-3">
                        <div className="col-span-2 space-y-1">
                            <CardTitle>Artikel Saya</CardTitle>
                            <CardDescription>
                                Daftar artikel yang telah anda buat
                            </CardDescription>
                        </div>
                        <div className="flex justify-end col-span 1">
                            <Link href="/article/create" className="">
                                <Button className="flex gap-x-1" size="sm">
                                    <IconBookUpload className="w-4 h-4" />
                                    <span>Buat Artikel</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-end py-2 gap-x-2">
                       <SelectFiltering name="topic" label="Berdasarkan Topik" filterOptions={filterOptions} />
                        <Searching placeholder={"Cari artikel"} />
                    </div>
                    {/* <FormFilter /> */}
                    <ArticleList articles={articles} />
                    <div className="mt-4">
                        <Pagination links={articles.links} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default MyArticles;
MyArticles.layout = (page) => <UserLayout children={page} needFull={true} />;
