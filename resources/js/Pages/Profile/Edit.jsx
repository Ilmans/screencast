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
        <div className="max-w-4xl  sm:px-6 lg:px-8 space-y-6 border-border/90 bg-primary">
            <Head title="Edit Profile" />
            <Card>
                <CardHeader>
                    <CardTitle> Informasi Profile </CardTitle>
                    <CardDescription>
                        {" "}
                        Perbarui informasi profil dan alamat email akun Anda.{" "}
                    </CardDescription>
                    <CardContent>
                        <UpdateProfileInformation />
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    );
}

Edit.layout = (page) => <UserLayout children={page} />;
