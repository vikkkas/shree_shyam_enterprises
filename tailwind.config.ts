/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0E1B2E",
        orange: "#E05A1E",
        card: "#1A2D48",
        muted: "#8BA3BF",
        "off-white": "#F4F1EC",
        "near-black": "#070F1A",
      },
      fontFamily: {
        heading: ["Barlow Condensed", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        fadeUp: "fadeUp 0.6s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
