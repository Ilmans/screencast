import { Card } from "@/Components/ui/card";
import { Link } from "@inertiajs/react";
import React, { useEffect } from "react";

function TablesOfContent({ markdown }) {
    const [toc, setToc] = React.useState([]);

    useEffect(() => {
        const headings = [];

        const lines = markdown.split("\n");
        lines.forEach((line) => {
            if (line.startsWith("## ")) {
                const headingText = line.replace("## ", "");

                headings.push({
                    text: headingText,
                });
            }
        });

        setToc(headings);
    }, [markdown]);

    const handleHeadingClick = (text) => {
        const headingElements = document.querySelectorAll("h2");
        headingElements.forEach((headingElement) => {
            if (headingElement.textContent === text) {
                headingElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    };

    return (
        <Card className="sticky top-20 hidden w-72 max-h-96 overflow-y-auto rounded-lg md:block mt-4">
            <div className="p-4">
                <h1 className="text-xl font-bold text-accent-foreground font-poppins">
                    Daftar Isi
                </h1>
                <div className="mt-4 space-y-2 ">
                    {toc.map((item) => (
                        <button
                            onClick={() => handleHeadingClick(item.text)}
                            key={item.text}
                            href={`#${item.slug}`}
                            className={`text-start ${
                                item.level == 1
                                    ? "text-lg font-medium"
                                    : "text-sm font-normal"
                            } text-muted-foreground hover:underline`}
                        >
                            {item.text}
                        </button>
                    ))}
                </div>
            </div>
        </Card>
    );
}

export default TablesOfContent;
