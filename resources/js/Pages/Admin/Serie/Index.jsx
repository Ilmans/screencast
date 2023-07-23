import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import ListSeries from "./Partials/ListSeries";
import Pagination from "@/Components/Page/Pagination";
import { Button } from "@/Components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Searching from "@/Components/Searching";
import SelectFiltering from "@/Components/SelectFiltering";

function Index({ series }) {
    return (
        <div className="max-w-4xl">
            <Head title="Series" />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Semua Serie</CardTitle>
                            <CardDescription>
                                Semua seri yang telah dibuat
                            </CardDescription>
                        </div>
                        <Link href="/admin/series/create">
                        <Button
                                size="sm"
                                variant="secondary"
                                className="flex gap-x-1"
                            >
                                <IconPlus className="w-4 h-4" />
                                <span>Buat Serie</span>
                            </Button>
                        </Link>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-end py-2 gap-x-2">
                        <SelectFiltering
                            name="sort"
                            label="Sort"
                            filterOptions={[
                                {
                                    name: "Terbaru",
                                    value: "newest",
                                },
                                {
                                    name: "Terlama",
                                    value: "oldest",
                                },
                                // most videos
                                {
                                    name: "Terbanyak Video",
                                    value: "most_videos",
                                },
                                // least videos
                                {
                                    name: "Tersedikit Video",
                                    value: "least_videos",
                                },
                                //most time
                                {
                                    name: "Durasi Terlama",
                                    value: "most_time",
                                },
                                //least time
                                {
                                    name: "Durasi Terpendek",
                                    value: "least_time",
                                },
                            ]}
                            disabledDefault={true}
                        />
                        <Searching placeholder={"Judul Serie"} />
                    </div>
                    <ListSeries series={series} />
                    <div className="mt-4">
                        <Pagination links={series.links} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Index;
Index.layout = (page) => <AdminLayout children={page} needFull={true} />;
