/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        home_button_grey: "#1e1e1e",
        searchbar_grey: "#2a2a2a",
      },
      spacing: {
        sm: "100px",
        md: "16px",
        lg: "100px",
        xl: "150px",
      },
      theme: {
        fontFamily: {
          sans: ["ui-sans-serif", "system-ui"],
          serif: ["ui-serif", "Georgia"],
          mono: ["ui-monospace", "SFMono-Regular"],
          display: ["Oswald"],
          body: ['"Open Sans"'],
          circular: ["Gotham"],
        },
      },
    },
  },
  plugins: [],
};
