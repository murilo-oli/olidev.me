import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  safelist: [
    {
      pattern: /(text|border)-main-(green|red|blue|purple|yellow|cyan)/,
      variants: ["hover"],
    },
  ],
  theme: {
    extend: {
      colors: {
        "main-black": "#131616",
        "main-white": "#fefefe",
        "main-gray": "#817e7e",
        "main-green": "#98C379",
        "main-red": "#E06C75",
        "main-blue": "#61AFEF",
        "main-purple": "#C678DD",
        "main-yellow": "#E5C07B",
        "main-cyan": "#56B6C2",

      },
      fontFamily: {
        sans: ["Lexend", "system-ui", "sans-serif"],
      },
    },
  },
};
