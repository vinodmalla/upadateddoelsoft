/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    // ✅ Place custom screens here (not inside extend)
    screens: {
      xs: "475px",   // custom small breakpoint
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        kumbh: ['Kumbh Sans', 'sans-serif', "'Inter'", "system-ui", "sans-serif"],
        inter: ["'Inter'", "system-ui", "sans-serif"],
        manrope: ["'Manrope'", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(-70%)" },
        },
        move: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        marquee: "marquee 20s linear infinite",
        moveOnce: "move 2s ease-in-out 1",
      },
    },
  },
  plugins: [],
}
