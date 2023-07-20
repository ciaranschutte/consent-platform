/** @type {import('tailwindcss').Config} */

import colors from './src/theme/colors'

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    fontFamily: {
      sans: ['var(--font-montserrat)']
    },
    screens: {
      // screen size breakpoints
    },
    extend: {

    },
  },
  plugins: [],
}
