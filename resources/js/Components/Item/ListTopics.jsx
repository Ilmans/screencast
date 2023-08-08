import { Link } from "@inertiajs/react";
import React from "react";

function ListTopics({ topics }) {
    const currentRoute = location.pathname.split("/")[2];

    return topics.map((topic, i) => (
        <Link
            href={`/topic/${topic.slug}`}
            key={i}
            className={`${
                currentRoute === topic.slug ? "text-blue-400" : ""
            } flex items-center py-2 lg:font-semibold rounded-lg gap-x-2 hover:text-blue-400`}
        >
            <img
                className="rounded-lg"
                width={25}
                height={25}
                src={`${topic.image.includes('https') ? topic.image : `/images/topics/${topic.image}`}`}
                alt=""
            />
            <p>{topic.name}</p>
        </Link>
    ));
}

export default ListTopics;
