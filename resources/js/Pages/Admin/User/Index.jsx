import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import ListUser from "./Partials/ListUser";

import Searching from "@/Components/Searching";
import SelectFiltering from "@/Components/SelectFiltering";

function Index({ users }) {
    return (
        <div className="max-w-4xl">
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <div>
                        <CardTitle>User</CardTitle>
                        <CardDescription>
                            Seluruh user terdaftar
                        </CardDescription>
                    </div>
                    <div className="flex items-center justify-end py-1 gap-x-2">
                        <SelectFiltering
                            name={"sort"}
                            filterOptions={[
                                { name: "Terbaru", value: "latest" },
                                { name: "Terlama", value: "oldest" },
                                {name : "Langganan", value : "subscription"}
                            ]}
                            disabledDefault={true}
                            label="Urutkan"
                            needFirstItem={false}
                        />
                        <Searching placeholder={"Cari user"}  />
                    </div>
                </CardHeader>
                <CardContent>
                    <ListUser users={users} />
                    <div className="mt-4">
                        {/* <Pagination links={users.data.links} /> */}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default Index;

Index.layout = (page) => <AdminLayout children={page} needFull={true} />;
