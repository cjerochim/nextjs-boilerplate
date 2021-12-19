import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import Image from "./assets/brand.svg";

export const Base = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const intro = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 0.5;
    }
`;

export const Brand = styled.div`
  display: block;
  width: 6.375em;
  height: 4.875em;
  background-image: url(${Image.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  opacity: 0;
  animation-name: ${intro};
  animation-duration: 0.2s;
  animation-timing-function: cubic-bezier(0.455, 0.03, 0.515, 0.955);
  animation-fill-mode: forwards;
`;
