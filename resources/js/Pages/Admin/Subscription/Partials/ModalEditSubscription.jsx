import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/Components/ui/dialog";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/Components/ui/select";
import { useForm } from "@inertiajs/react";
import React from "react";

function ModalEditSubscription({ subscription, open, setOpen }) {
    const { data, setData, put, processing, errors } = useForm({
        status: subscription.is_active,
        expired: subscription.ends_at.split(" ")[0],
    });

    const submit = (e) => {
        e.preventDefault();
        put(route("admin.subscription.update", subscription.id));
    };

    return (
        <Dialog open={open}>
            <DialogContent setOpen={setOpen} className="w-96">
                <DialogHeader>
                    <DialogTitle>Edit User</DialogTitle>
                    <DialogDescription>
                        Edit langganan pengguna {subscription.user.email}
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={submit} className="space-y-6">
                    <div className="space-y-1">
                        <Label htmlFor="user">User</Label>
                        <Input value={subscription.user.email} disabled />
                    </div>
                    <div className="space-y-1">
                        <Label className="text-sm">Jenis Video</Label>
                        <Select
                            onValueChange={(value) => {
                                setData({
                                    ...data,
                                    status: value === "active" ? true : false,
                                });
                            }}
                            defaultValue={data.status}
                        >
                            <SelectTrigger>
                                {data.status ? "Aktif" : "Tidak Aktif"}
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="active">Aktif</SelectItem>
                                <SelectItem value="inactive">
                                    {" "}
                                    Tidak Aktif{" "}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                        <InputError errors={errors} fieldName={"status"} />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="expired">Expired</Label>
                        <Input
                            value={data.expired}
                            type="date"
                            name="expired"
                            onChange={(e) => {
                                setData({ ...data, expired: e.target.value });
                            }}
                        />
                        <InputError errors={errors} fieldName={"expired"} />
                    </div>
                    <div className="mt-4">
                        <Button
                            size="lg"
                            variant="secondary"
                            type="submit"
                            disabled={processing}
                        >
                            {processing ? "Loading..." : "Simpan"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default ModalEditSubscription;
