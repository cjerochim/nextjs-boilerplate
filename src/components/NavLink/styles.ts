import styled from "@emotion/styled";
import { alpha } from "@mui/material";
import em from "src/utils/em";
import toVariantDefault from "src/utils/toVariantDefault";

interface NavItemProps {
  active: boolean;
  variant?: "primary" | "secondary";
}

export const NavItem = styled.a<NavItemProps>`
  position: relative;
  display: block;
  width: 100%;
  color: inherit;
  cursor: pointer;
  padding: ${toVariantDefault<NavItemProps["variant"]>(
    "secondary",
    () => "1em",
    () => "0.5em 1em"
  )};
  text-decoration: none;

  /* Transition */
  transition-property: color;
  transition-duration: 0.3s;
  transition-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);

  font-weight: ${({ active }) => (active ? "700" : "400")};
  font-family: ${({ theme }) => theme.typography.button.fontFamily};
  letter-spacing: ${({ theme }) =>
    `${theme.typography.button.letterSpacing}px`};
  font-size: ${toVariantDefault<NavItemProps["variant"]>(
    "secondary",
    (theme) => em(theme.typography.h5.fontSize),
    (theme) => em(theme.typography.h3.fontSize)
  )};

  &:hover,
  &:focus {
    transition-duration: 0.2s;
    color: ${({ theme, active }) =>
      alpha(theme.palette.primary.main, active ? 1.0 : 0.5)};
  }
`;
