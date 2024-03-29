import { Link } from "@inertiajs/react";
import React from "react";

function Pagination({ links }) {
    const handleClick = (link) => {
        if (link.url === null) {
            return;
        }
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="flex items-center justify-between w-full text-sm font-semibold lg:justify-center gap-x-2  ">
            {links.map((link, i) => (
                <Link
                    preserveScroll={true}
                    onClick={() => handleClick(link)}
                    key={i}
                    className={`${
                        link.url === null
                            ? "bg-muted text-muted-foreground border"
                            : "bg-accent text-foreground border-accent hover:bg-slate-200 dark:hover:bg-muted-foreground"
                    } px-4 py-2 rounded-lg ${
                        link.active
                            ? "bg-muted-foreground text-muted  dark:bg-muted-foreground"
                            : ""
                    }  ${
                        link.label === "&laquo; Previous" ||
                        link.label === "Next &raquo;"
                            ? ""
                            : "hidden lg:block"
                    }`}
                    href={link.url}
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: link.label,
                        }}
                    ></span>
                </Link>
            ))}
        </div>
    );
}

export default Pagination;
