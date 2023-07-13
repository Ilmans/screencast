import PublicLayout from "@/Layouts/PublicLayout";
import React from "react";

function Index() {
    return <div>b</div>;
}

export default Index;
Index.layout = (page) => <PublicLayout children={page} />;
