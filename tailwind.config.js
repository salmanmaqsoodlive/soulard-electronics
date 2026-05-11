/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#070d1f',
          900: '#070d1f',
          800: '#0d1730',
          700: '#111e3d',
          600: '#162348',
          500: '#1e3266',
        },
        electric: {
          blue: '#0066ff',
          cyan: '#00d4ff',
          bright: '#0ea5e9',
        },
        steel: {
          DEFAULT: '#1a2744',
          light: '#2a3f6e',
          silver: '#94a3b8',
        },
        neon: '#00ff88',
      },
      fontFamily: {
        display: ['var(--font-orbitron)', 'monospace'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,102,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.04) 1px, transparent 1px)",
        'glow-radial': 'radial-gradient(ellipse at center, rgba(0,102,255,0.15) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,102,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0,102,255,0.5)',
        'neon-cyan': '0 0 20px rgba(0,212,255,0.5)',
        'glow-sm': '0 0 10px rgba(0,102,255,0.3)',
      },
    },
  },
  plugins: [],
}
