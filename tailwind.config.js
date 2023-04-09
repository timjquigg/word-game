/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        ripple: {
          "0%": { width: "0px", height: "0px", opacity: 0.5 },
          "100%": { width: "500px", height: "500px", opacity: 0 },
        },
        beat: {
          "0%": { transform: "scale(1);" },
          "50%": { transform: "scale(1.3);" },
        },
        // slide: {
        //   "0%": { transform: "translateX(-100vw)" },
        //   "100%": { transform: "translateX(0)" },
        // },
        // show: {
        //   "0%": { opacity: "0%" },
        //   "100%": { opacity: "100%" },
        // },
        letter: {
          "0%": { transform: "translateX(-100vw)", opacity: "0%" },
          "100%": { transform: "translateX(0)", opacity: "100%" },
        },
        submit: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100vw)" },
        },
      },
      animation: {
        ripple: "ripple 1s linear infinite",
        "bounce-short": "bounce 1s ease-in-out 0.5",
        beat: "beat 1s infinite",
        // slide: "slide 2s ease-in-out 0s 1",
        // show: "show 2s ease-in-out 0s 1",
        letter: "letter 1s ease-in-out 0s 1",
        submit: "submit 1s ease-in-out 0s 1",
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities({
        "animation-delay": (value) => {
          return {
            animationDelay: value,
          };
        },
      });
    }),
  ],
};
