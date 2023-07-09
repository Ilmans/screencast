import Button from "@/Components/Button";
import Jumbotron from "@/Components/Jumbotron";
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";

export default function Home({ series }) {
    return (
        <div>
            <Head>
                <title>CodingAsik</title>
            </Head>
            <Jumbotron />
            <div className="px-8 py-4 text-black font-poppins">
                <h2 className="text-lg font-bold">
                    Baru baru ini di tambahkan.
                </h2>
                <p className="text-xs text-slate-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi
                </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
                {series.data.map((serie, i) => (
                    <div
                        className="p-8 space-y-2 rounded-lg font-poppins"
                        key={i}
                    >
                        {" "}
                        <img
                            className="mb-4 rounded-lg"
                            src={serie.image}
                            alt=""
                        />
                        <div className="flex gap-2 text-gray-500">
                            {serie.topics.map((topic, i) => (
                                <div className="text-sm font-semibold text-blue-900 rounded-lg font-poppins ">
                                    {topic.name}
                                </div>
                            ))}
                        </div>
                        <h2 className="mb-2 text-lg font-semibold border-r text-slate-950">
                            {serie.title}
                        </h2>
                        <p className="mb-2 text-sm text-gray-800 line-clamp-2">
                            {serie.description}
                        </p>
                        <div className="flex justify-between mt-2 text-gray-500">
                            <div>
                                <span>50 minutes</span>
                            </div>
                            <div>
                                <span>2 episodes</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

Home.layout = (page) => <PublicLayout children={page} />;
