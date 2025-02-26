import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], 
  theme: {
    extend: {
        fontFamily: {
            sans: ['Helvetica']
        }
    },
  },
  plugins: [require("@tailwindcss/typography"),],
};

export default config;