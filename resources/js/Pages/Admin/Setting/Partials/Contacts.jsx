import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { useForm } from "@inertiajs/react";
import React from "react";

function Contacts({ website }) {
    const { data, setData, errors, post, processing } = useForm({
        contacts: JSON.parse(website?.contact ?? "{}"),
    });
    const submit = (e) => {
        e.preventDefault();
        post(route("admin.settings.set"));
    };
    return (
        <Card className="p-4 space-y-4">
            <CardHeader>
                <CardTitle className="text-sm">Kontak Website</CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={submit} className="space-y-2">
                    <div>
                        <Label className="text-sm">Whatsapp</Label>
                        <Input
                            onChange={(e) => {
                                let newData = {
                                    contacts: {
                                        ...data.contacts,
                                        whatsapp: e.target.value,
                                    },
                                };

                                setData(newData);
                            }}
                            value={data.contacts.whatsapp}
                            type="text"
                            name="facebook"
                            className="mt-1"
                        />
                    </div>
                    <div>
                        <Label className="text-sm">Email</Label>
                        <Input
                            onChange={(e) => {
                                let newData = {
                                    contacts: {
                                        ...data.contacts,
                                        email: e.target.value,
                                    },
                                };
                                setData(newData);
                            }}
                            value={data.contacts.email}
                            type="text"
                            name="instagram"
                            className="mt-1"
                        />
                    </div>

                    <div>
                        <Label className="text-sm">Telepon</Label>
                        <Input
                            onChange={(e) => {
                                let newData = {
                                    contacts: {
                                        ...data.contacts,
                                        phone: e.target.value,
                                    },
                                };
                                setData(newData);
                            }}
                            value={data.contacts.phone}
                            type="text"
                            name="twitter"
                            className="mt-1"
                        />
                    </div>

                    <div>
                        <Button
                            disabled={processing}
                            type="submit"
                            size="lg"
                            variant="secondary"
                        >
                            {processing ? "Loading..." : "Simpan"}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}

export default Contacts;
