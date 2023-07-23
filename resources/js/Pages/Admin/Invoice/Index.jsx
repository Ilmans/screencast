import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";
import ListInvoice from "./Partials/ListInvoice";
import Searching from "@/Components/Searching";
import SelectFiltering from "@/Components/SelectFiltering";

function Index({ invoices }) {
    return (
        <div className="max-w-4xl">
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <CardTitle>Invoice</CardTitle>
                    <CardDescription>Seluruh Invoice user</CardDescription>
                </CardHeader>
                <div className="flex items-center justify-end py-2 gap-x-2">
                    <SelectFiltering
                        name="sort"
                        label="Sort"
                        filterOptions={[
                            {
                                name: "Newest",
                                value: "newest",
                            },
                            {
                                name: "Oldest",
                                value: "oldest",
                            },
                        ]}
                        disabledDefault={true}
                    />
                    <SelectFiltering
                        name={"status"}
                        label={"Status"}
                        filterOptions={[
                            {
                                name: "Paid",
                                value: "paid",
                            },
                            {
                                name: "Unpaid",
                                value: "unpaid",
                            },
                        ]}
                    />
                    <Searching placeholder={"Email User/Nomor invoice"} />
                </div>
                <CardContent>
                    <ListInvoice invoices={invoices} />
                </CardContent>
            </Card>
        </div>
    );
}

export default Index;
Index.layout = (page) => <AdminLayout children={page} needFull={true} />;
