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
        navy: "#14532D",
        "navy-dark": "#052E16",
        espresso: "#16A34A",
        "warm-white": "#F0FDF4",
        "blue-tint": "#DCFCE7",
        "brown-tint": "#BBF7D0",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      animation: {
        "draw-line": "drawLine 1.5s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        drawLine: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
