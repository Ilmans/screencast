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
import Pagination from "@/Components/Page/Pagination";
import Searching from "@/Components/Searching";
import SelectFiltering from "@/Components/SelectFiltering";
import AdminLayout from "@/Layouts/AdminLayout";
import ArticleList from "./Partials/ArticleList";

function Index({ articles }) {
    const {topic} =usePage().props;
    const filterOptions = topic.articles.map((topic) => ({ name: topic.name, value: topic.slug }));
         
    return (
        <div className="">
            <Head title="My Articles" />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <div className="grid grid-cols-3">
                        <div className="col-span-2 space-y-1">
                            <CardTitle>Artikel </CardTitle>
                            <CardDescription>
                                Seluruh artikel yang dibuat user
                            </CardDescription>
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

export default Index;
Index.layout = (page) => <AdminLayout children={page} needFull={true} />;
