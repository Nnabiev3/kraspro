import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        navy: "rgb(var(--brand-navy) / <alpha-value>)",
        teal: { DEFAULT: "rgb(var(--brand-teal) / <alpha-value>)", light: "var(--brand-teal-light)", 50: "var(--brand-teal-50)" },
        surface: "var(--brand-surface)",
        white: "rgb(var(--white) / <alpha-value>)",
        gray: { 900: "var(--gray-900)", 600: "var(--gray-600)", 200: "var(--gray-200)" }
      },
      fontFamily: { heading: ["var(--font-source-sans)", "sans-serif"], body: ["var(--font-source-sans)", "sans-serif"] },
      keyframes: { "area-menu-in": { from: { opacity: "0", transform: "translateY(-4px)" }, to: { opacity: "1", transform: "translateY(0)" } } },
      animation: { "area-menu-in": "area-menu-in 150ms ease-out" },
      maxWidth: { content: "1200px" }
    }
  },
  plugins: []
};

export default config;

