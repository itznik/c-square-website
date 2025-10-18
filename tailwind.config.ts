import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-light': 'var(--background-light)',
        'brand-green': 'var(--brand-green)',
        'text-dark': 'var(--text-dark)',
        'text-light': 'var(--text-light)',
        'accent': 'var(--accent)',
      },
    },
  },
  plugins: [],
}
export default config
