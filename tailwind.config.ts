/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // NEW DARK THEME COLOR PALETTE
      colors: {
        'brand-dark': '#0a0a0a', // Almost black for deep backgrounds
        'brand-charcoal': '#1a1a1a', // Dark grey for secondary elements
        'brand-stone': '#2c2c2c', // Lighter grey for cards and borders
        'brand-light': '#f0f0f0', // Off-white for primary text
        'brand-accent': '#00ff99', // A vibrant, modern green accent
        'brand-accent-dark': '#00cc7a', // A darker green for hover states
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-lora)'],
      },
      backgroundImage: {
        'grid-pattern': "url('/grid.svg')",
      },
    },
  },
  plugins: [],
}
