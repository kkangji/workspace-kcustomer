// import { alpha } from '@mui/material/styles';
// import { outlinedInputClasses } from '@mui/material/OutlinedInput';

export function overrides(theme) {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          margin: 0,
          padding: 0,
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          margin: 0,
          padding: 16,
          width: '100%',
          height: '100%',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        input: {
          '&[type=number]': {
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
            '&::-webkit-inner-spin-button': {
              margin: 0,
              WebkitAppearance: 'none',
            },
          },
        },
        img: {
          maxWidth: '100%',
          display: 'inline-block',
          verticalAlign: 'bottom',
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          // backgroundColor: alpha(theme.palette.grey[900], 0.8),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
        // root: {
        //   borderRadius: 4,
        //   boxShadow: 'none',
        //   background: theme.palette.action.default,
        //   border: `1px solid ${theme.palette.action.default}`,

        //   '&:hover': {
        //     background: theme.palette.action.hover,
        //     border: `1px solid ${theme.palette.action.hover}`,
        //   },

        //   '&:active': {
        //     background: theme.palette.action.active,
        //     border: `1px solid ${theme.palette.action.active}`,
        //   },

        //   '&.Mui-disabled': {
        //     color: theme.palette.text.primary,
        //     background: theme.palette.action.disable,
        //     border: `1px solid ${theme.palette.action.disabled}`,
        //   },

        // span: {
        //   "&.MuiTouchRipple-root": {
        //     visibility: "hidden",
        //   },
        // },
        // },
        // containedInherit: {
        //   color: theme.palette.common.white,
        //   backgroundColor: theme.palette.grey[800],
        //   '&:hover': {
        //     color: theme.palette.common.white,
        //     backgroundColor: theme.palette.grey[800],
        //   },
        // },
        // outlinedPrimary: {
        //   backgroundColor: 'transparent',
        //   color: theme.palette.text.primary,
        //   border: `2px solid ${theme.palette.action.outlined}`,
        //   '&:hover': {
        //     backgroundColor: 'transparent',
        //     color: theme.palette.text.primary,
        //     border: `2px solid ${theme.palette.action.outlined}`,
        //   },
        // },
        sizeLarge: { height: 40, width: 120 },

        sizeMedium: { height: 38, width: 100 },

        sizeSmall: { height: 36, width: 80 },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: Number(theme.shape.borderRadius) * 2,
          position: 'relative',
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2' },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // '& .MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.common.outline,
          // },
          '&:hover': {
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.common.hover,
            },
          },
          // '&.Mui-focused': {
          //   '& .MuiOutlinedInput-notchedOutline': {
          //     border: `1px solid ${theme.palette.common.outline}`,
          //   },
          // },
          // [`& .${outlinedInputClasses.notchedOutline}`]: {
          //   borderColor: theme.palette.common.outline,
          // },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette.grey[800],
        },
        arrow: {
          color: theme.palette.grey[800],
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginTop: 0,
          marginBottom: 10,
          textAlign: 'right',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: theme.palette.common.textCommon,
            ...theme.typography.body1,
          },
        },
      },
    },
  };
}
