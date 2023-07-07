import Button from "@/Components/Button";
import PublicLayout from "@/Layouts/PublicLayout";
import { Link, Head } from "@inertiajs/react";

export default function Home() {
    return (
        <div>
            <h2>Baru Baru Ini Di Tambahkan</h2>
        </div>
    );
}

Home.layout = (page) => <PublicLayout children={page} />;
