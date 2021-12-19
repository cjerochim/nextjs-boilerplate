import styled from "@emotion/styled";
import { Select as MUISelect } from "@mui/material";

export const Base = styled(MUISelect)`
  svg {
    color: ${({ theme, error }) =>
      error ? theme.palette.error.main : "inherit"};
  }
`;
