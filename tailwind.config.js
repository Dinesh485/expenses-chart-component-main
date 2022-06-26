/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors:{
        'Soft-red': 'hsl(10, 79%, 65%)',
        'Dark-brown': 'hsl(25, 47%, 15%)',
        'Cyan': 'hsl(186, 34%, 60%)',
         'Medium-brown': 'hsl(28, 10%, 53%)',
         'Cream': 'hsl(27, 66%, 92%)',
         'Very-pale-orange': 'hsl(33, 100%, 98%)',
      },
      fontFamily:{
        'Dm-sans' : ['DM Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
