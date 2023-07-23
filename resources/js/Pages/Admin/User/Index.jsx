import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import AdminLayout from "@/Layouts/AdminLayout";
import React, { useEffect } from "react";
import ListUser from "./Partials/ListUser";

import Searching from "@/Components/Searching";
import SelectFiltering from "@/Components/SelectFiltering";
import { Head } from "@inertiajs/react";
import ModalEditUser from "./Partials/ModalEditUser";

function Index({ users }) {
    const [selectedUser, setSelectedUser] = React.useState(null);
    const [openModalEditUser, setOpenModalEditUser] = React.useState(false);

    useEffect(() => {
        if (selectedUser) {
            setOpenModalEditUser(true);
        }
    }, [selectedUser]);
    return (
        <div className="max-w-4xl">
            <Head title="Users" />
            {selectedUser && (
                <ModalEditUser
                    user={selectedUser}
                    open={openModalEditUser}
                    setOpen={setOpenModalEditUser}
                />
            )}
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
                                { name: "Langganan", value: "subscription" },
                            ]}
                            disabledDefault={true}
                            label="Urutkan"
                            needFirstItem={false}
                        />
                        <Searching placeholder={"Cari user"} />
                    </div>
                </CardHeader>
                <CardContent>
                    <ListUser users={users} setSelectedUser={setSelectedUser} />
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
