import styled from "@emotion/styled";
import space from "src/utils/space";
import toAlign, { Align } from "./utils/toAlign";

export const Base = styled.div`
  position: relative;
`;

export const BaseHeader = styled.header`
  position: relative;
  padding: ${space(3)} 0;
`;

interface BaseBodyProps {
  variant: "standard" | "form";
}

export const BaseBody = styled.div<BaseBodyProps>`
  position: relative;
  /* TODO - Refine, requre to adjust for form elements aligning to left navigation */
  padding: ${({ variant }) => (variant === "standard" ? "1em 0" : "1.9em 0")};
  & > :first-child {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
  }
`;

interface BaseFooterProps {
  align: Align;
}

export const BaseFooter = styled.footer<BaseFooterProps>`
  position: relative;
  padding: ${space()} 0 ${space(4)} 0;
  display: flex;
  justify-content: ${({ align }) => toAlign(align)};
`;
