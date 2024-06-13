import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          50: "#F4F6FB",
          100: "#E9EDF5",
          200: "#CED9E9",
          300: "#A3B8D6",
          400: "#7192BF",
          500: "#4F73A8",
          600: "#3C5B8D",
          700: "#324972",
          800: "#2C4060",
          900: "#2B3A55",
          950: "#1B2436",
        },
      },
    },
  },
};
