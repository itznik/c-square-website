import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // The dark theme color palette
      colors: {
        'brand-dark': '#0a0a0a',
        'brand-charcoal': '#1a1a1a',
        'brand-stone': '#2c2c2c',
        'brand-light': '#f0f0f0',
        'brand-accent': '#00ff99',
        'brand-accent-dark': '#00cc7a',
        'brand-deep-green': '#38423B', // Added from previous steps
        'brand-accent-cream': '#EAE9E4', // Added from previous steps
      },
      // Connect the font variables from layout.tsx
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-lora)'],
      },
    },
  },
  plugins: [],
};
export default config;
