/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#84EC8E',
    },
    fontFamily: {
      'ibm-mono': 'IBM Plex Mono',
      'dm-mono': 'DM Mono',
      'body': 'IBM Plex Sans',
    },
  },
  plugins: [],
}
