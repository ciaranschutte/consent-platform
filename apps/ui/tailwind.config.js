/** @type {import('tailwindcss').Config} */

import colors from './src/theme/colors';

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors,
    fontFamily: {
      sans: ['var(--font-montserrat)'],
    },
    // TODO: add these as rem values, will get updated when style guide updated
    fontSize: {
      xs: ['13px', { lineHeight: '15.85px', fontWeight: '400' }],
      sm: ['14px', { lineHeight: '16px', fontWeight: '400' }],
      base: ['16px', { lineHeight: '19.5px', fontWeight: '400' }],
      lg: ['18px', { lineHeight: '22px', fontWeight: '400' }],
      xl: ['24px', { lineHeight: '29px', fontWeight: '400' }],
      '2xl': ['46px', { lineHeight: '56px', fontWeight: '400' }],
    },
    fontWeight: {
      normal: '400',
      bold: '600',
    },
    extend: {},
  },
  plugins: [],
};
