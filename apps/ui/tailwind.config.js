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
    fontSize: {
      xs: ['0.81rem', { lineHeight: '1.25rem', fontWeight: '400' }], // 13px, 20px
      sm: ['0.875rem', { lineHeight: '1.5rem', fontWeight: '400' }], // 14px, 24px
      base: ['1rem', { lineHeight: '1.625rem', fontWeight: '400' }], // 16px, 26px
      lg: ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }], // 18px, 28px
      xl: ['1.5rem', { lineHeight: '2rem', fontWeight: '400' }], // 24px, 32px
      '2xl': ['2.25rem', { lineHeight: '2.875rem', fontWeight: '400' }], // 36px 46px
      '3xl': ['2.875rem', { lineHeight: '3.5rem', fontWeight: '400' }], // 46px, 56px
    },
    fontWeight: {
      normal: '400',
      bold: '600',
      header: '700',
    },
    extend: {},
  },
  plugins: [],
};
