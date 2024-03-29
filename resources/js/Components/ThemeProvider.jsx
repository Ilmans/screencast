import BadgeButton from "@/Components/BadgeButton";
import { Link } from "@inertiajs/react";
import { IconMoon, IconSun } from "@tabler/icons-react";
import React, { Fragment, useState } from "react";

function ThemeProvider() {
    function disableTransitionsTemporarily() {
        document.documentElement.classList.add("[&_*]:!transition-none");
        window.setTimeout(() => {
            document.documentElement.classList.remove("[&_*]:!transition-none");
        }, 0);
    }
    function toggleMode() {
        disableTransitionsTemporarily();

        let darkModeMediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );
        let isSystemDarkMode = darkModeMediaQuery.matches;
        let isDarkMode = document.documentElement.classList.toggle("dark");

        if (isDarkMode === isSystemDarkMode) {
            delete window.localStorage.isDarkMode;
        } else {
            window.localStorage.isDarkMode = isDarkMode;
        }
    }

    return (
        <button
            type="button"
            className="flex cursor-pointer text-muted-foreground hover:text-foreground items-center justify-center rounded-full focus:outline-none"
            aria-label="Toggle dark mode"
            onClick={toggleMode}
        >
            <IconSun className="dark:hidden w-4 h-4" />
            <IconMoon className="hidden dark:block w-4 h-4" />
        </button>
    );
}

export default ThemeProvider;
