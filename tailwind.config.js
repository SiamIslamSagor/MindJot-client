// tailwind.config.js
const { nextui } = require("@nextui-org/react");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#6c63ff",
        "deep-rose": "#fd5467",
        "light-rose": "#ffb8b8",
        "deep-green": "#38d39f",
        "light-black": "#1b1a2e",
        "gray-black": "#737791",
      },
      keyframes: {
        "move-x": {
          "0%, 100%": { transform: "rotate(-8deg)" },
          "50%": { transform: "rotate(8deg)" },
        },
        "bounce-x": {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateX(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 0.2, 1)",
          },
          "40%": {
            transform: "translateX(-10px)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 0.2, 1)",
          },
          "60%": {
            transform: "translateX(-8px)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 0.2, 1)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "jump-x": {
          "0%, 40%, 80%": {
            transform: "-translateY(2rem)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 0.2, 1)",
          },
          "20%, 60%, 100%": {
            transform: "-translateY(0)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 0.2, 1)",
          },
        },
        dot: {
          "0%": {
            transform: "translate(-50%, 0px)",
          },
          "25%": {
            transform: "translate(-50%, -16px) scale(3)",
          },
          "50%": {
            transform: "translate(-50%, 0px) scale(3)",
          },
          "75%": {
            transform: "translate(-50%, -8px) scale(3)",
          },
          "100%": {
            transform: "translate(-50%, 2px) scale(3)",
          },
        },

        // dot: {
        //   "0%": {
        //     transform: "translate(-50%, 0px)",
        //   },
        //   "25%": {
        //     transform: "translate(-50%, -32px) scale(400%)",
        //   },
        //   "50%": {
        //     transform: "translate(-50%, 0px) scale(400%)",
        //   },
        //   "75%": {
        //     transform: "translate(-50%, -16px) scale(400%)",
        //   },
        //   "100%": {
        //     transform: "translate(-50%, 0px) scale(400%)",
        //   },
        // },

        bigDotBounce: {
          "0%": {
            transform: "translateY(0) scaleX(1.5)",
            opacity: 0,
          },
          "10%": {
            transform: "translateY(-7rem) scaleY(1.3)",
            opacity: 1,
          },
          "40%": {
            transform: "translateY(0) scaleX(1.2)",
          },
          "55%": {
            transform: "translateY(-2rem) scaleY(1.2)",
          },
          "80%": {
            transform: "translateY(0) scaleX(1.1)",
          },
          "90%": {
            transform: "translateY(-0.5rem) scaleY(1.2)",
          },
          // "100%": {
          //   transform: "translateY(0rem) ",
          // },
        },

        "r2l-slide": {
          "0%": {
            transform: "translateX(7rem)",
            opacity: 0,
          },

          "90%": {
            transform: "translateX(0rem)",
            opacity: 1,
          },
        },

        "vertical-bounce": {
          "0%, 100%": {
            transform: "translateY(-50%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },

        /*  bigDotBounce: {
          "0%": {
            transform: "translateY(0) ",
          },
          "30%": {
            transform: "translateY(-7rem) ",
          },
          "40%": {
            transform: "translateY(0) ",
          },
          "60%": {
            transform: "translateY(-3rem) ",
          },
          "80%": {
            transform: "translateY(0) ",
          },
          "90%": {
            transform: "translateY(-1rem) ",
          },
          "100%": {
            transform: "translateY(0rem) ",
          },
        }, */

        /* bigDotBounce: {
          "0%": {
            transform: "translateY(0) scale(1)",
          },
          "20%": {
            transform: "translateY(-7rem) scale(0.9)",
          },
          "40%": {
            transform: "translateY(0) scale(1)",
          },
          "60%": {
            transform: "translateY(-5rem) scale(0.95)",
          },
          "80%": {
            transform: "translateY(0) scale(1)",
          },
          "90%": {
            transform: "translateY(-1rem) scale(0.98)",
          },
          "100%": {
            transform: "translateY(0rem) scale(0.98)",
          },
        }, */

        // "65%": {
        //   transform: "translateY(-0.5rem)",
        // },
        // "100%": {
        //   transform: "translateY(0rem)",
        // },

        // "51%": {
        //   transform: "translateY(-3rem)",
        // },
        // "75%": {
        //   transform: "translateY(-1.5rem)",
        // },
        // "85%": {
        //   transform: "translateY(-1rem)",
        // },
        // "95%": {
        //   transform: "translateY(0rem)",
        // },
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "move-x": "move-x 1s ease-in-out infinite",
        "bounce-x": "bounce-x 1.9s infinite 350ms",
        wiggle: "wiggle 1s ease-in-out infinite",
        dot: "dot 1s ease-in-out ",
        bigDotBounce: "bigDotBounce 1.5s ease-in-out ",
        verticalBounce: "vertical-bounce 1.5s ease-in-out infinite",
        "jump-x": "jump-x 350ms ease-in-out infinite",
      },
    },
    screens: {
      "2xsm": "375px",
      // => @media (min-width: 440px) { ... }
      xsm: "425px",
      // => @media (min-width: 440px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1535px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  darkMode: "class",
  plugins: [require("daisyui"), nextui(), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
