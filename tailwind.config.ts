import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1200px" } },
    extend: {
      colors: {
        navy: "var(--brand-navy)",
        teal: { DEFAULT: "var(--brand-teal)", light: "var(--brand-teal-light)", 50: "var(--brand-teal-50)" },
        cream: "var(--brand-cream)",
        white: "var(--white)",
        gray: { 900: "var(--gray-900)", 600: "var(--gray-600)", 200: "var(--gray-200)" }
      },
      fontFamily: { heading: ["var(--font-playfair)", "serif"], body: ["var(--font-source-sans)", "sans-serif"] },
      maxWidth: { content: "1200px" }
    }
  },
  plugins: []
};

export default config;
