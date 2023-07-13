import React from "react";

function TitleSection({ title, desc }) {
    return (
        <div className="relative py-4 pt-8 mb-8   font-poppins ">
            <h2 className="text-lg font-bold">{title}</h2>
            <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
    );
}

export default TitleSection;
