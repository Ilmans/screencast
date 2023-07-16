import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import PublicLayout from "@/Layouts/PublicLayout";
import React from "react";

function Pricing({ prices }) {
    return (
        <div className="relative space-y-4 py-24 container">
            <div className="absolute inset-0 bgkeren"></div>
            <div className="absolute -top-4 inset-0    bg-gradient-to-b from-transparent to-60% to-primary"></div>
            <div className="relative grid grid-cols-4 ">
                <div className="relative col-start-2 col-span-2 space-y-4 text-center font-poppins text-accent-foreground  border-border p-4 rounded-lg">
                    <h1 className="text-3xl font-bold">Member Premium</h1>
                    <p>
                        Investasikan uang Anda dalam pengembangan keterampilan!
                        Menambah dan memperbaiki keterampilan Anda adalah
                        langkah penting menuju kesuksesan.
                    </p>
                </div>
            </div>
            <div className="relative grid grid-cols-3 gap-4 py-12">
                {prices.map((price) => (
                    <Card
                        className="p-6 shadow-md shadow-accent"
                        key={price.id}
                    >
                        <CardHeader>
                            <CardTitle className="text-2xl font-poppins">
                                {price.name}
                            </CardTitle>
                            <CardDescription className="text-lg">
                                {price.description}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <h2 className="text-lg font-poppins font-medium">
                                Rp {price.price}
                            </h2>
                            <p className="text-sm font-poppins font-medium">
                                Masa Aktif {price.duration_months} bulan
                            </p>
                            <Button
                                variant="secondary"
                                className="mt-4"
                                size="lg"
                            >
                                Beli Sekarang
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Pricing;
Pricing.layout = (page) => <PublicLayout children={page} />;
