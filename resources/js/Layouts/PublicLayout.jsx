import React from "react";
import Header from "./Header";
import Jumbotron from "@/Components/Jumbotron";
import Footer from "./Footer";

function PublicLayout({ children }) {
    const currentTheme = localStorage.getItem("theme") || "dark";
    return (
        <div className={`${currentTheme} text-slate-600 themeprovider `}>
            <div className="dark:noise-bg dark:text-white">
                <Header />

                {children}
                <Footer />
            </div>
        </div>
    );
}

export default PublicLayout;
