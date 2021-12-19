import type { MouseEvent, ReactNode } from "react";
import { forwardRef } from "react";

import { Base } from "./styles";

interface ButtonProps {
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  children: ReactNode;
  fullWidth?: boolean;
  component?: "span" | "button" | "anchor";
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const toStyle = (variant: ButtonProps["variant"]): any => {
  switch (variant) {
    case "primary":
      return {
        variant: "contained",
        color: "secondary",
        disableElevation: true,
      };
    case "secondary":
      return {
        variant: "outlined",
        color: "secondary",
      };
  }
};

const Button = forwardRef(
  (
    { children, variant, onClick, component, type, fullWidth }: ButtonProps,
    ref
  ) => {
    return (
      <Base
        type={type}
        ref={ref}
        // TODO - Investigate how to extend properties of a MUI component with Styled.
        // Using inline as a temp solution.
        sx={{ maxWidth: fullWidth ? "none!important" : "inherit" }}
        {...toStyle(variant)}
        onClick={onClick}
        component={component}
      >
        {children}
      </Base>
    );
  }
);

Button.defaultProps = {
  variant: "secondary",
  component: "button",
  type: "button",
  fullWidth: false,
};

export default Button;
