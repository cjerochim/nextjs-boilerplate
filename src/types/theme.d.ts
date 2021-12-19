import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    app: {
      maxWidth?: number;
      navWidthXS?: number;
      navWidthMD?: number;
    };
  }
  interface ThemeOptions {
    app?: {
      maxWidth?: number;
      navWidthXS?: number;
      navWidthMD?: number;
    };
  }
}
