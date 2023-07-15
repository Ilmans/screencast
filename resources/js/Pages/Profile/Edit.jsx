import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import UserLayout from "@/Layouts/UserLayout";
import UpdateProfileInformation from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";

export default function Edit() {
    return (
        <div className="max-w-4xl">
            <Head title="Edit Profile" />
            <Card className="p-6 space-y-6">
                <CardHeader>
                    <CardTitle> Informasi Profile </CardTitle>
                    <CardDescription>
                        {" "}
                        Perbarui informasi profil dan alamat email akun Anda.{" "}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <UpdateProfileInformation />
                </CardContent>
            </Card>
        </div>
    );
}

Edit.layout = (page) => <UserLayout children={page} />;
