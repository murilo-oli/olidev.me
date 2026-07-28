import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        "main-black": "#131616",
        "main-white": "#fefefe",
        "main-gray": "#817e7e",
        "main-accent": "#39b898",

      },
      fontFamily: {
        sans: ["Lexend", "system-ui", "sans-serif"],
      },
    },
  },
};
