import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import UserLayout from "@/Layouts/UserLayout";
import { Head, Link } from "@inertiajs/react";
import { IconEye } from "@tabler/icons-react";
import React from "react";

function Index({ watchHistories }) {
    return (
        <div className="max-w-4xl">
            <Head title="Watch History" />

            <Card className="md:p-6 space-y-6 border-none">
                <CardHeader>
                    <CardTitle>Riwayat Tontonan</CardTitle>
                    <CardDescription>
                        Semua tontonan yang pernah kamu tonton akan tersimpan di
                        sini.
                    </CardDescription>
                </CardHeader>
            </Card>

            <div className="mt-6 grid md:grid-cols-3 gap-4">
                {watchHistories.data.map((watchHistory) => (
                    <Card key={watchHistory.id} className="p-4 ">
                        <CardHeader>
                            <CardTitle className="text-xs   font-medium">
                                {watchHistory.video.title}
                            </CardTitle>
                            <CardDescription className="text-xs  ">
                                Terakhri ditonton pada{" "}
                                {watchHistory.last_watched_at}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link
                                href={`/serie/${watchHistory.video.serie.slug}/${watchHistory.video.order_num}`}
                                size="lg"
                                className="rounded-full py-1 flex w-fit items-center bg-muted px-4 hover:bg-accent justify-between gap-x-2"
                            >
                                <IconEye size={18} />
                                Tonton lagi
                            </Link>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Index;
Index.layout = (page) => <UserLayout children={page} needFull={true} />;
