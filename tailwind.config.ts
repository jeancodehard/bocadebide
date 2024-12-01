import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-900": "#080211",
        "primary-600": "#100424",
        "secundary-500": "#4192d5",
      },
      dropShadow: {
        pink: "4px 0 8px #4192d5",
      },
      boxShadow: {
        "pink-sides": "8px -8px 70px #4192d533, -8px -8px 70px #4192d533",
      },
      backgroundImage: {
        banner: "url('/assets/banner-estatico.jpg')",
        "gradient-horizontal": "linear-gradient(to right, #4192d5, #160264)",
        "gradient-vertical": "linear-gradient(to bottom, #4192d5, #160264)",
      },
      animation: {
        "pulse-fast": "pulse 1.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
