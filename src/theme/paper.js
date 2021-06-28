import {DefaultTheme, configureFonts} from 'react-native-paper';

import theme from './theme';

export const fontConfig = {
  default: {
    regular: {
      fontFamily: 'MontserratRegular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'MontserratMedium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'MontserratLight',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'MontserratThin',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'MontserratBold',
      fontWeight: 'normal',
    },
    extraBold: {
      fontFamily: 'MontserratExtraBold',
      fontWeight: 'normal',
    },
    semibold: {
      fontFamily: 'MontserratSemiBold',
      fontWeight: 'normal',
    },
    catamaranRegular: {
      fontFamily: 'catamaran_regular',
      fontWeight: 'normal',
    },
    catamaranMedium: {
      fontFamily: 'catamaran_medium',
      fontWeight: 'normal',
    },
  },
};

export const whiteIcon = {
  colors: {
    text: theme.white,
  },
};

export const appDefaultTheme = {
  dark: false,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.primaryColor,
    accent: theme.secondaryColor,
  },
  fonts: configureFonts(fontConfig.default),
  animation: {
    scale: 1.0,
  },
};
