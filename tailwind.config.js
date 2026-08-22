/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0E1113",
        surface: {
          DEFAULT: "#15181B",
          alt: "#1B1F23",
          raised: "#20252A",
        },
        line: {
          DEFAULT: "#282E33",
          strong: "#3A424A",
        },
        ink: {
          primary: "#E9EBEC",
          secondary: "#9BA3A9",
          muted: "#666E74",
        },
        accent: {
          DEFAULT: "#CC8B3C",
          dim: "#8A6437",
          bright: "#E3A75B",
        },
        signal: {
          DEFAULT: "#5C8CB0",
          dim: "#3E5C70",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "2xs": "0.6875rem",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, #1E2327 1px, transparent 1px), linear-gradient(to bottom, #1E2327 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
