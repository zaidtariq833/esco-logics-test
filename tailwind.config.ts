import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        maroon: "var(--maroon)",
        golden: "var(--golden)",
        cream: "var(--cream)",
        lightestGray: "var(--lightest-gray)",
        slightGray: "var(--slight-gray)",
        darkPurple: "var(--dark-purple)",
        grayish: "var(--grayish)",
        dimGray: "var(--dim-gray)",
      },
    },
  },
  plugins: [],
} satisfies Config;
