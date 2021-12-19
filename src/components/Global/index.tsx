import { Global, css, Theme } from "@emotion/react";
import { alpha } from "@mui/material";

// Basic global styles
const styles = (theme: Theme) => {
  const { palette } = theme;
  // console.log(theme);
  return css`
    html {
      box-sizing: border-box;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    html,
    body {
      position: relative;
      margin: 0;
      padding: 0;
    }

    body {
      font-size: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background-color: ${palette.background.default};
      color: ${palette.text.primary};
    }

    /* Override date picker, sits outside of theme customisation */
    .MuiDateRangePickerDay-day:not(.Mui-selected) {
      border-color: ${alpha(palette.text.primary, 0.5)}!important;
    }
  `;
};

const GlobalStyles = () => <Global styles={styles} />;

export default GlobalStyles;
