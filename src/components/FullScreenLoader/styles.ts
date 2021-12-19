import styled from "@emotion/styled";
import { alpha, Backdrop } from "@mui/material";

export const Base = styled(Backdrop)`
  color: ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) =>
    alpha(theme.palette.background.default, 0.9)};
  z-index: 100;
`;
