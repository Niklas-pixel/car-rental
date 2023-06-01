/** @type {import('tailwindcss').Config} */

module.exports = { mode: 'jit',
// These paths are just examples, customize them to match your project structure
purge: [
  './public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx}',
],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        dance: ['var(--font-dance)'],
        lobster: ['var(--font-lobster)'],
      },
    },
  },
  plugins: [],
}

