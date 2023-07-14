import { Link, useForm, usePage } from "@inertiajs/react";
import { Transition } from "@headlessui/react";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import InputError from "@/Components/InputError";

export default function UpdateProfileInformation({}) {
    const user = usePage().props.auth.user;
    const success = usePage().props.success;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            username: user.username,
            email: user.email,
            about: user.about,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    const onChange = (e) =>
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });

    return (
        <form onSubmit={submit} className="mt-6 space-y-6">
            <div className="grid grid-cols-5 gap-x-4">
                <div className="col-span-3">
                    <Label forInput="name" value="Name">
                        Nama Lengkap
                    </Label>
                    <Input
                        id="name"
                        name="name"
                        onChange={onChange}
                        type="text"
                        value={data.name}
                        className="mt-1 block w-full"
                    />
                    <InputError errors={errors} fieldName={"name"} />
                </div>
                <div className="col-span-2">
                    <Label forInput="username" value="Username">
                        Username
                    </Label>
                    <Input
                        name="username"
                        onChange={onChange}
                        id="username"
                        type="text"
                        value={data.username}
                        className="mt-1 block w-full"
                    />
                </div>
            </div>
            <div>
                <Label forInput="email" value="Email">
                    Email
                </Label>
                <Input
                    name="email"
                    onChange={onChange}
                    id="email"
                    type="text"
                    value={data.email}
                    className="mt-1 block w-full"
                />
            </div>
            <div>
                <Label forInput="about" value="About">
                    Sedikit tentang saya
                </Label>
                <Textarea
                    name="about"
                    onChange={onChange}
                    id="about"
                    className="mt-1 block w-full"
                    value={data.about}
                />
            </div>
            <div>
                <Button size="lg" type="submit">
                    Simpan
                </Button>
                {success && (
                    <span className="ml-2 text-muted-foreground">
                        {success}
                    </span>
                )}
            </div>
            {/* {mustVerifyEmail && user.email_verified_at === null && (
                <div>
                    <p className="text-sm mt-2 text-gray-800">
                        Your email address is unverified.
                        <Link
                            href={route("verification.send")}
                            method="post"
                            as="button"
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Click here to re-send the verification email.
                        </Link>
                    </p>

                    {status === "verification-link-sent" && (
                        <div className="mt-2 font-medium text-sm text-green-600">
                            A new verification link has been sent to your email
                            address.
                        </div>
                    )}
                </div>
            )} */}

            {/* <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>Save</PrimaryButton>

                <Transition
                    show={recentlySuccessful}
                    enterFrom="opacity-0"
                    leaveTo="opacity-0"
                    className="transition ease-in-out"
                >
                    <p className="text-sm text-gray-600">Saved.</p>
                </Transition>
            </div> */}
        </form>
    );
}
