import Logo from "@/Components/Logo";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { KeyIcon, UserIcon } from "../../../lib/Icon";
import InputWithIcon from "@/Components/InputWithIcon";
import { Button } from "@/Components/ui/button";

export default function Register({  }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name : "",
        username : "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
       

        setData({ ...data, [name]: newValue });
    };

    return (
        <div className="relative flex items-center justify-center h-screen overflow-hidden isolate bg-slate-100 dark:bg-primary">
            <Head title="Register" />
             <div
                className="absolute hidden md:block -left-96 dark:-z-0 -z-10 transform-gpu blur-3xl "
                aria-hidden="true"
            >
                <div
                    className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-violet-500 to-blue-600 opacity-30"
                    style={{
                        clipPath:
                            "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
                    }}
                />
            </div>
           
            <div className="flex items-center w-full lg:p-12 lg:w-1/2">
                <div className="w-full p-8 shadow-lg lg:w-2/3 bg-primary dark:shadow-slate-700">
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold font-poppins">
                            Daftar Akun 
                        </h2>
                        <p className="text-xs">
                            Sudah punya akun?{" "}
                            <Link className="text-blue-400" href="/login">
                                Masuk
                            </Link>
                        </p>
                    </div>
                    <form onSubmit={submit}>
                        <div className="space-y-2 group">
                            <label
                                htmlFor="email"
                                className="text-sm text-slate-400 "
                            >
                                Nama Lengkap
                            </label>
                            <InputWithIcon
                                name="name"
                                onChange={onChange}
                                value={data.name}
                                id="name"
                                placeholder="Nama Lengkap"
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
                                htmlFor="email"
                                className="text-sm text-slate-400 "
                            >
                                Username
                            </label>
                            <InputWithIcon
                                name="username"
                                onChange={onChange}
                                value={data.username}
                                id="username"
                                type="text"
                                placeholder="Nama Pengguna"
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
                                Email
                            </label>
                            <InputWithIcon
                                name="email"
                                onChange={onChange}
                                value={data.email}
                                id="email"
                                type="email"
                                placeholder="Your email"
                                icon={<UserIcon className="w-4 h-4" />}
                            />
                            {errors && errors.email && (
                                <span className="text-xs text-red-600">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className="mt-4 space-y-2 group">
                            <label
                                htmlFor=""
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
                                htmlFor=""
                                className="text-sm text-slate-400"
                            >
                                Konfirmasi Password
                            </label>
                            <InputWithIcon
                                onChange={onChange}
                                value={data.password_confirmation}
                                id="password_confirmation"
                                type="password"
                                placeholder="Password"
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
                            <Button variant="secondary" size="lg" type="submit">
                                Daftar
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Register.layout = (page) => <PublicLayout children={page} />;
