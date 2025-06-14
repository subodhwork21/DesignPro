/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
const plugin = require("tailwindcss/plugin");

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        franklin_light: ["Franklin-light"],
        franklin_thin: ["Franklin-thin"],
        franklin_bold: ["Franklin-bold"],
        franklin_regular: ["Franklin-regular"],
        georgia_bold: ["Georgia-bold"],
        tap: ["tap"],
      },
      fontSize: {
        liquid_h: "clamp(40px, 4vw, 64px)",
        sm_new: "14px",
      },
      colors: {
        tc: {
          primary: "rgb(98, 203, 201)",
          secondary: "rgb(61, 69, 67)",
          accent: "#e74c3c",
          dark: "#333333",
          light: "#f8f8f8",
          dark_gray: "#3d4543",
          Grey: "#979c9b",
          Faded_Grey: "#686f6e",
          Light_Grey: "#cccdcb",
          Extra_Light_Grey: "#e8e9e9",
          Green: "#62cbc9",
          Maron: "#530029",
          Yellow: "#f4c55c",
          Purple: "#8b85b3",
          Rose: "#f89aba",
          Orange: "#e69e6c",
          Dark_Blue: "#13206b",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({
      addUtilities,
    }: {
      addUtilities: (utilities: Record<string, Record<string, string>>) => void;
    }) {
      const newUtilities = {
        ".word-spacing-neg-5": {
          wordSpacing: "-5px",
        },
        ".word-spacing-neg-4": {
          wordSpacing: "-4px",
        },
        ".word-spacing-neg-3": {
          wordSpacing: "-3px",
        },
        ".word-spacing-neg-2": {
          wordSpacing: "-2px",
        },
        ".word-spacing-neg-1": {
          wordSpacing: "-1px",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
