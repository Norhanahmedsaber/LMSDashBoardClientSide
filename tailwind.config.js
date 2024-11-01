
/** @type {import('tailwindcss').Config} */
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sidebar-gradient': 'linear-gradient(to bottom, #0B486B, #0C9DA1)', 
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      fontFamily:{
        fellFrench:["IM Fell French Canon SC", "serif"],
        poppins: ["Poppins", "sans-serif"],
        DancingScript:["Dancing Script","cursive"]
      }
    },
  },
  plugins: [addVariablesForColors],
}
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
