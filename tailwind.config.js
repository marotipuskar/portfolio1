/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#64748B",
        accent: "#94A3B8",
        background: "#F8FAFC",
      },
    },
  },
  plugins: [],
}

