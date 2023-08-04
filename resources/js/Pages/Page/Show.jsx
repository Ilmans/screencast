import PublicLayout from "@/Layouts/PublicLayout";
import UserLayout from "@/Layouts/UserLayout";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Show({page}) {
    return (
        <div className="relative overflow-hidden isolate bg-background sm:py-32">
          
            <div
                className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
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
            <div className="max-w-3xl mx-auto text-base leading-7 markdown">
                <div className="prose dark:prose-invert md:prose-lg">
                    <h1 className="text-2xl font-semibold text-center">{page.title}</h1>
                    
                </div>
                <ReactMarkdown>
                {page.content}
              </ReactMarkdown>
            </div>
        </div>
    );
}

export default Show;
Show.layout = (page) => <PublicLayout children={page} />;
