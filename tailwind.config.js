import forms from "@tailwindcss/forms";
import { shadcnPreset } from "./resources/js/lib/shadcn-preset";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],
    presets: [shadcnPreset],
    theme: {
        extend: {
            fontFamily: {
                // body: ["'Inter', sans-serif"],
                // body: ["'Poppins', sans-serif"],
                body: ["GtWalsheimPro", "sans-serif"],
            },
        },
    },

    plugins: [require("tailwindcss-animate")],

    // theme: {
    //     extend: {
    //         backgroundImage: {
    //             "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
    //         },
    //         fontFamily: {
    //             sans: ["syne", ...defaultTheme.fontFamily.sans],
    //             poppins: ["poppins"],
    //         },
    //         colors: {
    //             "zinc-900": "#18181b",
    //             "zinc-950": "#09090b",
    //         },
    //         backgroundImage: {
    //             noise: "radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)",
    //         },
    //     },
    //     fontSize: {
    //         xs: ["0.8125rem", { lineHeight: "1.5rem" }],
    //         sm: ["0.875rem", { lineHeight: "1.5rem" }],
    //         base: ["1rem", { lineHeight: "1.75rem" }],
    //         lg: ["1.125rem", { lineHeight: "1.75rem" }],
    //         xl: ["1.25rem", { lineHeight: "2rem" }],
    //         "2xl": ["1.5rem", { lineHeight: "2rem" }],
    //         "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
    //         "4xl": ["2rem", { lineHeight: "2.5rem" }],
    //         "5xl": ["3rem", { lineHeight: "3.5rem" }],
    //         "6xl": ["3.75rem", { lineHeight: "1" }],
    //         "7xl": ["4.5rem", { lineHeight: "1" }],
    //         "8xl": ["6rem", { lineHeight: "1" }],
    //         "9xl": ["8rem", { lineHeight: "1" }],
    //     },
    // },

    // plugins: [forms, require("tailwind-scrollbar")],
};
