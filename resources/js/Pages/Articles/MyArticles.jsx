import UserLayout from "@/Layouts/UserLayout";
import React from "react";

function MyArticles() {
    return <div>MyArticles</div>;
}

export default MyArticles;
MyArticles.layout = (page) => <UserLayout children={page} />;
