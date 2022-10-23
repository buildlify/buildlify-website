/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      primary: '#495EE3',
      secondary: '#FF6815',
      dark: '#0F0F19',
      black: '#000',
      white: '#fff',
      darkWhite: '#D8D8D8',
      gray: '#9399C0',
      darkGray: '#161827',
      lightGray: '#54566F',
    },
    borderRadius: {
      primary: '20px',
      full: '50%',
    },
    boxShadow: {
      primary: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    },
    fontFamily: {
      primary: ['Rubik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
