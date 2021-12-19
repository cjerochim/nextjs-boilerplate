import { blue, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/system";
import em from "src/utils/em";

import COLORS, { toImportant } from "./colors";

const theme = createTheme({
  app: {
    maxWidth: 1850,
    navWidthXS: 260,
    navWidthMD: 224,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 950,
      lg: 1200,
      xl: 1536,
    },
  },
  spacing: (factor: number) => `${0.5 * factor}em`,
  typography: {
    fontFamily: ["Helvetica", '"Roboto"', '"Arial"', "sans-serif"].join(","),
    h1: {
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1.2,
      letterSpacing: -0.8,
    },
    h2: {
      fontWeight: 700,
      fontSize: 36,
      lineHeight: 1.2,
      letterSpacing: -0.8,
    },
    h3: {
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2,
      letterSpacing: -0.8,
    },
    h4: {
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1.2,
      letterSpacing: -0.8,
    },
    h5: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 1.2,
    },
    body1: {
      fontWeight: "normal",
      letterSpacing: -0.2,
    },
    h6: {
      fontSize: 12,
    },
    button: {
      fontWeight: 400,
      fontSize: 18,
      letterSpacing: -0.8,
    },
  },
  palette: {
    error: {
      main: toImportant(COLORS.ERROR),
    },
    background: {
      default: COLORS.BACKGROUND,
      paper: COLORS.PAPER,
    },
    primary: {
      dark: COLORS.TERTIARY,
      main: COLORS.PRIMARY,
      light: COLORS.QUATERNARY,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
    text: {
      primary: COLORS.PRIMARY,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: em(12),
          letterSpacing: 0,
          padding: em(12),
          width: "100%",
          maxWidth: em(220),
          borderRadius: em(32),
        },
        contained: {
          fontWeight: 700,
        },
        outlined: {
          borderWidth: 2,
          "&:hover": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popper: {},
        listbox: {
          backgroundColor: COLORS.TERTIARY,
        },
        option: {
          paddingTop: `${em(16)}!important`,
          paddingBottom: `${em(16)}!important`,
          "&.Mui-focused": {
            backgroundColor: toImportant(COLORS.BACKGROUND_LIGHT),
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.TERTIARY,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        caption: {
          color: toImportant(alpha(COLORS.PRIMARY, 0.5)),
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: grey[800],
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: alpha(COLORS.PRIMARY, 0.7),
          marginLeft: 0,
          marginTop: em(8),
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: grey[800],
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: COLORS.PRIMARY,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.BACKGROUND,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          paddingTop: em(16),
          paddingBottom: em(16),
          "&:hover, &:focus": {
            backgroundColor: COLORS.BACKGROUND_LIGHT,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {},
        notchedOutline: {
          borderColor: grey[800],
        },
      },
    },
  },
});

export default theme;
