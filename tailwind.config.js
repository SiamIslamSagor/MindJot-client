/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#6c63ff",
        "deep-rose": "#fd5467",
        "light-rose": "#ffb8b8",
        "deep-green": "#38d39f",
        "light-black": "#1b1a2e",
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
  },
  plugins: [require("daisyui")],
};
