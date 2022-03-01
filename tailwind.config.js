module.exports = {
  mode:'jit',
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage:{
        'mobilebackground':"url('../images/bg-pattern-intro-mobile.svg')",
        'desktopbackground':"url('../images/bg-pattern-intro-desktop.svg')",
      },
      fontFamily: {
        overpass:['Overpass'],
        ubunto:['Ubunto'],
      },
      colors:{
        lightred:{
          50:'hsl(355, 100%, 74%)',
          100:'hsl(356, 100%, 66%)',

        },
        darkblue:{
          100:'hsl(240, 2%, 79%)',
          200:'hsl(207, 13%, 34%)',
          300:'hsl(208, 49%, 24%)',
          500:'hsl(240, 10%, 16%)',
        },
        gradient:{
          50:'hsl(13, 100%, 72%)',
          100:'hsl(353, 100%, 62%)',
          200:'hsl(237, 17%, 21%)',
          300:'hsl(237, 23%, 32%)',
        }


      }
    },
  },
  plugins: [],
}
