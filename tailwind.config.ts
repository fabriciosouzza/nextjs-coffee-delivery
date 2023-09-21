import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        "yellow-dark": "var(--yellow-dark)",
        "yellow": "var(--yellow)",
        "yellow-light": "var(--yellow-light)",
        "purple-dark": "var(--purple-dark)",
        "purple":"var(--purple)",
        "purple-light": "var(--purple-light)",
        "base-title":"var(--base-title)",
        "base-subtitle": "var(--base-subtitle)",
        "base-text": "var(--base-text)",
        "base-label": "var(--base-label)",
        "base-hover": "var(--base-hover)",
        "base-button": "var(--base-button)",
        "base-input": "var(--base-input)",
        "base-card": "var(--base-card)",
        "background":"var(--background)",
        "white": "var(--white)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'custom-background': "url('/background.png')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'Baloo_2': 'var(--font-baloo)',
        'Roboto': 'var(--font-roboto)'
      },
      gridTemplateColumns: {
        'custom-grid': 'repeat(4, minmax(0, 1fr))'
      },
    },
  },
  plugins: [],
}
export default config
