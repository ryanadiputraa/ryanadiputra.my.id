/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    plugins: [],
    theme: {
        extend: {
            colors: {
                base: "#111720",
                primary: "#86CDFF"
            }
        }
    }
};
