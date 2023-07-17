import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import UserLayout from "@/Layouts/UserLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";

function Password() {
    return (
        <div className="max-w-4xl  ">
            <Head title="Security" />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <CardTitle> Ubah Password </CardTitle>
                    <CardDescription>
                        {" "}
                        Pastikan akun Anda menggunakan kata sandi yang panjang
                    </CardDescription>
                    <CardContent>
                        <UpdatePasswordForm />
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    );
}

export default Password;
Password.layout = (page) => (
    <UserLayout children={page} title="Ubah Password" />
);
