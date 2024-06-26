// import { alpha } from '@mui/material/styles';

// SETUP COLORS

export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

export const primary = {
  // lighter: '#D0ECFE',
  // light: '#73BAFB',
  main: '#105D37',
  dark: '#0b4d2c',
  // darker: '#042174',
  // contrastText: '#FFFFFF',
};

export const secondary = {
  // lighter: '#EFD6FF',
  // light: '#C684FF',
  main: '#666666',
  dark: '#5119B7',
  // darker: '#27097A',
  // contrastText: '#FFFFFF',
};

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#C8FAD6',
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#FFFFFF',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#D32F2F',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
  outline: '#D0D5DD',
  hover: '#9D9EAF',
  textCommon: '#4B5768',
};

export const action = {
  hover: '#0b4d2c',
  selected: '#105D37',
  disabled: '#BDBDBD',
  disabledBackground: '#BDBDBD',
  focus: '#0b4d2c',
  outlined: '#C3C3C3',
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  //   divider: alpha(grey[500], 0.2),
  action,
};

export function palette() {
  return {
    ...base,
    mode: 'light',
    text: {
      primary: '#191D23', //grey[800],
      secondary: '#64748B',
      disabled: grey[500],
    },
    background: {
      paper: '#FFFFFF',
      default: grey[100],
      neutral: grey[200],
    },
    action: {
      ...base.action,
      default: '#105D37',
      active: '#105D37',
    },
  };
}
