/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        discord: {
          50: "#f6f6f7",
          100: "#ebedef",
          200: "#d2d5d9",
          300: "#b9bdc3",
          400: "#8e9297",
          500: "#72767d",
          600: "#4f545c",
          700: "#36393f",
          800: "#2f3136",
          900: "#202225",
        },
        // Spotify-inspired colors
        spotify: {
          50: "#e6f7ec",
          100: "#c3ecd4",
          200: "#9ce0b9",
          300: "#6fd49d",
          400: "#4dc985",
          500: "#1db954", // Spotify green
          600: "#18a84c",
          700: "#149442",
          800: "#107f38",
          900: "#096a2e",
        },
        brand: {
          primary: "#1db954", // Spotify green
          secondary: "#5865f2", // Discord blue
          dark: "#202225", // Discord dark
          light: "#f6f6f7", // Discord light
          accent: "#ff006c", // Vibrant accent
        },
        primary: {
          50: "#f5f3ff",
          100: "#ede9fe",
          200: "#ddd6fe",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
          700: "#6d28d9",
          800: "#5b21b6",
          900: "#4c1d95",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Montserrat", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      },
      boxShadow: {
        discord: "0 2px 10px 0 rgba(0, 0, 0, 0.2)",
        spotify: "0 8px 24px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
