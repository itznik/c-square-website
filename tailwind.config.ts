import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
<<<<<<< HEAD
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
      fontFamily: {
        // Optional: Add Poppins here for easier use if you prefer
        // sans: ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
export default config
=======
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
                                                                                fontFamily: {
                                                                                        // Optional: Add Poppins here for easier use if you prefer
                                                                                                // sans: ['Poppins', 'sans-serif'], 
                                                                                                      },
                                                                                                          },
                                                                                                            },
                                                                                                              plugins: [],
                                                                                                              }
                                                                                                              export default config
                            
>>>>>>> 72d67f9 (updated framer)
