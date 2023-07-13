import Logo from "@/Components/Logo";
import PublicLayout from "@/Layouts/PublicLayout";
import { Link, useForm } from "@inertiajs/react";
import { useEffect } from "react";
import { KeyIcon, UserIcon } from "../../../lib/Icon";
import InputWithIcon from "@/Components/InputWithIcon";
import { Button } from "@/Components/ui/button";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        console.log(name);

        setData({ ...data, [name]: newValue });
    };

    return (
        <div className="flex items-center h-screen bg-slate-100  dark:bg-primary">
            <div className="hidden w-1/2 p-24 lg:block">
                <p className="text-sm font-semibold text-foreground font-poppins">
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quidem, ut? Atque vero aut saepe ut adipisci. Ratione,
                    deleniti? Aliquam repellendus consequuntur voluptas possimus
                    eum placeat doloribus cumque minima! Repudiandae, eum.""
                    <p>- John Doe</p>
                </p>
            </div>
            <div className="flex items-center w-full p-12 lg:w-1/2">
                <div className="w-full p-8 shadow-lg lg:w-2/3  bg-primary dark:shadow-slate-700">
                    <div className="mb-8">
                        <h2 className="text-lg font-semibold font-poppins">
                            Masuk ke akun anda
                        </h2>
                        <p className="text-xs">
                            Tidak punya akun?{" "}
                            <Link className="text-blue-400" href="/register">
                                Daftar
                            </Link>
                        </p>
                    </div>
                    <form onSubmit={submit}>
                        <div className="space-y-2 group">
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
                        </div>
                        <div className="flex items-center justify-between mt-2 text-xs">
                            <div className="flex items-center gap-1 text-slate-400">
                                <input
                                    name="remember"
                                    onChange={onChange}
                                    value={data.remember}
                                    id="remember"
                                    type="checkbox"
                                    className="text-xs rounded-sm bg-slate-950"
                                />
                                <label htmlFor="remember">Ingat saya</label>
                            </div>
                            <Link
                                href="#"
                                className="text-slate-400 hover:text-white"
                            >
                                Lupa password?
                            </Link>
                        </div>
                        <div className="mt-10 group">
                            <Button variant="secondary" size="lg" type="submit">
                                Login
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

Login.layout = (page) => <PublicLayout children={page} />;
