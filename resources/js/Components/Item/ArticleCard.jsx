import React from "react";

function ArticleCard({ popular = false, children, ...props }) {
    const className = popular
        ? "flex flex-col justify-between  p-4 bg-primary/50 border shadow-sm rounded-lg dark:shadow-blue-900 shadow-blue-100 border-border/60 hover:bg-muted dark:hover:bg-secondary/50 duration-200"
        : "flex gap-x-2 border-secondary border  hover:border-transparent  duration-200  p-4 rounded-lg gap-x-4 ";
    return <div className={className}>{children}</div>;
}

function ArticleImage({ image }) {
    return (
        <div className="object-cover w-1/3  bg-primary/50 rounded-lg">
            <img className="w-full h-full rounded-lg " src={image} alt="" />
        </div>
    );
}

function ArticleTopics({ topics }) {
    return (
        <p className="text-sm font-medium text-foreground">
            {topics.map((topic) => (
                <a
                    key={topic.id}
                    href="#"
                    className="hover:underline text-blue-400"
                >
                    {topic.name}
                </a>
            ))}
        </p>
    );
}

function TitleDescSection({ title, desc }) {
    return (
        <a href="#" className="block mt-2">
            <p className="text-xl font-semibold text-accent-foreground">
                {title}
            </p>
            <p className="text-muted-foreground line-clamp-3">{desc}</p>
        </a>
    );
}

function AuthorSection({ author, date }) {
    return (
        <div className="flex items-center mt-6">
            <div className="flex-shrink-0">
                <a href="#">
                    <span className="sr-only">{author.name}</span>
                    <img
                        className="w-8 h-8 rounded-full"
                        // dummy image
                        src="https://chat.openai.com/_next/image?url=https%3A%2F%2Flh3.googleusercontent.com%2Fa%2FAAcHTtdpLReGHWaCtXGOhW7LDSB4NgkhOIqOWJzeMKA9KbXv3LM%3Ds96-c&w=64&q=75"
                        alt=""
                    />
                </a>
            </div>
            <div className="ml-3">
                <p className="text-sm font-medium text-foreground">
                    <a href="#" className="hover:underline">
                        {author.name}
                    </a>
                </p>
                <div className="flex space-x-1 text-sm text-muted-foreground">
                    <time dateTime="2020-03-16">{date}</time>
                    <span aria-hidden="true">&middot;</span>
                </div>
            </div>
        </div>
    );
}

export {
    ArticleCard,
    ArticleImage,
    ArticleTopics,
    TitleDescSection,
    AuthorSection,
};
