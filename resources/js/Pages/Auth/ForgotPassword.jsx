import { Head, useForm } from "@inertiajs/react";
import { Fragment } from "react";
import PublicLayout from "@/Layouts/PublicLayout";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import InputError from "@/Components/InputError";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <Fragment>
            <Head title="Forgot Password" />
            <div className="flex justify-center ">
                <div className="flex flex-col justify-center min-h-screen lg:w-1/2">
                    <div className="mb-4 text-sm text-gray-600 ">
                        Forgot your password? No problem. Just let us know your
                        email address and we will email you a password reset
                        link that will allow you to choose a new one.
                    </div>

                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-600">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit}>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="block w-full mt-1"
                            isFocused={true}
                            placeholder="Input email anda"
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError errors={errors} fieldName={'email'} />

                        <div className="flex items-center justify-end mt-4">
                            <Button  variant="secondary" className="ml-4" disabled={processing}>
                                Email Password Reset Link
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

ForgotPassword.layout = (page) => <PublicLayout children={page} />;
