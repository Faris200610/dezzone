import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003B5C",     // Deep Navy - Main Brand
        secondary: "#FFB400",  // Golden Orange - Accents/CTAs
        success: "#10B981",    // Green - Best Price
        background: "#F8FAFC", // Slate 50 - Main BG
        surface: "#FFFFFF",    // White - Cards
      },
    },
  },
  plugins: [],
};

export default config;
