import React from "react";
import Header from "./Header";
import Jumbotron from "@/Components/Jumbotron";
import Footer from "./Footer";

function PublicLayout({ children, header = true, footer = true }) {
    return (
        <div className={` `}>
            {header && <Header />}

            {children}
            {footer && <Footer />}
        </div>
    );
}

export default PublicLayout;
