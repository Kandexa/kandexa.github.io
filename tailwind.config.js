/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f0f4fa",
          100: "#dce4f2",
          200: "#b9c9e5",
          300: "#8da8d4",
          400: "#6185c0",
          500: "#3f65a8",
          600: "#2f4f8c",
          700: "#1e3a6e",
          800: "#142952",
          900: "#0c1a38",
          950: "#070f22",
        },
        slate: {
          50: "#f8f9fb",
          100: "#f1f3f6",
          150: "#e8ecf1",
        },
      },
      fontFamily: {
        sans: ['"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "floatSlow 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
