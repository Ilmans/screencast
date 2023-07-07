import React from "react";
import Header from "./Header";
import Jumbotron from "@/Components/Jumbotron";
import Footer from "./Footer";

function PublicLayout({ children }) {
    return (
        <main className="dark:noise-bg  dark:text-white from-zinc-50 to-zinc-100 bg-gradient-to-tr  dark:from-slate-950 via-slate-800 dark:from-70% dark:to-slate-900 h-screen">
            <Header />
            <Jumbotron />
            <div className="p-4 bg-slate-100 wrapper">{children}</div>
            <Footer />
        </main>
    );
}

export default PublicLayout;
