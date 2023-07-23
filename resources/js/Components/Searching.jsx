import InputWithIcon from "@/Components/InputWithIcon";
import { router } from "@inertiajs/react";
import { IconSearch } from "@tabler/icons-react";
import React, { useEffect } from "react";

function Searching({placeholder,preserveScroll = false}) {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");
    const [searchValue, setSearchValue] = React.useState(search || "");
    const isFirstRender = React.useRef(true);
    const currentUrl = new URL(window.location.href);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }
        const debounce = setTimeout(() => {
            router.replace(currentUrl.pathname + "?search=" + searchValue,{
                preserveScroll: preserveScroll,
            });
        }, 500);

        return () => clearTimeout(debounce);
    }, [searchValue]);

    return (
        <InputWithIcon
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            icon={<IconSearch className="w-4 h-4" />}
            placeholder={placeholder}
        />
    );
}

export default Searching;
