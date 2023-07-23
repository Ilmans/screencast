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
import { useForm } from "@inertiajs/react";
import React from "react";

function ModalEditUser({ user, open, setOpen }) {
    const { data, setData, put, processing, errors } = useForm({
        username: user?.username,
        name: user?.name,
        email: user?.email,
        password: "",
    });

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const submit = (e) => {
        e.preventDefault();
        put(route("admin.user.update", user.id));
    };
    return (
        <Dialog open={open}>
            <DialogContent setOpen={setOpen} className="w-96">
                <DialogHeader>
                    <DialogTitle>Edit User</DialogTitle>
                    <DialogDescription>
                        Edit user {user?.username}
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={submit}>
                    <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            name="username"
                            id="username"
                            value={data.username}
                            onChange={onChange}
                        />
                        <InputError errors={errors} fieldName={"username"} />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="name">Nama</Label>
                        <Input
                            name="name"
                            id="name"
                            value={data.name}
                            onChange={onChange}
                        />
                        <InputError errors={errors} fieldName={"name"} />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            value={data.email}
                            onChange={onChange}
                        />
                        <InputError errors={errors} fieldName={"email"} />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            value={data.password}
                            onChange={onChange}
                        />
                        <InputError errors={errors} fieldName={"password"} />
                    </div>
                    <div className="mt-4">
                        <Button
                            size="lg"
                            variant="secondary"
                            type="submit"
                            disabled={processing}
                        >
                            {processing ? "Loading..." : "Update"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}

export default ModalEditUser;
