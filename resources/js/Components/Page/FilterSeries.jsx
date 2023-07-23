import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../../lib/Icon";
import InputWithIcon from "../InputWithIcon";
import { router } from "@inertiajs/react";
import SelectFiltering from "../SelectFiltering";
import Searching from "../Searching";


const filterOptions = [
    {
        name: "Terbaru",
        value: "newest",
    },
    {
        name: "Terlama",
        value: "oldest",
    },
    // most videos
    {
        name: "Terbanyak Video",
        value: "most_videos",
    },
    // least videos
    {
        name: "Tersedikit Video",
        value: "least_videos",
    },
    //most time
    {
        name: "Durasi Terlama",
        value: "most_time",
    },
    //least time
    {
        name: "Durasi Terpendek",
        value: "least_time",
    },
];
function FilterSeries() {
    // const [searchTerm, setSearchTerm] = useState(null);

    // useEffect(() => {
    //     if (searchTerm === null) return;

    //     const delayDebounceFn = setTimeout(() => {
    //         router.reload({ data: { search: searchTerm } });
    //     }, 500);
    //     return () => clearTimeout(delayDebounceFn);
    // }, [searchTerm]); // Memonitor perubahan searchTerm

    // const handleChange = (e) => {
    //     setSearchTerm(e.target.value);
    // };
    return (
        <div className="flex items-center justify-between mb-8">
            <SelectFiltering
                name="sort"
                label="Sort"
                filterOptions={filterOptions}
                disabledDefault={true}
                preserveScroll={true}
            />
                    
            <Searching placeholder={"Judul Serie"} preserveScroll={true} />
        </div>
    );
}

export default FilterSeries;
