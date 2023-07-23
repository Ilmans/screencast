import React, { useEffect, useRef, useState } from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { router, usePage } from "@inertiajs/react";

function SelectFiltering({
    name,
    label,
    filterOptions,
    disabledDefault = false,
}) {
    const params = new URLSearchParams(window.location.search);

    const filterParams = params.get(name);
    const currentUrl = new URL(window.location.href);

    const [selectedFilter, setSelectedFilter] = React.useState(
        filterParams || ""
    );
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        params.set(name, selectedFilter);
        router.replace(currentUrl.pathname + "?" + params.toString());
    }, [selectedFilter]);

    useEffect(() => {
        setSelectedFilter(filterParams || "");
    }, [filterParams]);

    return (
        <Select
           defaultValue=""
            value={selectedFilter}
            onValueChange={(value) => setSelectedFilter(value)}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
             
                    <SelectItem disabled={disabledDefault} value=""> {label}</SelectItem>
                
                {filterOptions.map((t, i) => (
                    <SelectItem key={i} value={t.value}>
                        {t.name}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

export default SelectFiltering;
