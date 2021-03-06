import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  ...theme.breakpoints,
  breakpoints: ['23em', '42em', '62em', '101em'],
  colors: {
    ...theme.colors,
    blood: {
      50: '#d21e47',
      500: '#a61d39',
      900: '#731a22',
    },
    secondary: '#085573',
    tertiary: '#F47E25',
  },
};

export default customTheme;
