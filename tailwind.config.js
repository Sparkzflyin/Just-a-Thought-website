/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        "brand-dark": "#000000",
        "brand-blue": "#004c64",
        "brand-grey-blue": "#6784a4",
        "brand-gold": "#a17b26",
        "brand-brown": "#564034",
        "brand-off-white": "#e5e2da",
      },
      fontFamily: {
        sans: ["var(--font-be-vietnam-pro)", "sans-serif"],
        serif: ["var(--font-lora)", "serif"],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.brand-brown"),
            h1: {
              color: theme("colors.brand-gold"),
            },
            h2: {
              color: theme("colors.brand-gold"),
            },
            h3: {
              color: theme("colors.brand-gold"),
            },
            a: {
              color: theme("colors.brand-blue"),
              "&:hover": {
                textDecoration: "underline",
              },
            },
            blockquote: {
              backgroundColor: theme("colors.brand-off-white"),
              borderLeftColor: theme("colors.brand-gold"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
