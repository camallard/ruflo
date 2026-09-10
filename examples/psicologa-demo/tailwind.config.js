/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta do site — ajuste aqui se quiser variar os tons.
        canvas: '#FBF9F5', // off-white quente (fundo principal)
        cream: '#F4EFE6', // bege muito claro (fundos alternados)
        sage: {
          50: '#EEF2ED',
          100: '#DFE7DD',
          200: '#C3D2C1',
          300: '#A3B8A2',
          400: '#849C85',
          500: '#6C8570', // verde salvia principal
          600: '#576D5C',
          700: '#455749',
        },
        clay: {
          200: '#E7DCCC',
          300: '#D3C2AC',
          400: '#B9A288',
          500: '#9C8467', // marrom/bege dos detalhes
          600: '#7C6950',
        },
        ink: {
          DEFAULT: '#2E332F', // cinza escuro dos titulos
          soft: '#4A524C', // corpo de texto
          muted: '#77807A', // legendas e apoios
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.22em',
      },
      maxWidth: {
        content: '78rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(46,51,47,0.04), 0 8px 24px -12px rgba(46,51,47,0.12)',
        lift: '0 2px 4px rgba(46,51,47,0.04), 0 20px 40px -20px rgba(46,51,47,0.22)',
      },
      transitionTimingFunction: {
        calm: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
