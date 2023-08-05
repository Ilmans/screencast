import { Fragment, useEffect } from "react";

import { Head, useForm } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";
import { Button } from "@/Components/ui/button";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("password.store"));
    };

    return (
        <Fragment>
            <Head title="Reset Password" />
            <div className="flex items-center justify-center w-full lg:p-12 ">
                <div className="w-full p-8 shadow-lg lg:w-2/3 bg-primary dark:shadow-slate-700">
                    <form onSubmit={submit}>
                        <div>
                            <Label htmlFor="email" value="Email" />

                            <Input
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="block w-full mt-1"
                                autoComplete="username"
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                errors={errors}
                                fieldName={"email"}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label htmlFor="password" value="Password" />

                            <Input
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="block w-full mt-1"
                                autoComplete="new-password"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                errors={errors}
                                fieldName={"password"}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-4">
                            <Label
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />

                            <Input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="block w-full mt-1"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                            />

                            <InputError
                                errors={errors}
                                fieldName="password_confirmation"
                                className="mt-2"
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <Button className="ml-4" disabled={processing}>
                                Reset Password
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

ResetPassword.layout = (page) => <PublicLayout children={page} />;
