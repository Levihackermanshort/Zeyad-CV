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
        primary: { DEFAULT: "#6366f1", dark: "#4f46e5" },
        secondary: "#a855f7",
        accent: "#06b6d4",
        dark: { DEFAULT: "#0f172a", deeper: "#020617" },
        card: { DEFAULT: "#1e293b", light: "#334155" },
        muted: "#94a3b8",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-main": "linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%)",
        "gradient-soft": "linear-gradient(90deg, #6366f1, #a855f7)",
      },
    },
  },
  plugins: [],
};

export default config;