/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    daisyui: {
        themes: [
            {
                saven: {
                    primary: "#A0CED9",

                    secondary: "#FF9B66",

                    accent: "#68EC78",

                    neutral: "#FCF5C7",

                    "base-100": "#FFFFF9",

                    info: "#3ABFF8",

                    success: "#36D399",

                    warning: "#FBBD23",

                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("daisyui"),
    ],
};
