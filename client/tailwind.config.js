module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { roboto: ["Roboto", "sans-serif"] },
    },
    // keyframes: {
    //   "slide-in": {
    //     "0%": {
    //       "-webkit-transform": "translateX(-200px)",
    //       transform: "translateX(-200px)",
    //     },
    //     "100%": {
    //       "-webkit-transform": "translateX(0px)",
    //       transform: "translateX(0px)",
    //     },
    //   },

    //   "slide-in-up": {
    //     "0%": {
    //       "-webkit-transform": "translateY(20px)",
    //       transform: "translateY(20px)",
    //     },
    //     "100%": {
    //       "-webkit-transform": "translateY(0px)",
    //       transform: "translateY(0px)",
    //     },
    //   },

    //   "slide-in-right": {
    //     "0%": {
    //       "-webkit-transform": "translateX(200px)",
    //       transform: "translateX(200px)",
    //     },
    //     "100%": {
    //       "-webkit-transform": "translateX(0px)",
    //       transform: "translateX(0px)",
    //     },
    //   },

    //   "slide-fwd": {
    //     "0%": {
    //       "-webkit-transform": "translateZ(0px)",
    //       transform: "translateZ(0px)",
    //     },
    //     "100%": {
    //       "-webkit-transform": "translateZ(160px)",
    //       transform: "translateZ(160px)",
    //     },
    //   },
    //   "slide-down": {
    //     "0%": {
    //       "-webkit-transform": "translateY(-10px)",
    //       transform: "translateY(-10px)",
    //     },
    //     "100%": {
    //       "-webkit-transform": "translateY(0px)",
    //       transform: "translateY(0px)",
    //     },
    //   },
    // },
    // animation: {
    //   "slide-in": "slide-in 0.4s ease-in-out",
    //   "slide-in-up":
    //     "slide-in-up 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940)",
    //   "slide-in-right": "slide-in-right 0.4s ease-in-out",
    //   "slide-down": "slide-down 0.1s  ease-in",
    //   "slide-fwd":
    //     " slide-fwd 0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
    // },
    // transitionProperty: {
    //   height: "height",
    // },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
