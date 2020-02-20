/* eslint-disable no-redeclare */
import { theme } from '@chakra-ui/core';

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    blood: {
      50: '#d21e47',
      900: '#731a22',
    },
  },
};

export default customTheme;
