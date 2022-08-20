/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "hero-animation": {
          "0%": {transform: "translateY(0px)"},
          "100%": {transform: "translateY(calc(-100% + 24rem))"}
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee"]
  }
}
