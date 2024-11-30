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

        // Primary

        orange: "#FF7D1A",
        paleOrange: "#FFEDE0",

        // Neutral
        veryDarkBlue: "#1D2025",
        darkGrayishBlue: "#68707D",
        grayishBlue: "#B6BCC8",
        lightGrayishBlue: "#F7F8FD",
        

      },
    },
  },
  plugins: [],
} satisfies Config;
