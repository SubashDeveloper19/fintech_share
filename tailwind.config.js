/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*'],
  theme: {
    extend: {
      colors: {
        primary: "#293FCC",
        font_primary: "#090F4E",
        font_secondery: "#63657E",
      },
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        montserrat: ['montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero_bg': "url('../img/Header_BG.png')",
        'product_bg': "url('../img/product_bg.png')",
        'enterprise_bg': "url('../img/enterprise_bg.png')",
        'form_bg': "url('../img/form_bg.png')",
        'footer_bg': "url('../img/Footer_bg.png')",
      }
    },
  },
  plugins: [],
}

