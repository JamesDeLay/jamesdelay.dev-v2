module.exports = {
  purge: ['./components/**/*.js', './pages/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary:'#A2E3C4',
        secondary:'#F7934C',
        accent:'#7E6B8F',
        dark:'#212227',
        light:'#F7F4F3',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '10xl': '5rem',
        '15xl': '7.5rem',
        '20xl': '10rem',
      },
      height: {
        xl: `35rem`,
        xxl: `45rem`,
        half: `50vh`,
        threeQuarters: `75vh`
      },
      fontFamily: {
        limelight: ['Limelight']
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
}
