/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require("nativewind/preset")],
  content: ["./app/**/*", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // add a black primay color
        primary: "#111827",
        secondary: "#F59E0B",
        accent: "#10B981",
      },
    },
  },
  plugins: [],
};
