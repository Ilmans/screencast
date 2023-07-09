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
        <div className="flex items-center justify-between w-full text-sm font-semibold lg:justify-center gap-x-2 font-poppins">
            {links.map((link, i) => (
                <Link
                    preserveScroll={true}
                    onClick={() => handleClick(link)}
                    key={i}
                    className={`${
                        link.url === null
                            ? "bg-slate-700 text-slate-400"
                            : "hover:bg-slate-800"
                    } px-4 py-2 rounded-lg ${
                        link.active ? "bg-slate-800" : "bg-slate-700"
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
