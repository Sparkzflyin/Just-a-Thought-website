/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#003c64',
        'brand-off-white': '#e5e2da',
        'brand-grey-blue': '#6784a4',
        'brand-brown': '#564034',
      },
      fontFamily: {
        sans: ['var(--font-be-vietnam-pro)', 'sans-serif'],
        serif: ['var(--font-dancing-script)', 'cursive'],
      },
    },
  },
  plugins: [],
};
