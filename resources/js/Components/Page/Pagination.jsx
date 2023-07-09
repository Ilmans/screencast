import { Link } from "@inertiajs/react";
import React from "react";

function Pagination({ links }) {
    return (
        <div className="flex items-center text-sm font-semibold gap-x-2 font-poppins">
            {links.map((link, i) => (
                <Link
                    preserveScroll={true}
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                        });
                    }}
                    key={i}
                    className={`px-4 py-2 rounded-lg ${
                        link.active ? "bg-slate-800" : "bg-slate-700"
                    } hover:bg-slate-800`}
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
