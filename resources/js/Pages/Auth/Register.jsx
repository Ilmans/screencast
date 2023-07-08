import { useEffect } from 'react';

import { Head, Link, useForm } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import InputWithIcon from "@/Components/InputWithIcon";
import { EnpeloveIcon, KeyIcon, UserIcon } from "../../../lib/Icon";
import Button from "@/Components/Button";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        username: "",
        name: "",
        email: "",
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

        post(route("register"));
    };

    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center h-screen bg-gradient-to-b from-slate-950  from-65% to-slate-900">
            <div className="w-1/2 p-24">
                <p className="text-lg font-semibold text-slate-300">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quidem, ut? Atque vero aut saepe ut adipisci. Ratione,
                    deleniti? Aliquam repellendus consequuntur voluptas possimus
                    eum placeat doloribus cumque minima! Repudiandae, eum.""
                </p>
                <p>- John Doe</p>
            </div>
            <div className="flex items-center w-1/2 p-12">
                <div className="w-2/3 p-8 shadow-lg shadow-slate-700 bg-slate-800">
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold font-poppins">
                            Register akun baru
                        </h2>
                        <p className="text-xs">
                            Sudah punya akun?{" "}
                            <Link className="text-blue-400" href="/login">
                                Masuk
                            </Link>
                        </p>
                    </div>
                    <form onSubmit={submit}>
                        <div className="space-y-2 group ">
                            <label
                                htmlFor="username"
                                className="text-sm text-slate-400 "
                            >
                                Nama Lengkap
                            </label>
                            <InputWithIcon
                                name="name"
                                onChange={onChange}
                                value={data.name}
                                id="name"
                                placeholder="Your full name"
                                icon={<UserIcon className="w-4 h-4" />}
                            />
                            {errors && errors.name && (
                                <span className="text-xs text-red-600">
                                    {errors.name}
                                </span>
                            )}
                        </div>
                        <div className="mt-4 space-y-2 group">
                            <label
                                htmlFor="username"
                                className="text-sm text-slate-400 "
                            >
                                username
                            </label>
                            <InputWithIcon
                                name="username"
                                onChange={onChange}
                                value={data.username}
                                id="username"
                                placeholder="Your username"
                                icon={<UserIcon className="w-4 h-4" />}
                            />
                            {errors && errors.username && (
                                <span className="text-xs text-red-600">
                                    {errors.username}
                                </span>
                            )}
                        </div>
                        <div className="mt-4 space-y-2 group">
                            <label
                                htmlFor="email"
                                className="text-sm text-slate-400 "
                            >
                                email
                            </label>
                            <InputWithIcon
                                name="email"
                                onChange={onChange}
                                value={data.email}
                                id="email"
                                placeholder="Your email"
                                icon={<EnpeloveIcon className="w-4 h-4" />}
                            />
                            {errors && errors.email && (
                                <span className="text-xs text-red-600">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className="mt-4 space-y-2 group">
                            <label
                                htmlFor="password"
                                className="text-sm text-slate-400"
                            >
                                Password
                            </label>
                            <InputWithIcon
                                onChange={onChange}
                                value={data.password}
                                id="password"
                                type="password"
                                placeholder="Password"
                                name="password"
                                icon={<KeyIcon className="w-4 h-4" />}
                            />
                            {errors && errors.password && (
                                <span className="text-xs text-red-600">
                                    {errors.password}
                                </span>
                            )}
                        </div>
                        <div className="mt-4 space-y-2 group">
                            <label
                                htmlFor="password_confirmation"
                                className="text-sm text-slate-400"
                            >
                                Konfirmasi Password
                            </label>
                            <InputWithIcon
                                onChange={onChange}
                                value={data.password_confirmation}
                                id="password_confirmation"
                                type="password"
                                placeholder="Konfirmasi Password"
                                name="password_confirmation"
                                icon={<KeyIcon className="w-4 h-4" />}
                            />
                            {errors && errors.password_confirmation && (
                                <span className="text-xs text-red-600">
                                    {errors.password_confirmation}
                                </span>
                            )}
                        </div>

                        <div className="mt-10 group">
                            <Button
                                disabled={processing}
                                type="submit"
                                bg={"secondary"}
                            >
                                {processing ? "Daftar..." : "Daftar "}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Register.layout = (page) => <PublicLayout children={page} />;
