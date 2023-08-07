/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'kablammo': ['Kablammo'],
        'ysabeau': ['Ysabeau SC'],
        'fasthand': ['Fasthand'],
        'karla': ['Karla'],
        'nunito':['Nunito'],
        'borel':['Borel'],
        'rubik':['Rubik'],
      },
      backgroundImage: {
        'first-sec': "url('https://images.unsplash.com/photo-1616555670626-09496d2eed9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMGhvdXNlfGVufDB8fDB8fHww&w=1000&q=80')",
      },
    },
  },
  plugins: [],
}

