import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],

        heading: ['var(--font-orbitron)', 'sans-serif'],

        display: ['var(--font-space-grotesk)', 'sans-serif'],

        mono: ['var(--font-mono)', 'monospace'],
      },

      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',

        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',

        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',

        secondary: 'var(--secondary)',
        'secondary-foreground': 'var(--secondary-foreground)',

        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',

        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',

        border: 'var(--border)',
      },

      boxShadow: {
        glow: `
          0 0 20px rgba(59,130,246,0.22),
          0 0 40px rgba(59,130,246,0.1)
        `,

        'glow-cyan': `
          0 0 20px rgba(0,217,255,0.25),
          0 0 40px rgba(0,217,255,0.1)
        `,

        'glow-lg': `
          0 0 50px rgba(59,130,246,0.3),
          0 0 120px rgba(0,217,255,0.12)
        `,
      },

      backdropBlur: {
        xs: '2px',
      },

      keyframes: {
        glow: {
          '0%, 100%': {
            opacity: '0.7',
          },

          '50%': {
            opacity: '1',
          },
        },

        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },

          '50%': {
            transform: 'translateY(-12px)',
          },
        },

        scan: {
          '0%': {
            transform: 'translateY(-100%)',
          },

          '100%': {
            transform: 'translateY(100vh)',
          },
        },
      },

      animation: {
        glow: 'glow 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        scan: 'scan 8s linear infinite',
      },
    },
  },

  plugins: [],
}

export default config