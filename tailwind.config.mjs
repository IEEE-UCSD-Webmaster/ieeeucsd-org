/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                ieee: "#00629b",
            },
        },
    },
    "editor.quickSuggestions": {
        strings: "on",
    },
    plugins: [],
};
