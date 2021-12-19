import { Typography } from "@mui/material";
import { ReactNode } from "react";

import { Base, BaseHeader, BaseBody, BaseFooter } from "./styles";

interface FooterProps {
  children: ReactNode;
  align: "left" | "center" | "right";
}

const Footer = ({ children, align }: FooterProps) => (
  <BaseFooter align={align}>{children}</BaseFooter>
);

Footer.defaultProps = {
  align: "right",
};

interface BodyProps {
  children: ReactNode;
  variant?: "standard" | "form";
}

const Body = ({ children, variant }: BodyProps) => (
  <BaseBody variant={variant!}>{children}</BaseBody>
);

Body.DefaultProps = {
  variant: "standard",
};

interface ViewProps {
  title: string;

  children: ReactNode;
  footer?: ReactNode;
}

const View = ({ children, title }: ViewProps) => (
  <Base>
    <BaseHeader>
      <Typography variant="h2">{title}</Typography>
    </BaseHeader>
    {children}
  </Base>
);

View.Body = Body;
View.Footer = Footer;

export default View;
