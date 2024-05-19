module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        header: ['Pacifico', 'cursive'],
        body: ['Roboto Mono', 'monospace'],
      },
      colors: {
        dark: '#121212',
        darker: '#0d0d0d',
        red: '#FF0000',
        white: '#FFFFFF',
        gray: {
          800: '#2d2d2d',
          900: '#1a1a1a',
        },
      },
      backgroundImage: {
        'dark-pattern': "url('assets/dark-pattern.webp')",
      },
    },
  },
  plugins: [],
};
