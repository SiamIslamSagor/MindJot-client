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
      },
      animation: {
        "spin-slow": "spin 2s linear infinite",
        "move-x": "move-x 1s ease-in-out infinite",
        "bounce-x": "bounce-x 1.9s infinite 350ms",
        anim: "tra",
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
