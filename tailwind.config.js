/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#030303",
        surface: {
          DEFAULT: "#0D0D10",
          alt: "#15151A",
          raised: "#1E1E24",
        },
        line: {
          DEFAULT: "#262630",
          strong: "#3B3B4A",
        },
        ink: {
          primary: "#F8F9FA",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
        accent: {
          DEFAULT: "#00E5FF", // Cyan
          dim: "#008A99",
          bright: "#66F0FF",
        },
        signal: {
          DEFAULT: "#00FF9D", // Emerald/Neon Green
          dim: "#00995E",
        },
      },
      fontFamily: {
        display: ["'Outfit'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "2xs": "0.6875rem",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.15) 0%, transparent 60%)',
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      maxWidth: {
        content: "1280px",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(0, 229, 255, 0.2)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 229, 255, 0.6), 0 0 10px rgba(0, 229, 255, 0.4)' },
        }
      }
    },
  },
  plugins: [],
};
