import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import ListSubscriptions from "./Partials/ListSubscriptions";
import Pagination from "@/Components/Page/Pagination";
import Searching from "@/Components/Searching";
import SelectFiltering from "@/Components/SelectFiltering";
import { IconPlus } from "@tabler/icons-react";
import { Button } from "@/Components/ui/button";
import ModalAddSubscription from "./Partials/ModalAddSubscription";

function Index({ subscriptions,packages }) {
    const [modalAddSubscription, setModalAddSubscription] = React.useState(false);
    return (
        <div className="max-w-4xl">
            <Head title="Subscriptions" />
            <ModalAddSubscription open={modalAddSubscription} setOpen={setModalAddSubscription} packages={packages} />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle>Langganan pengguna</CardTitle>
                            <CardDescription>
                                Seluruh langganan pengguna
                            </CardDescription>
                        </div>
                        <Button
                            onClick={() => {
                                setModalAddSubscription(true);
                            }}
                            variant="secondary" className="flex items-center text-xs gap-x-1">
                            <IconPlus className="w-4 h-4" />
                            <span>Subscription</span>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="flex items-center justify-end py-2 gap-x-2">
                        <SelectFiltering
                            disabledDefault={true}
                            name={"sort"}
                            label={"Urutkan"}
                            filterOptions={[
                                { value: "newest", name: "Terbaru" },
                                { value: "oldest", name: "Terlama" },
                                { value: "expired", name: "Waktu expired" },
                            ]}
                        />
                        <SelectFiltering
                            disabledDefault={true}
                            name={"filter"}
                            label={"Status"}
                            filterOptions={[
                                { value: "all", name: "Semua" },
                                { value: "active", name: "Aktif" },
                                { value: "expired", name: "Tidak Aktif" },
                            ]}
                        />
                        <Searching placeholder={"Cari berdasarkan User"} />
                    </div>
                    <ListSubscriptions subscriptions={subscriptions} />
                    <div className="mt-4">
                        <Pagination links={subscriptions.links} />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Index;
Index.layout = (page) => <AdminLayout children={page} needFull={true} />;
