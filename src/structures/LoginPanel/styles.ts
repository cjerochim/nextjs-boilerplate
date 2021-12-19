import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import space from "src/utils/space";
import Image from "./assets/brand.svg";

const intro = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const Base = styled.aside`
  position: relative;
  padding: ${space()};
  border-radius: 5px;
  width: 100%;
  max-width: 25em;
`;

export const BaseHeader = styled.header`
  position: relative;
  & > :first-child {
    margin-top: 0;
  }
`;

interface FormGroupProps {
  align?: "default" | "right";
}

export const FormGroup = styled.div<FormGroupProps>`
  position: relative;
  margin-top: ${space(4)};
  margin-bottom: ${space(4)};
  display: flex;
`;

export const BaseForm = styled.form`
  position: relative;
  padding-top: ${space()};
  padding-bottom: ${space()};
  > :first-child {
    margin-top: 0;
  }

  > :last-child {
    margin-bottom: 0;
  }
`;

export const BaseFooter = styled.footer`
  position: relative;
`;

export const Brand = styled.h2`
  position: relative;
  display: block;
  margin: 1em 0;
  font-size: 1em;
  width: 4.375em;
  height: 1.875em;
  opacity: 0;

  background-image: url(${Image.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  animation-name: ${intro};
  animation-duration: 2s;
  animation-delay: 0.5s;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-fill-mode: forwards;
`;

export const Heading = styled(Typography)`
  margin-top: 2em;
`;

export const Divider = styled.div`
  width: 100%;
  margin-top: 1em;
  margin-bottom: 1em;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[800]};
`;

export const VisuallyHidden = styled.span`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
