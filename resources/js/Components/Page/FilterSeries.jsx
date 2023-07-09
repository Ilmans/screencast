import React, { useEffect, useState } from "react";
import { SearchIcon } from "../../../lib/Icon";
import InputWithIcon from "../InputWithIcon";
import { router } from "@inertiajs/react";

function FilterSeries() {
    const [searchTerm, setSearchTerm] = useState(null);

    useEffect(() => {
        if (searchTerm === null) return;

        const delayDebounceFn = setTimeout(() => {
            router.reload({ data: { search: searchTerm } });
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm]); // Memonitor perubahan searchTerm

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };
    return (
        <div className="flex items-center justify-between mb-8">
            <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
                <option selected>Terbaru</option>
            </select>
            <InputWithIcon
                onChange={handleChange}
                icon={<SearchIcon />}
                placeholder="Cari video"
            />
        </div>
    );
}

export default FilterSeries;
