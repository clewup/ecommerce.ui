import { createTheme } from "@mui/material";
import { colors } from "./colors";
import React from "react";

export const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: { color: colors.BLACK },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: { color: colors.BLACK, padding: "2rem 0" },
      },
    },
  },
  palette: {
    _blue: {
      main: colors.BLUE,
      light: colors.LIGHT_BLUE,
      dark: colors.DARK_BLUE,
      contrastText: colors.WHITE,
    },
    _white: {
      main: colors.WHITE,
      light: colors.LIGHT_WHITE,
      dark: colors.DARK_WHITE,
      contrastText: colors.BLACK,
    },
    _grey: {
      main: colors.GREY,
      light: colors.LIGHT_GREY,
      dark: colors.DARK_GREY,
      contrastText: colors.BLACK,
    },
    _red: {
      main: colors.RED,
      light: colors.LIGHT_RED,
      dark: colors.DARK_RED,
      contrastText: colors.WHITE,
    },
    _black: {
      main: colors.BLACK,
      light: colors.LIGHT_BLACK,
      dark: colors.DARK_BLACK,
      contrastText: colors.WHITE,
    },
    _orange: {
      main: colors.ORANGE,
      light: colors.LIGHT_ORANGE,
      dark: colors.DARK_ORANGE,
      contrastText: colors.BLACK,
    },
  },
  text: {
    primary: {
      fontSize: "16px",
      color: colors.BLACK,
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  spacing: 4,
});

declare module "@mui/material/styles" {
  interface Theme {
    text?: {
      primary?: {
        fontSize?: string;
      };
    };
  }

  interface ThemeOptions {
    text?: {
      primary?: {
        fontSize?: React.CSSProperties["fontSize"];
        color?: React.CSSProperties["color"];
      };
    };
  }

  interface Palette {
    _blue: Palette["primary"];
    _white: Palette["primary"];
    _grey: Palette["primary"];
    _red: Palette["primary"];
    _black: Palette["primary"];
    _orange: Palette["primary"];
  }
  interface PaletteOptions {
    _blue: Palette["primary"];
    _white: Palette["primary"];
    _grey: Palette["primary"];
    _red: Palette["primary"];
    _black: Palette["primary"];
    _orange: Palette["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    _blue: true;
    _white: true;
    _grey: true;
    _red: true;
    _black: true;
    _orange: true;
  }
}
