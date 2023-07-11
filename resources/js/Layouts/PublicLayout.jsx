import React from "react";
import Header from "./Header";
import Jumbotron from "@/Components/Jumbotron";
import Footer from "./Footer";

function PublicLayout({ children, header = true, footer = true }) {
    const currentTheme = localStorage.getItem("theme") || "dark";
    return (
        <div
            className={`${currentTheme}  dark:text-slate-200 dark:bg-slate-950 themeprovider  `}
        >
            <div className=" dark:noise-bg dark:text-white">
                {header && <Header />}

                {children}
                {footer && <Footer />}
            </div>
        </div>
    );
}

export default PublicLayout;
