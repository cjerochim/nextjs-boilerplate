import styled from "@emotion/styled";
import { Breadcrumbs as MUIBreadcrumbs, Link as MUILink } from "@mui/material";

export const Breadcrumbs = styled(MUIBreadcrumbs)`
  color: ${({ theme }) => theme.palette.text.primary};
  li {
    margin-right: 0.1em;
  }

  li[aria-hidden="true"] {
    opacity: 0.5;
    margin-right: 0.6em;
  }
`;

export const BreadCrumbLink = styled(MUILink)`
  opacity: 0.5;
`;
