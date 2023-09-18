/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        urdu: ["Jameel Noori Nastaleeq Urdu", "serif"],
        roboto: ["Roboto", "sans-serif"],
        // 'poppins': ['Poppins', 'sans-serif'],
        quran: ["PDMS_Saleem_QuranFont-signed", "serif"],
        darkMode: 'class',
        // 'mehr': ['Mehr_Nastaliq_Web_version_1.0_beta', 'serif'],
      },

      screens: {
        'hover-hover': { 'raw': '(hover:hover)' },
        'hover-none': { 'raw': '(hover:none)' },
      },

      // @media (hover:hover){
      //   body{
      //     background-color: black !important;
      //   }
      // }
      // @media (hover:none){
      //   body{
      //     background-color: red !important;
      //   }
      // }

      // backgroundImage: {
      //   "pattern-1": "url('/img/background/background-1.jpg')",
      // },
      // backgroundSize: ({ theme }) => ({
      //   auto: "auto",
      //   cover: "cover",
      //   contain: "contain",
      //   ...theme("spacing"),
      // }),
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ec0081",
          secondary: "#8dc63f",
          accent: "#570DF8",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#10dc60",
          warning: "#ffce00",
          error: "#f53d3d",
        },
      },
    ],
  },
  plugins: [require("tailwindcss-rtl"), require("daisyui")],


};

