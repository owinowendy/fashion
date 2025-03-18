// Colors
import colors from 'vuetify/lib/util/colors';

const palette = {
  grayscale: {
    primary: colors.blueGrey.darken1, // primary main
    primarylight: colors.blueGrey.lighten4, // primary light
    primarydark: colors.blueGrey.darken4, // primary dark
    secondary: colors.brown.base, // secondary main
    secondarylight: colors.brown.lighten4, // secondary light
    secondarydark: colors.brown.darken4, // secondary dark
    anchor: colors.brown.base, // link
  },
};

const theme = {
  ...palette.grayscale,
};

export default theme;
