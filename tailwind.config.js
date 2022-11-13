/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            textColor: {
                primary: "#fb4466",
                secondary: "#555555",
                muted: "#bebaba",
            }
        },
    },
    plugins: [],
}
