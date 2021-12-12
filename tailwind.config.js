module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1024px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }

      extra_desktop: "2160px",
    },
    extend: {},
    colors: {
      "blue-principal": "#0D75FF",
      "color-mode": "#E7EDFD",
      "active-color": "#F8FAFD",
      "background-color": "rgba(13, 117, 255, 0.05)",
      "main-title": "#344062",
      "small-main-title": "#0D75FF",
      "secondary-title": "#CB2E42",
      "search-params-bg": "#F8FAFD",
      white: "#FFFFFF",
      "background-button": "#0D75FF",
    },
  },
  plugins: [],
};
