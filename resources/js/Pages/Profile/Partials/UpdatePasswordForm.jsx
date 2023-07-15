import { useRef } from "react";

import { useForm } from "@inertiajs/react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Button } from "@/Components/ui/button";

import InputError from "@/Components/InputError";

export default function UpdatePasswordForm({ className = "" }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset("current_password");
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    const onChange = (e) =>
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });

    return (
        <form onSubmit={updatePassword} className="space-y-6">
            <div className="">
                <Label forInput="current_password" value="">
                    Password
                </Label>
                <Input
                    name="current_password"
                    onChange={onChange}
                    type="password"
                    value={data.current_password}
                    className="mt-1 block w-full"
                />
                <InputError errors={errors} fieldName={"current_password"} />
            </div>
            <div className="">
                <Label forInput="password" value="">
                    Password
                </Label>
                <Input
                    name="password"
                    onChange={onChange}
                    type="password"
                    value={data.password}
                    className="mt-1 block w-full"
                />
                <InputError errors={errors} fieldName={"password"} />
            </div>
            <div className="">
                <Label forInput="password_confirmation" value="">
                    Password Confirmation
                </Label>
                <Input
                    name="password_confirmation"
                    onChange={onChange}
                    type="password"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                />
                <InputError
                    errors={errors}
                    fieldName={"password_confirmation"}
                />
            </div>
            <div>
                <Button size="lg">
                    {processing ? "Updating..." : "Update"}
                </Button>
                {recentlySuccessful && (
                    <span className="text-sm text-muted-foreground ml-1">
                        Berhasil diupdate
                    </span>
                )}
            </div>
        </form>
    );
}
