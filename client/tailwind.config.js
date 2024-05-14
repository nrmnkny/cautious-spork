module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
      sans: ['Inter var', 'sans-serif'], 
    },
      animation: {
        'enter': 'enter 1s ease-out forwards',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        enter: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 }
        },
      },
      colors: {
        vaporwavePink: '#ff91af',
        vaporwavePurple: '#c991e1',
        vaporwaveBlue: '#7dcfb6',
        vaporwaveDark: '#280137',
        customRed: '#ff4242', 
      },
      fontFamily: {
        header: ['Pacifico', 'cursive'],
        body: ['Roboto Mono', 'monospace'],
        general: ['GeneralFont', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/vapourwave.jpg')", 
      },
    }
  },
  plugins: [],
};
