module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'amber': '#d5c455',
      'gray-600': '#4b5563',
      'gray-500': '#6b7280',
      'gray-400': '#9ca3af',
      'white': '#ffffff',
      'orange': '#ca8a04',
      'amber-light': '#fffbeb',
      'amber-600': '#d97706',
      'amber-200': '#fde68a',
      'gray-200': '#e2e8f0',
      'blue-500': '#455291'
    },
    extend: {
      fontFamily: {
        body: ['Lato'],
        kolker: ['Bebas Neue']
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}